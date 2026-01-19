import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Heart, CheckCircle, ArrowRight, Calendar, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import teamImg from "@/assets/team.jpg";
import customImg from "@/assets/custom-software.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations and set industry standards.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand their vision and transform it into powerful digital solutions.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative approaches to solve complex business challenges.",
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Committed to long-term partnerships, providing ongoing support and continuous improvement.",
    },
  ];

  const milestones = [
    { year: "2014", title: "Company Founded", description: "Started with a vision to transform businesses through technology" },
    { year: "2016", title: "First ERP Launch", description: "Released our flagship Manufacturing ERP solution" },
    { year: "2018", title: "CRM Suite Released", description: "Expanded offerings with comprehensive CRM solutions" },
    { year: "2020", title: "100+ Clients", description: "Reached milestone of serving 100+ satisfied clients" },
    { year: "2022", title: "Global Expansion", description: "Extended services to international markets" },
    { year: "2024", title: "80+ Products", description: "Portfolio grew to over 80 software products" },
  ];

  const expertise = [
    "Enterprise Resource Planning (ERP)",
    "Customer Relationship Management (CRM)",
    "Website Development & Design",
    "Animated & Interactive Websites",
    "Mobile Application Development",
    "Custom Software Solutions",
    "Cloud Computing Services",
    "Business Intelligence & Analytics",
    "E-commerce Solutions",
    "Database Management Systems",
    "API Development & Integration",
    "IT Consulting Services",
  ];

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
            <span className="text-primary font-medium mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Crafting Digital <span className="gold-gradient-text">Excellence</span> Since 2014
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              For over a decade, SS Solutions has been at the forefront of digital 
              transformation, helping businesses thrive with innovative software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding" ref={ref}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl gold-border">
                <img
                  src={teamImg}
                  alt="SS Solutions Team"
                  className="w-full h-80 lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gold-gradient rounded-2xl -z-10 opacity-50" />
              
              {/* Stats Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md rounded-xl p-4 gold-border"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-display font-bold gold-gradient-text">10+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold gold-gradient-text">80+</div>
                    <div className="text-xs text-muted-foreground">Products</div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold gold-gradient-text">700+</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                SS Solutions was founded in 2014 with a simple yet powerful mission: 
                to empower businesses with technology that makes a difference. What 
                started as a small team of passionate developers has grown into a 
                comprehensive software solutions provider with 80+ products.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Today, we serve over 500 clients across multiple industries, delivering 
                everything from enterprise ERP systems to stunning animated websites. 
                Our commitment to quality, innovation, and client satisfaction has made 
                us a trusted partner for businesses looking to transform their operations.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We believe that exceptional software is the cornerstone of business 
                success, and we work tirelessly to create solutions that not only meet 
                your needs but exceed your expectations.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Est. 2014</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Global Clients</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What Drives <span className="gold-gradient-text">Us Forward</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values guide everything we do, from how we build software 
              to how we serve our clients.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card p-8 rounded-xl gold-border hover-lift text-center"
              >
                <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-foreground" />
                </div>
                <h4 className="font-display font-semibold text-xl mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium mb-4 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Milestones That <span className="gold-gradient-text">Define Us</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card p-6 rounded-xl gold-border inline-block">
                      <div className="text-2xl font-display font-bold gold-gradient-text mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full gold-gradient shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium mb-4 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Technologies & <span className="gold-gradient-text">Capabilities</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With expertise spanning multiple domains, we deliver comprehensive 
                solutions that address all your business needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl gold-border">
                <img
                  src={customImg}
                  alt="Our Expertise"
                  className="w-full h-80 lg:h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 gold-gradient rounded-2xl -z-10 opacity-50" />
            </motion.div>
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
              Ready to Work Together?
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how our expertise and 80+ software solutions can 
              help transform your business.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl" className="bg-foreground text-background hover:bg-foreground/90">
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
