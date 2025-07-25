import { useState, useRef, useEffect } from "react";
import multisysLogo from "../assets/multisys.jpg";
import olpccLogo from "../assets/olpcc.png";
import isuLogo from "../assets/isu.png";
import stiLogo from "../assets/sti.png";
import cabatuanLogo from "../assets/cabatuan.jpg";
import haranaLogo from "../assets/harana.jpg";

const workExperience = [
  {
    date: "June 2025 – July 2025",
    company: "Multisys Technologies",
    role: "Back End Software Engineer Intern",
    description:
      "Worked on API development, database integration, and backend features using Laravel.",
    logo: multisysLogo,
  },
];

const studies = [
  {
    date: "Expected Graduation: 2026",
    school: "Our Lady of the Pillar College – Cauayan",
    degree: "B.Sc. in Computer Engineering (Transferee)",
    logo: olpccLogo,
  },
  {
    date: "2021 – 2022",
    school: "Isabela State University – Cabagan Campus",
    degree: "B.Sc. in Computer Engineering (1st Year)",
    logo: isuLogo,
  },
  {
    date: "2020 – 2021",
    school: "STI College – Cauayan",
    degree: "Mobile App and Web Development",
    logo: stiLogo,
  },
  {
    date: "2015 – 2020",
    school: "Cabatuan National High School",
    degree: "High School Diploma",
    logo: cabatuanLogo,
  },
  {
    date: "2009 – 2015",
    school: "Harana Elementary School",
    degree: "Elementary Diploma",
    logo: haranaLogo,
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work");
  const [lineHeight, setLineHeight] = useState(0);
  const [lineTop, setLineTop] = useState(0);
  const [lineLeft, setLineLeft] = useState(0);
  const timelineContainerRef = useRef(null);
  const firstCircleRef = useRef(null);
  const lastCircleRef = useRef(null);

  useEffect(() => {
    const updateLineDimensions = () => {
      if (firstCircleRef.current && lastCircleRef.current) {
        const firstCircle = firstCircleRef.current;
        const lastCircle = lastCircleRef.current;
        const containerRect = timelineContainerRef.current.getBoundingClientRect();
        const scrollTop = timelineContainerRef.current.scrollTop;
        const firstRect = firstCircle.getBoundingClientRect();
        const lastRect = lastCircle.getBoundingClientRect();
        const firstCenterY = firstRect.top + firstRect.height / 2 - containerRect.top + scrollTop;
        const lastCenterY = lastRect.top + lastRect.height / 2 - containerRect.top + scrollTop;
        const circleCenterX = firstRect.left + firstRect.width / 2 - containerRect.left;
        // Always reset line height and position if only one item
        if (firstCircle === lastCircle) {
          setLineTop(firstCenterY);
          setLineHeight(0);
          setLineLeft(circleCenterX - 1);
        } else {
          const totalHeight = lastCenterY - firstCenterY;
          setLineTop(firstCenterY);
          setLineHeight(totalHeight);
          setLineLeft(circleCenterX - 1);
        }
      } else {
        // If no circles, reset line
        setLineTop(0);
        setLineHeight(0);
        setLineLeft(0);
      }
    };

    if (timelineContainerRef.current) {
      timelineContainerRef.current.scrollTop = 0;
    }

    // Calculate immediately
    updateLineDimensions();

    // Update on window resize
    window.addEventListener("resize", updateLineDimensions);
    // Update on scroll
    const scrollHandler = () => requestAnimationFrame(updateLineDimensions);
    if (timelineContainerRef.current) {
      timelineContainerRef.current.addEventListener("scroll", scrollHandler);
    }

    return () => {
      window.removeEventListener("resize", updateLineDimensions);
      if (timelineContainerRef.current) {
        timelineContainerRef.current.removeEventListener(
          "scroll",
          scrollHandler,
        );
      }
    };
  }, [activeTab]);

  const renderItems = (data, type) =>
    data.map((item, idx) => (
      <li
        key={idx}
        className={`relative flex items-start${idx !== data.length - 1 ? " mb-12" : ""}`}
      >
        {/* Timeline Circle with Logo - 48x48 pixels */}
        <span
          className="relative self-start flex-shrink-0 -left-4 w-12 h-12 bg-gray-700 rounded-full shadow-lg flex items-center justify-center z-20 timeline-circle transition-all duration-300 hover:scale-110 hover:shadow-xl"
          ref={
            idx === 0
              ? firstCircleRef
              : idx === data.length - 1
                ? lastCircleRef
                : null
          }
        >
          <img
            src={
              item.logo ||
              "https://placehold.co/48x48?text=" +
                (type === "work"
                  ? item.company?.charAt(0)
                  : item.school?.charAt(0))
            }
            alt="logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
        </span>
        {/* Content */}
        <div className="ml-0 pr-8 -mt-1">
          <time className="text-xs text-gray-400 mb-1">{item.date}</time>
          <h2 className="font-semibold leading-none text-white text-base mb-1">
            {type === "work" ? item.company : item.school}
          </h2>
          <div className="text-gray-400 text-sm mb-2">
            {type === "work" ? item.role : item.degree}
          </div>
          {item.description && (
            <div className="text-white text-sm font-normal leading-relaxed">
              {item.description}
            </div>
          )}
        </div>
      </li>
    ));

  return (
    <section className="container max-w-3xl mx-auto px-2 sm:px-4 pt-8">
      <p
        className="text-xl font-light text-neutral-300 mb-6 tracking-widest text-left"
        style={{ fontFamily: "InterVariable, sans-serif" }}
        tabIndex={0}
        aria-label="Experience section"
      >
        Experience
      </p>

      {/* Tabs - Outside the box */}
      <div className="flex w-full mb-6 gap-0">
        <button
          className={`flex-1 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm ${
            activeTab === "work"
              ? "bg-white text-black shadow-md"
              : "text-white bg-white/10 hover:bg-white/20"
          }`}
          onClick={() => setActiveTab("work")}
          aria-label="Show work experience"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setActiveTab('work'); } }}
        >
          Work
        </button>
        <button
          className={`flex-1 py-2 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm ${
            activeTab === "studies"
              ? "bg-white text-black shadow-md"
              : "text-white bg-white/10 hover:bg-white/20"
          }`}
          onClick={() => setActiveTab("studies")}
          aria-label="Show education experience"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setActiveTab('studies'); } }}
        >
          Education
        </button>
      </div>

      {/* Single Container Box */}
      <div className="bg-transparent border border-white rounded-lg overflow-hidden shadow-sm">
        {/* Timeline Container - Fixed Height */}
        <div
          className="h-[420px] sm:h-[520px] overflow-y-auto custom-scrollbar pl-8 sm:pl-12 pt-6 rounded-lg timeline-container"
          style={{
            position: "relative",
            background: "transparent",
            marginRight: "0",
          }}
          ref={timelineContainerRef}
        >
          {/* Timeline vertical line - behind the circles */}
          <div
            className={`timeline-vertical-line`}
            style={{
              top: `${lineTop}px`,
              height: `${lineHeight}px`,
              left: `${lineLeft}px`,
            }}
          />
          <ol className="relative ml-0 pt-6 pb-6">
            {activeTab === "work"
              ? renderItems(workExperience, "work")
              : renderItems(studies, "study")}
          </ol>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.7);
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .timeline-container {
          overflow: overlay;
        }
        .timeline-vertical-line {
          position: absolute;
          /* left is now set dynamically */
          width: 2px;
          background: rgba(255, 255, 255, 0.8);
          z-index: 5;
          height: 100%;
        }
      `}</style>
    </section>
  );
}
