import { motion } from "framer-motion";
import {
  ArrowUp,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "ERP Software",
    "CRM Solutions",
    "Website Development",
    "Custom Software",
    "Mobile Applications",
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/yourpage",
      label: "Facebook",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/sssolution__indore",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/yourcompany",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@yourchannel",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#0b0f19] text-gray-300 pt-20">
      <div className="container-custom">

        {/* ================= TOP GRID ================= */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-display font-bold gold-gradient-text mb-4">
              SS Solutions
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              We design and develop modern ERP, CRM, and digital solutions that
              help businesses grow faster and smarter.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="tel:+917000668684"
                className="flex items-center gap-3 hover:text-gold transition"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 70006 68684
              </a>

              <a
                href="mailto:sssolutionindore@gmail.com"
                className="flex items-center gap-3 hover:text-gold transition"
              >
                <Mail className="w-4 h-4 text-primary" />
                sssolutionindore@gmail.com
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-primary" />
                Indore, India
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-gold transition">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-gold transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL + CTA */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Connect With Us
            </h4>

            <p className="text-sm text-gray-400 mb-6">
              Follow us for product updates, launches, and tech insights.
            </p>

            <div className="flex gap-4 mb-6">
              {socialLinks.map(({ icon: Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10
                             flex items-center justify-center
                             hover:border-gold hover:text-gold transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-lg gold-gradient
                         text-foreground font-semibold hover:opacity-90 transition"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          className="mt-16 py-6 border-t border-white/10
                     flex flex-col md:flex-row items-center
                     justify-between gap-4 text-sm"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} SS Solutions. All rights reserved.
            <span className="mx-2">|</span>
            Collaborated with{" "}
            <a
              href="https://digitalflyhigh.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              DFHS
            </a>
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-white/5 hover:bg-white/10 transition"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
