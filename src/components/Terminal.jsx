import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL, PROJECTS, SKILLS } from '../data/portfolioData';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Welcome to Vikas CLI v2.0.27. Type "help" or click a command below to explore.',
    },
  ]);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: `vikas@portfolio:~$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  • about      - Display developer background & bio
  • projects   - List featured production projects & links
  • skills     - Show technical stack & core competencies
  • contact    - Get email, phone, and direct contact details
  • socials    - List all active social links (GitHub, LinkedIn, etc.)
  • clear      - Clear terminal screen
  • whoami     - Current user identity`,
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `${PERSONAL.name} // ${PERSONAL.title}
Location: ${PERSONAL.location} (${PERSONAL.coordinates})
Education: BCA (Graduated 2027)
Experience: 1-Month Industrial Training at Novem Controls Pvt. Ltd.
Bio: ${PERSONAL.about}`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: PROJECTS.map(
            (p, i) =>
              `[${i + 1}] ${p.title} (${p.year}) - ${p.subtitle}\n    Live: ${p.live}\n    Repo: ${p.github}\n    Tech: ${p.tech.join(', ')}`
          ).join('\n\n'),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: SKILLS.map(
            (s) => `• ${s.category.toUpperCase()}:\n    ${s.skills.join(', ')}`
          ).join('\n'),
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${PERSONAL.email}
Phone: ${PERSONAL.phone}
Location: ${PERSONAL.location}
Status: Available for hire`,
        });
        break;

      case 'socials':
        newHistory.push({
          type: 'output',
          text: `GitHub:    ${PERSONAL.socials.github}
LinkedIn:  ${PERSONAL.socials.linkedin}
Twitter/X: ${PERSONAL.socials.twitter}
Instagram: ${PERSONAL.socials.instagram}
Discord:   ${PERSONAL.socials.discord}`,
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `guest@vikas-portfolio // welcome curious explorer!`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" to see available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
  };

  const quickCommands = ['help', 'about', 'projects', 'skills', 'contact', 'clear'];

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-neutral-950 overflow-hidden shadow-2xl font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="bg-neutral-900/90 border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/20" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/20" />
          <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/20" />
          <span className="text-neutral-400 text-[11px] ml-2 flex items-center gap-1.5">
            <TerminalIcon size={12} className="text-white" />
            vikas@terminal: ~ (bash)
          </span>
        </div>

        <span className="text-[10px] text-neutral-400 hidden sm:inline-block">
          INTERACTIVE SHELL
        </span>
      </div>

      {/* Terminal Output Body */}
      <div
        className="p-4 sm:p-6 min-h-[260px] max-h-[360px] overflow-y-auto space-y-3 bg-black/90 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed whitespace-pre-wrap">
            {item.type === 'input' ? (
              <span className="text-white font-semibold">{item.text}</span>
            ) : item.type === 'system' ? (
              <span className="text-neutral-400 flex items-center gap-2">
                <Sparkles size={13} className="text-white" />
                {item.text}
              </span>
            ) : item.type === 'error' ? (
              <span className="text-red-400">{item.text}</span>
            ) : (
              <span className="text-neutral-300">{item.text}</span>
            )}
          </div>
        ))}

        {/* Input prompt line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-white font-semibold">vikas@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command..."
            className="flex-1 bg-transparent text-white outline-none caret-white placeholder:text-neutral-600 font-mono text-xs"
          />
          <button
            type="submit"
            className="text-neutral-400 hover:text-white p-1 transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft size={13} />
          </button>
        </form>

        <div ref={endRef} />
      </div>

      {/* Quick Clickable Suggestions */}
      <div className="border-t border-white/10 bg-neutral-900/60 p-3 flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest mr-1">
          Quick Run:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd)}
            className="px-2.5 py-1 rounded bg-black border border-white/10 text-neutral-300 hover:text-black hover:bg-white hover:border-white transition-all text-[11px]"
            data-cursor-hover
          >
            ${cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
