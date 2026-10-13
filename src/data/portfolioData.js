export const PERSONAL = {
  name: 'Vikas',
  title: 'Full Stack & Creative Frontend Developer',
  taglines: [
    'MERN Stack Developer',
    'Creative Frontend Engineer',
    'Backend & API Architecture',
  ],
  status: 'Available for freelance & full-time roles',
  location: 'Panipat, Haryana, India',
  coordinates: '29.3909° N, 76.9635° E',
  email: 'vr9188794@gmail.com',
  phone: '+91 8168753832',
  photo: '/vikas-profile.jpg',
  resumeImage: '/vikas-resume.png',
  about: `I am a full stack & frontend developer obsessed with clean code, high-performance web architecture, and brutalist minimalism. I bridge the gap between creative visual engineering and robust backend systems. Completed my BCA in 2027 and actively engineering production-ready applications with modern JavaScript, React, Node.js, and expressive micro-interactions.`,
  socials: {
    github: 'https://github.com/vikasrajput302',
    linkedin: 'https://www.linkedin.com/in/vikas-rajput',
    twitter: 'https://x.com/vr9188794',
    instagram: 'https://www.instagram.com/__coding_hub',
    discord: 'VikasRajput23',
  },
};

export const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'QuickBlog',
    subtitle: 'Modern Rich-Text Publishing Platform',
    description:
      'A full-featured blog editor frontend built with React.js. Integrates Quill rich-text editor for seamless long-form writing, article drafting, and full CRUD operations with a responsive editorial UI.',
    tech: ['React.js', 'JavaScript', 'Quill Editor', 'CSS3', 'REST API'],
    github: 'https://github.com/vikasrajput302/QuickBlog',
    live: 'https://quick-blog-client.vercel.app',
    featured: true,
    year: '2024',
    role: 'Frontend Engineering',
  },
  {
    id: 2,
    title: 'Todo App',
    subtitle: 'High-Performance Productivity Engine',
    description:
      'Distraction-free task management application featuring instant state synchronization, filtering algorithms, and persistent local storage built with React Hooks and fluid interactions.',
    tech: ['React.js', 'React Hooks', 'JavaScript', 'CSS3', 'State Management'],
    github: 'https://github.com/vikasrajput302/Todo-App',
    live: 'https://todo-app-nu-self-80.vercel.app',
    featured: true,
    year: '2024',
    role: 'Frontend & Architecture',
  },
];

export const SKILLS = [
  {
    category: 'Frontend Engineering',
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'GSAP Animations',
      'Framer Motion',
      'Bootstrap',
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Authentication (JWT)',
      'Database Architecture',
      'CRUD Operations',
    ],
  },
  {
    category: 'Core Languages',
    skills: ['JavaScript', 'C++', 'C', 'Java'],
  },
  {
    category: 'Tooling & Workflow',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Vercel Deployment',
      'Postman',
      'Chrome DevTools',
    ],
  },
];

export const TIMELINE = [
  {
    id: 1,
    type: 'work',
    role: 'MERN Stack Developer — Industrial Training',
    organization: 'Novem Controls Pvt. Ltd.',
    period: 'Industrial Training',
    description:
      'Engineered responsive web components and collaborated on production-grade client interfaces. Strengthened understanding of scalable UI architecture, asynchronous API flows, and clean code conventions.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 2,
    type: 'education',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Undergraduate Degree',
    period: 'Completed 2027',
    description:
      'Comprehensive study of Computer Science principles, Data Structures & Algorithms, Object-Oriented Programming, and Web Engineering.',
    tags: ['Algorithms', 'Software Engineering', 'DBMS', 'Web Systems'],
  },
];

export const MARQUEE_ITEMS = [
  'MERN STACK DEVELOPER',
  'CREATIVE FRONTEND',
  'REACT.JS & GSAP',
  'CLEAN ARCHITECTURE',
  'BRUTALIST MINIMALISM',
  'NODE.JS & REST APIS',
  'ACCESSIBLE WEB',
  'PERFORMANCE FIRST',
];
