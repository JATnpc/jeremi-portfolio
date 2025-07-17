import {
    SiJavascript, SiTypescript, SiPhp, SiPython, SiC, SiCplusplus, SiReact,
    SiVuedotjs, SiNextdotjs, SiIonic, SiNodedotjs, SiTailwindcss, SiMysql,
    SiMongodb, SiSupabase, SiClerk, SiGit, SiGithub, SiBitbucket, SiWordpress,
    SiAdobephotoshop, SiAdobeillustrator, SiLaravel, SiHtml5, SiCss3, SiPostman
  } from 'react-icons/si';
  import { FaElementor } from 'react-icons/fa';
  
  // Add Arduino SVG icon
  const ArduinoIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="16" cy="16" rx="15" ry="15" stroke="#00979D" strokeWidth="2" fill="white" />
      <ellipse cx="48" cy="16" rx="15" ry="15" stroke="#00979D" strokeWidth="2" fill="white" />
      <path d="M8 16h16" stroke="#00979D" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 16h16" stroke="#00979D" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="16" cy="16" rx="5" ry="5" fill="#00979D" />
      <ellipse cx="48" cy="16" rx="5" ry="5" fill="#00979D" />
    </svg>
  );
  
  const techStack = [
    { icon: <SiJavascript />, name: 'Javascript' },
    { icon: <SiHtml5 />, name: 'HTML' },
    { icon: <SiCss3 />, name: 'CSS' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiReact />, name: 'React' },
    { icon: <SiNodedotjs />, name: 'Node.JS' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiGithub />, name: 'GitHub' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiPhp />, name: 'PHP' },
    { icon: <SiTypescript />, name: 'Typescript' },
    { icon: <SiC />, name: 'C' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiLaravel />, name: 'Laravel' },
    { icon: <SiNextdotjs />, name: 'Next.JS' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiAdobephotoshop />, name: 'Photoshop' },
    { icon: <SiAdobeillustrator />, name: 'Illustrator' },
    { icon: <ArduinoIcon />, name: 'Arduino' },
    { icon: <SiPostman />, name: 'Postman' },
  ];
  
  export default function TechStackSection() {
    return (
      <section className="container max-w-3xl mx-auto px-4 md:px-0 pt-10">
        <p className="text-xl font-light text-neutral-300 mb-6 tracking-widest text-left" style={{ fontFamily: 'InterVariable, sans-serif', color: '#D4D4D4' }}>
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white/5 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white/10"
            >
              <span className="text-lg">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }