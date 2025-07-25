import {
  SiJavascript,
  SiInsomnia,
  SiDocker,
  SiTypescript,
  SiPhp,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiIonic,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiClerk,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiWordpress,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiPostman,
} from "react-icons/si";
import postgresqlLogo from "../assets/postgresql.png";
import { FaElementor } from "react-icons/fa";

// Custom SVG icon for Arduino
const ArduinoIcon = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="16"
      cy="16"
      rx="15"
      ry="15"
      stroke="#00979D"
      strokeWidth="2"
      fill="white"
    />
    <ellipse
      cx="48"
      cy="16"
      rx="15"
      ry="15"
      stroke="#00979D"
      strokeWidth="2"
      fill="white"
    />
    <path d="M8 16h16" stroke="#00979D" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M40 16h16"
      stroke="#00979D"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <ellipse cx="16" cy="16" rx="5" ry="5" fill="#00979D" />
    <ellipse cx="48" cy="16" rx="5" ry="5" fill="#00979D" />
  </svg>
);


const techStack = [
  { icon: <SiJavascript />, name: "Javascript" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiPython />, name: "Python" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.JS" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPhp />, name: "PHP" },
  { icon: <SiTypescript />, name: "Typescript" },
  { icon: <SiC />, name: "C" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <SiNextdotjs />, name: "Next.JS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiDocker />, name: "Docker" },
  {
    icon: <img src={postgresqlLogo} alt="pgAdmin 4" style={{ width: "1em", height: "1em", objectFit: "contain", borderRadius: "4px" }} />,
    name: "pgAdmin 4"
  },
  { icon: <ArduinoIcon />, name: "Arduino" },
  { icon: <SiInsomnia />, name: "Insomnia" },
  { icon: <SiPostman />, name: "Postman" },
];

export default function TechStackSection() {
  return (
    <section className="container max-w-3xl mx-auto px-2 sm:px-4 pt-8">
      <p
        className="text-lg sm:text-xl font-light text-neutral-300 mb-6 tracking-widest text-left"
        style={{ fontFamily: "InterVariable, sans-serif" }}
        tabIndex={0}
        aria-label="Tech Stack section"
      >
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 bg-[#0f172a] text-white px-3 py-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium border border-gray-700 shadow-sm md:backdrop-blur-sm md:transition-all md:duration-300 md:hover:scale-110 md:hover:shadow-lg md:hover:bg-[#1e293b] md:hover:-translate-y-1 md:transform md:transition-transform"
          >
            <span className="text-base sm:text-lg">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
