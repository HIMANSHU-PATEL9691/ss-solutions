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
  MessageCircle,
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

  return (
    <footer className="bg-foreground text-background pt-16">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold gold-gradient-text mb-4">
              SS Solutions
            </h3>
            <p className="text-background/70 mb-6 leading-relaxed">
              We design and develop modern software solutions that help
              businesses grow digitally with confidence.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-background/70 hover:text-gold transition"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a
                href="mailto:contact@sssolutions.com"
                className="flex items-center gap-3 text-background/70 hover:text-gold transition"
              >
                <Mail className="w-4 h-4" />
                contact@sssolutions.com
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                Mumbai, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-background/70 hover:text-gold transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-gold transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">
              Connect With Us
            </h4>

            <p className="text-background/70 text-sm mb-5">
              Follow us on social media for updates, launches, and tech
              insights.
            </p>

            <div className="flex gap-4 mb-6">
              <a href="#" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={18} />
              </a>
              <a href="#" className="social-icon">
                <MessageCircle size={18} />
              </a>
            </div>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-lg gold-gradient text-foreground font-semibold hover:opacity-90 transition"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 py-6 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} SS Solutions. All rights reserved.{" "}
            <span className="mx-1">|</span>
            Collaborated with{" "}
            <a
              href="https://digitalflyhigh.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline transition"
            >
              DFHS
            </a>
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/10 hover:bg-background/20 transition text-sm"
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
