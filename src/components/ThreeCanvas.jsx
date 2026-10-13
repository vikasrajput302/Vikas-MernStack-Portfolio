import { useEffect, useRef } from 'react';

export default function ThreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Icosahedron Vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const a = 1;
    const b = 1 / phi;

    const rawVertices = [
      [0, b, -a],
      [b, a, 0],
      [-b, a, 0],
      [0, b, a],
      [0, -b, a],
      [-a, 0, b],
      [0, -b, -a],
      [a, 0, -b],
      [a, 0, b],
      [-a, 0, -b],
      [b, -a, 0],
      [-b, -a, 0],
    ];

    // Edges between vertices
    const edges = [];
    for (let i = 0; i < rawVertices.length; i++) {
      for (let j = i + 1; j < rawVertices.length; j++) {
        const dx = rawVertices[i][0] - rawVertices[j][0];
        const dy = rawVertices[i][1] - rawVertices[j][1];
        const dz = rawVertices[i][2] - rawVertices[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (Math.abs(dist - 2 * b) < 0.1 || Math.abs(dist - 2) < 0.1) {
          edges.push([i, j]);
        }
      }
    }

    let angleX = 0;
    let angleY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetAngleY = (x / rect.width) * 1.5;
      targetAngleX = -(y / rect.height) * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow + constant rotation
      angleY += 0.005 + (targetAngleY - angleY) * 0.05;
      angleX += 0.003 + (targetAngleX - angleX) * 0.05;

      const scale = Math.min(width, height) * 0.32;
      const fov = 400;

      // Rotate and project vertices
      const projected = rawVertices.map(([vx, vy, vz]) => {
        // Rotate around Y
        let x1 = vx * Math.cos(angleY) + vz * Math.sin(angleY);
        let y1 = vy;
        let z1 = -vx * Math.sin(angleY) + vz * Math.cos(angleY);

        // Rotate around X
        let x2 = x1;
        let y2 = y1 * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = y1 * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Projection
        const distance = 3.5;
        const pz = z2 + distance;
        const px = (x2 * fov) / pz + width / 2;
        const py = (y2 * fov) / pz + height / 2;

        return { x: px, y: py, z: z2 };
      });

      // Draw edges
      ctx.lineWidth = 1;
      for (const [i, j] of edges) {
        const v1 = projected[i];
        const v2 = projected[j];
        const avgZ = (v1.z + v2.z) / 2;
        const alpha = Math.max(0.1, Math.min(0.65, (avgZ + 1.5) / 3));

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.stroke();
      }

      // Draw vertices
      for (const v of projected) {
        const alpha = Math.max(0.2, Math.min(0.9, (v.z + 1.5) / 3));
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full relative pointer-events-none flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
