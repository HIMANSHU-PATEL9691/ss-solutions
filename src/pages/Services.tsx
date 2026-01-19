import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Globe, BarChart3, Database, Sparkles, Code, Smartphone, Shield, Headphones, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import websiteImg from "@/assets/website-service.jpg";
import crmImg from "@/assets/crm-service.jpg";
import erpImg from "@/assets/erp-service.jpg";
import animatedImg from "@/assets/animated-web.jpg";
import customImg from "@/assets/custom-software.jpg";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "software", name: "Software Solutions" },
    { id: "web", name: "Web Development" },
    { id: "enterprise", name: "Enterprise" },
  ];

  const mainServices = [
    {
      id: 1,
      category: "enterprise",
      title: "ERP Software Solutions",
      subtitle: "25+ ERP Products",
      description:
        "Comprehensive Enterprise Resource Planning solutions that streamline your business operations. Our ERP systems integrate all facets of your business including planning, purchasing, inventory, sales, marketing, finance, and human resources.",
      image: erpImg,
      features: [
        "Inventory Management",
        "Financial Accounting",
        "HR & Payroll",
        "Supply Chain Management",
        "Manufacturing Module",
        "Business Intelligence",
        "Multi-branch Support",
        "Real-time Reporting",
      ],
      icon: Database,
      products: ["Manufacturing ERP", "Retail ERP", "Healthcare ERP", "Education ERP", "Hospitality ERP"],
    },
    {
      id: 2,
      category: "software",
      title: "CRM Software Solutions",
      subtitle: "20+ CRM Products",
      description:
        "Powerful Customer Relationship Management systems designed to help you build lasting relationships with your customers. Track leads, manage sales pipelines, and deliver exceptional customer experiences.",
      image: crmImg,
      features: [
        "Lead Management",
        "Sales Pipeline",
        "Customer Analytics",
        "Email Integration",
        "Task Automation",
        "Mobile Access",
        "Custom Dashboards",
        "Team Collaboration",
      ],
      icon: BarChart3,
      products: ["Sales CRM", "Service CRM", "Marketing CRM", "Real Estate CRM", "Insurance CRM"],
    },
    {
      id: 3,
      category: "web",
      title: "Website Development",
      subtitle: "200+ Websites Delivered",
      description:
        "Professional, responsive, and SEO-optimized websites that establish your online presence. We create stunning websites that not only look beautiful but also convert visitors into customers.",
      image: websiteImg,
      features: [
        "Custom Design",
        "Mobile Responsive",
        "SEO Optimization",
        "Fast Loading",
        "CMS Integration",
        "E-commerce Ready",
        "Security Features",
        "Analytics Setup",
      ],
      icon: Globe,
      products: ["Corporate Websites", "E-commerce Sites", "Portfolio Sites", "Landing Pages", "Blog Platforms"],
    },
    {
      id: 4,
      category: "web",
      title: "Animated Websites",
      subtitle: "50+ Animated Projects",
      description:
        "Captivating websites with stunning animations, parallax effects, and interactive elements that engage visitors and create memorable experiences. We bring your brand to life with motion design.",
      image: animatedImg,
      features: [
        "Scroll Animations",
        "Parallax Effects",
        "Micro-interactions",
        "Video Backgrounds",
        "3D Elements",
        "Loading Animations",
        "Hover Effects",
        "Smooth Transitions",
      ],
      icon: Sparkles,
      products: ["Creative Agency Sites", "Product Showcases", "Interactive Portfolios", "Immersive Experiences", "Brand Stories"],
    },
    {
      id: 5,
      category: "software",
      title: "Custom Software Development",
      subtitle: "Tailored Solutions",
      description:
        "Bespoke software solutions designed specifically for your unique business needs. Our expert developers create scalable, secure, and efficient applications that solve your specific challenges.",
      image: customImg,
      features: [
        "Requirements Analysis",
        "Custom Architecture",
        "Agile Development",
        "Quality Assurance",
        "Deployment Support",
        "Maintenance Plans",
        "API Integration",
        "Cloud Solutions",
      ],
      icon: Code,
      products: ["Business Applications", "Workflow Automation", "Data Management", "Integration Solutions", "Legacy Modernization"],
    },
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      count: "15+",
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with enterprise-grade security",
      count: "10+",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient database design, optimization, and maintenance",
      count: "30+",
    },
    {
      icon: Headphones,
      title: "IT Support & Maintenance",
      description: "Round-the-clock technical support and system maintenance",
      count: "24/7",
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? mainServices 
    : mainServices.filter(s => s.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium mb-4 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              80+ Premium <span className="gold-gradient-text">Software Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              From enterprise ERP and CRM systems to stunning animated websites, 
              we deliver comprehensive digital solutions that transform businesses.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: "25+", label: "ERP Solutions" },
                { value: "20+", label: "CRM Products" },
                { value: "200+", label: "Websites Built" },
                { value: "50+", label: "Animated Sites" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-card p-4 rounded-xl gold-border"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold gold-gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "gold-gradient text-foreground"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding" ref={ref}>
        <div className="container-custom">
          <div className="space-y-24">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-2xl gold-border">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-4 py-2 rounded-full gold-gradient text-foreground font-semibold text-sm">
                      {service.subtitle}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 gold-gradient rounded-2xl -z-10 opacity-50" />
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gold-gradient mb-6">
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-foreground/80"
                      >
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Products */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Available Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.products.map((product) => (
                        <span
                          key={product}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="gold" size="lg" className="group">
                      Get Quote
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Additional <span className="gold-gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Beyond our core services, we offer specialized solutions to meet 
              all your digital transformation needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card p-6 rounded-xl gold-border hover-lift text-center"
              >
                <div className="text-2xl font-display font-bold gold-gradient-text mb-2">
                  {service.count}
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl gold-gradient p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Can't find what you're looking for? Our team can build custom software 
              tailored to your specific business requirements.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl" className="bg-foreground text-background hover:bg-foreground/90">
                Request Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
