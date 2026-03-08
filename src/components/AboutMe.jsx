import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const experienceItems = [
  {
    role: "Cybersecurity / DFIR Intern",
    company: "Realistic Security",
    period: "Nov 2025 - Feb 2026",
  },
  {
    role: "Penetration Testing Intern",
    company: "KEYSTONE Group Algeria",
    period: "Sep 2025",
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance & Project-Based Work",
    period: "2023 - Present",
  },
];

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div data-aos="fade-up" className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Who I am?</h3>

            <p className="text-muted-foreground md:text-left">
              I&apos;m a cybersecurity engineering student at the Higher School of Computer Science and a Full-Stack Web
              Developer passionate about building secure, responsive web applications. I have hands-on experience in
              digital forensics, penetration testing, and secure backend development, with strong interest in networks,
              AI, and UI/UX design.
            </p>

            <p className="text-muted-foreground md:text-left">
              I&apos;ve completed multiple academic full-stack projects and internships. This blend of software engineering
              and cybersecurity helps me deliver practical, reliable solutions for real-world products.
            </p>

            <div className="pt-2">
              <h4 className="text-2xl font-semibold text-primary mb-4">My Experience</h4>
              <div className="space-y-4">
                {experienceItems.map((item) => (
                  <div key={`${item.role}-${item.company}`} className="border-l-2 border-primary pl-4 text-left">
                    <p className="text-base leading-7">
                      <span className="font-semibold text-primary">{item.role}</span>
                      <span className="text-muted-foreground"> at {item.company}</span>
                    </p>
                    <p className="text-muted-foreground">({item.period})</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Resume/Mohamed Seddik Ben Bait - Full-Stack Web Developer Resume.pdf"
                download
                className="px-6 py-2 rounded-full  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover aspect-square">
            <img className="w-full h-full object-cover object-center scale-105" src="/Images/blackhat.png" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};
