"use client";
import { FaFigma, FaAdobe, FaRegCircle } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobepremierepro,
} from "react-icons/si";

const skills = [
  { icon: <FaFigma size={38} />, name: "Figma", percent: 100 },
  { icon: <SiAdobexd size={38} />, name: "Adobe XD", percent: 100 },
  {
    icon: <SiAdobephotoshop size={38} />,
    name: "Adobe Photoshop",
    percent: 85,
  },
  {
    icon: <SiAdobeillustrator size={38} />,
    name: "Adobe Illustrator",
    percent: 60,
  },
  {
    icon: <SiAdobepremierepro size={38} />,
    name: "Adobe Premiere",
    percent: 70,
  },
];

const circumference = 2 * Math.PI * 40;

const CommonProgress = () => {
  return (
    <>
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Skills & Tools</h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 justify-items-center">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                {/* Circle Progress */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full rotate-[-90deg]">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#333"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#FF7A00"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={
                        circumference - (circumference * skill.percent) / 100
                      }
                      className="transition-all duration-1000"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute flex flex-col items-center justify-center">
                    {skill.icon}
                  </div>
                </div>

                <p className="text-orange-500 font-bold text-lg">
                  {skill.percent}%
                </p>
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonProgress;
