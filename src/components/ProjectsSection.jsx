import projectImg from '../assets/project.png';
import { FaGlobe, FaCode, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Portfolio Website',
    image: projectImg,
    description: 'Personal portfolio website showcasing my projects, experience, and skills as a fullstack developer.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML', 'CSS'],
    actions: [
      { label: 'Website', icon: <FaGlobe />, url: '#' },
      { label: 'Source', icon: <FaCode />, url: 'https://github.com/JATnpc' },
    ],
  },
  {
    title: 'Coming Soon',
    image: projectImg,
    description: 'This project will be revealed soon. Stay tuned!',
    tech: [],
    actions: [],
  },
  {
    title: 'Coming Soon',
    image: projectImg,
    description: 'This project will be revealed soon. Stay tuned!',
    tech: [],
    actions: [],
  },
  {
    title: 'Coming Soon',
    image: projectImg,
    description: 'This project will be revealed soon. Stay tuned!',
    tech: [],
    actions: [],
  },
];

export default function ProjectsSection() {
  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-light text-neutral-300 tracking-widest text-left" style={{ fontFamily: 'InterVariable, sans-serif', color: '#D4D4D4' }}>Projects</h2>
        <Link
          to="/coming-soon"
          className="text-l font-light text-neutral-500 items-center transition-all duration-300 hover:text-white hover:scale-102"
          style={{ fontFamily: 'InterVariable, sans-serif' }}
        >
          View More
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black/80 border border-white/30 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:border-white/70"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-neutral-300 text-sm mb-3 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-white/10 text-white text-xs px-3 py-1 rounded">{tech}</span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {project.actions.map((action, i) => (
                  <a
                    key={i}
                    href={action.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/30 rounded px-3 py-1 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs font-medium hover:scale-110 hover:shadow-lg"
                  >
                    {action.icon} {action.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}