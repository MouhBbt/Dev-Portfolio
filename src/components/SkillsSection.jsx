import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

const technologies = [
  { name: "Next.js", logo: "/Images/icons8-next.js.svg" },
  { name: "React.js", logo: "/Images/react.svg" },
  { name: "TypeScript", logo: "/Images/typescript_5968381.png" },
  { name: "JavaScript", logo: "/Images/js_5968292.png" },
  { name: "React Query", logo: "/Images/react.svg" },
  { name: "Node.js", logo: "/Images/programing_15484303.png" },
  { name: "Express.js", logo: "/Images/icons8-express-js (1).svg" },
  { name: "Python", logo: "/Images/python.svg" },
  { name: "Java", logo: "/Images/Java.png" },
  { name: "PostgreSQL", logo: "/Images/postgresql.svg" },
  { name: "MongoDB", logo: "/Images/MongoDB.png" },
  { name: "Firebase", logo: "/Images/firebase.svg" },
  { name: "Prisma ORM", logo: "/Images/prismaorm.svg" },
  { name: "Redis", logo: "/Images/redis.svg" },
  { name: "WebSockets", logo: "/Images/websockets.svg" },
  { name: "JWT", logo: "/Images/jwt.svg" },
  { name: "Swagger", logo: "/Images/swagger.svg" },
  { name: "OpenAPI", logo: "/Images/openapi.svg" },
  { name: "Tailwind CSS", logo: "/Images/Tailwind CSS.png" },
  { name: "HTML5", logo: "/Images/html-5_5968267.png" },
  { name: "CSS3", logo: "/Images/css-3_5968242.png" },
  { name: "Docker", logo: "/Images/docker.svg" },
  { name: "Linux", logo: "/Images/linux.svg" },
  { name: "Nginx", logo: "/Images/nginx.svg" },
  { name: "Burp Suite", logo: "/Images/burp-suite.png" },
  { name: "Wireshark", logo: "/Images/Wireshark.png" },
  { name: "Figma", logo: "/Images/Figma.png" },
  { name: "Git", logo: "/Images/Git.png" },
  { name: "GitHub", logo: "/Images/github.svg" },
  { name: "Postman", logo: "/Images/Postman.png" },
];

export const SkillsSection = () => {
  const scrollerRef = useRef(null);
  const pauseRef = useRef(false);
  const positionRef = useRef(0);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let frameId;
    const speed = 0.6;

    const animate = () => {
      const halfWidth = el.scrollWidth / 2;
      if (!pauseRef.current) {
        positionRef.current += speed;
        if (positionRef.current >= halfWidth) {
          positionRef.current -= halfWidth;
        }
        el.scrollLeft = positionRef.current;
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleMouseDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = {
      isDown: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
    };
    positionRef.current = el.scrollLeft;
    pauseRef.current = true;
  };

  const handleMouseMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !dragRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.2;
    positionRef.current = dragRef.current.scrollLeft - walk;
    el.scrollLeft = positionRef.current;
  };

  const handleMouseUp = () => {
    dragRef.current.isDown = false;
    pauseRef.current = false;
  };

  const handleWheel = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    e.preventDefault();
    positionRef.current += e.deltaY * 0.9;
    el.scrollLeft = positionRef.current;
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div data-aos="fade-up" className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Tech Stack</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">Technologies I work with</p>

        <div
          ref={scrollerRef}
          className="overflow-x-auto pb-3 cursor-grab active:cursor-grabbing select-none"
          onMouseLeave={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex w-max items-start gap-6 px-1">
            {[...technologies, ...technologies].map((tech, idx) => (
              <div key={`${tech.name}-${idx}`} className="flex min-w-[112px] flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card border border-border">
                  <img className="h-7 w-7 object-contain" src={tech.logo} alt={tech.name} />
                </div>
                <h3 className="text-sm font-semibold text-foreground/90">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
