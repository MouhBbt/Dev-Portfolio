import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Project Ease",
    description:
      "A project management platform built with Next.js to simplify planning, team coordination, and project tracking.",
    image: "/Projects/deliverease.png",
    tags: ["Next.js", "REST API", "Frontend Integration"],
    url: "https://project-ease-iota.vercel.app/login",
    git: "https://github.com/bilalmn22/project-ease.git",
  },
  {
    id: 2,
    title: "RoadPal (Car Pooling Mobile App)",
    description:
      "Built backend REST APIs, designed PostgreSQL schema with Prisma ORM, and implemented authentication with secure data handling for the mobile app backend.",
    image: "/Projects/roadpal.png",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Authentication"],
    git: "https://github.com/MouhBbt/RoadPal-Backend",
  },
  {
    id: 3,
    title: "Alphabit Club Website",
    description:
      "Designed and implemented frontend pages using React/Next.js and optimized responsive design with accessibility improvements across devices.",
    image: "/Projects/alphabit.png",
    tags: ["React.js", "Next.js", "Responsive Design", "Accessibility"],
    url: "https://alphabit.club",
    git: "https://github.com/AlphaBitClub/AlphabitNextJs",
  },
  {
    id: 4,
    title: "Co-Scape Hackathon Web App",
    description:
      "Developed the frontend interface, reviewed participant submissions, suggested code improvements, and supported technical evaluation/judging.",
    image: "/Projects/coscape.png",
    tags: ["Frontend", "Code Review", "Technical Evaluation"],
    url: "https://co-scape.alphabit.club/login",
    git: "https://github.com/AlphaBitClub/hackathon",
  },
  {
    id: 5,
    title: "IBPower",
    description:
      "A logistics platform designed to solve operational bottlenecks by improving flow tracking, coordination, and delivery process visibility.",
    image: "/Projects/tatweer.png",
    tags: ["Logistics Platform", "Workflow Optimization", "Operations"],
    git: "https://github.com/Waelalg/DBL7_Front",
  },
  {
    id: 6,
    title: "Alphabit CTF - Challenge Author",
    description:
      "Contributed as a challenge author in a CTF organized by Alphabit Club, designing cybersecurity challenges and supporting the event's technical quality.",
    image: "/Projects/minictf.png",
    tags: ["CTF", "Challenge Authoring", "Cybersecurity"],
    url: "https://github.com/F0DH1L/Alphabit_minictf_2k24",
  },
];

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="txet-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my approach to building secure, maintainable full-stack applications and delivering
          practical user-focused solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover trasnition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-${tag}`} className="px-2 py-1 border text-xs rounded-full bg-secondary text-secondary-foreground ">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl text-left font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-left text-xs mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <a
                    href={project.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button text-xs text-muted-foreground font-semibold flex gap-1"
                  >
                    Live Link <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.git || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/MouhBbt"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
