import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import emailjs from "emailjs-com";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Email service is not configured yet.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong"));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div data-aos="fade-up" className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to full-stack development opportunities and security-focused software projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">Email :</h4>
                  <a
                    href="mailto:ms.benbait@esi-sba.dz"
                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                  >
                    ms.benbait@esi-sba.dz
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">LinkedIn :</h4>
                  <a
                    href="https://www.linkedin.com/in/mouh-bbt"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                  >
                    linkedin.com/in/mouh-bbt
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">Location :</h4>
                  <a className="text-muted-foreground text-left">Souk Ahras, Algeria</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium text-left">Phone / WhatsApp :</h4>
                  <a
                    href="https://wa.me/213668540627"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-left hover:text-primary transition-colors duration-300"
                  >
                    +213668540627
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a className="hover:text-primary" target="_blank" rel="noreferrer" href="https://github.com/MouhBbt">
                  <Github />
                </a>

                <a className="hover:text-primary" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mouh-bbt">
                  <Linkedin />
                </a>

                <a className="hover:text-primary" target="_blank" rel="noreferrer" href="https://wa.me/213668540627">
                  <MessageCircle />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-left" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-left" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-left" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello! I'd like to discuss an opportunity."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
                  "hover:underline hover:underline-offset-4"
                )}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
