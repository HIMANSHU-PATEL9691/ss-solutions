import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Globe,
  BarChart3,
  Database,
  Sparkles,
  Code,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

import websiteImg from "@/assets/website-service.jpg";
import crmImg from "@/assets/crm-service.jpg";
import erpImg from "@/assets/erp-service.jpg";
import animatedImg from "@/assets/animated-web.jpg";
import customImg from "@/assets/custom-software.jpg";

const Services = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  /* ================= CATEGORIES ================= */
  const categories = [
    { id: "all", name: "All Services" },
    { id: "software", name: "Software Solutions" },
    { id: "web", name: "Web Development" },
    { id: "enterprise", name: "Enterprise" },
  ];

  /* ================= SERVICES ================= */
  const mainServices = [
    {
      id: 1,
      category: "enterprise",
      title: "ERP Software Solutions",
      subtitle: "25+ ERP Products",
      description:
        "Enterprise-grade ERP systems that centralize operations, improve visibility, and scale with your business.",
      image: erpImg,
      icon: Database,
      features: [
        "Inventory & Stock Control",
        "Financial Accounting",
        "HR & Payroll",
        "Supply Chain Management",
        "Manufacturing Module",
        "Business Intelligence",
        "Multi-branch Support",
        "Real-time Reporting",
      ],
      products: [
        "Manufacturing ERP",
        "Retail ERP",
        "Healthcare ERP",
        "Education ERP",
        "Hospitality ERP",
      ],
    },
    {
      id: 2,
      category: "software",
      title: "CRM Software Solutions",
      subtitle: "20+ CRM Products",
      description:
        "CRM platforms designed to boost sales productivity, customer retention, and pipeline visibility.",
      image: crmImg,
      icon: BarChart3,
      features: [
        "Lead & Opportunity Tracking",
        "Sales Pipeline Automation",
        "Customer Analytics",
        "Email & WhatsApp Integration",
        "Task Automation",
        "Mobile CRM",
        "Custom Dashboards",
        "Team Collaboration",
      ],
      products: [
        "Sales CRM",
        "Service CRM",
        "Marketing CRM",
        "Real Estate CRM",
        "Insurance CRM",
      ],
    },
    {
      id: 3,
      category: "web",
      title: "Website Development",
      subtitle: "200+ Websites Delivered",
      description:
        "High-performance websites built for speed, SEO, and conversion across all devices.",
      image: websiteImg,
      icon: Globe,
      features: [
        "Custom UI/UX Design",
        "Mobile Responsive",
        "SEO Optimization",
        "Fast Loading Pages",
        "CMS Integration",
        "E-commerce Ready",
        "Security Hardening",
        "Analytics & Tracking",
      ],
      products: [
        "Corporate Websites",
        "E-commerce Sites",
        "Portfolio Sites",
        "Landing Pages",
        "Blogs",
      ],
    },
    {
      id: 4,
      category: "web",
      title: "Animated Websites",
      subtitle: "50+ Animated Projects",
      description:
        "Immersive animated websites using modern motion design to elevate brand storytelling.",
      image: animatedImg,
      icon: Sparkles,
      features: [
        "Scroll-based Animations",
        "Parallax Effects",
        "Micro-interactions",
        "Video Backgrounds",
        "3D Visual Elements",
        "Hover Animations",
        "Smooth Page Transitions",
      ],
      products: [
        "Creative Agency Sites",
        "Product Showcases",
        "Interactive Portfolios",
        "Brand Story Pages",
      ],
    },
    {
      id: 5,
      category: "software",
      title: "Custom Software Development",
      subtitle: "Tailored Solutions",
      description:
        "Custom-built software engineered to solve complex business problems securely and efficiently.",
      image: customImg,
      icon: Code,
      features: [
        "Business Requirement Analysis",
        "Custom Architecture Design",
        "Agile Development Process",
        "Quality Assurance",
        "Cloud Deployment",
        "Maintenance & Support",
        "API Integrations",
        "Scalable Infrastructure",
      ],
      products: [
        "Business Applications",
        "Workflow Automation",
        "Integration Solutions",
        "Legacy Modernization",
      ],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? mainServices
      : mainServices.filter((s) => s.category === activeCategory);

  return (
    <Layout>
      {/* ================= HERO ================= */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <span className="text-primary font-medium mb-4 block">Our Services</span>
         
          <p className="text-muted-foreground text-lg">
            Scalable software, powerful automation, and visually stunning digital experiences.
          </p>
        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-6">
        <div className="container-custom flex justify-center gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                servicesRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? "gold-gradient text-foreground"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        ref={servicesRef}
        className="section-padding scroll-mt-[140px]"
      >
        <div className="container-custom space-y-28">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl gold-border shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 lg:h-[460px] object-cover transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-4 py-2 rounded-full gold-gradient text-sm font-semibold">
                  {service.subtitle}
                </span>
              </motion.div>

              {/* Content */}
              <div>
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  {service.title}
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((f) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">{f}</span>
                    </motion.div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button variant="gold" size="lg" className="group">
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
