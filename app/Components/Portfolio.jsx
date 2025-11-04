"use client";
import { useState } from "react";
import project from "../../public/Rectangle 21.png";
import Image from "next/image";

const filters = [
  "All",
  "Website Design",
  "App Mobile Design",
  "App Desktop",
  "Branding",
];

const projects = [
  { id: 1, title: "Name Project", category: "Website Design", image: project },
  {
    id: 2,
    title: "Name Project",
    category: "App Mobile Design",
    image: project,
  },
  { id: 3, title: "Name Project", category: "Website Design", image: project },
  { id: 4, title: "Name Project", category: "Branding", image: project },
  { id: 5, title: "Name Project", category: "App Desktop", image: project },
  { id: 6, title: "Name Project", category: "Website Design", image: project },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-text font-lato font-bold text-center mb-8">
            Portfolio
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((item, key) => (
              <button
                key={key}
                onClick={() => setActive(item)}
                className={`px-5 py-2 rounded-lg border transition ${
                  active === item
                    ? "bg-theme text-white"
                    : "bg-black-bg text-text border-theme"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* -----------Projects------ */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-gray-700 rounded-xl overflow-hidden group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom */}
                <div className="bg-white text-black px-3 py-3 flex justify-between items-center">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
