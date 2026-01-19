import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      subValue: "+91 98765 43211",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@sssolutions.com",
      subValue: "support@sssolutions.com",
      href: "mailto:contact@sssolutions.com",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Mumbai, Maharashtra",
      subValue: "India - 400001",
      href: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon - Fri: 9AM - 6PM",
      subValue: "Sat: 10AM - 4PM",
      href: "#",
    },
  ];

  const services = [
    "ERP Software",
    "CRM Solutions",
    "Website Development",
    "Animated Website",
    "Mobile App Development",
    "Custom Software",
    "Other",
  ];

  const budgets = [
    "Under ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "Above ₹10,00,000",
  ];

  const faqs = [
    {
      question: "How long does it take to develop a website?",
      answer: "Typically 2-6 weeks depending on complexity. Simple websites take 2-3 weeks, while complex animated sites may take 4-6 weeks.",
    },
    {
      question: "Do you provide support after delivery?",
      answer: "Yes! We offer 24/7 support and maintenance packages for all our software products with various support tiers.",
    },
    {
      question: "Can you customize existing software?",
      answer: "Absolutely. We specialize in customizing our 80+ software products to match your specific business requirements.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve various industries including manufacturing, retail, healthcare, education, hospitality, real estate, and more.",
    },
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
            <span className="text-primary font-medium mb-4 block">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Let's Build Something <span className="gold-gradient-text">Amazing Together</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Have a project in mind? Get in touch with our team to discuss how 
              we can help transform your business with our 80+ software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-xl gold-border hover-lift text-center block"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-foreground text-sm">{item.value}</p>
                <p className="text-muted-foreground text-sm">{item.subValue}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding" ref={ref}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 bg-card p-8 md:p-10 rounded-2xl gold-border"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Name</label>
                    <Input
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Interested In *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full h-10 px-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="">Select budget</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Project Details *</label>
                  <Textarea
                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full group">
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-display font-bold">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-card p-5 rounded-xl gold-border"
                  >
                    <h4 className="font-semibold mb-2 text-sm">{faq.question}</h4>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-card p-6 rounded-xl gold-border mt-8">
                <h4 className="font-display font-semibold mb-4">Why Choose SS Solutions?</h4>
                <div className="space-y-3">
                  {[
                    "80+ Ready-to-deploy software products",
                    "10+ years of industry experience",
                    "500+ satisfied clients worldwide",
                    "24/7 technical support",
                    "Competitive pricing",
                    "Customizable solutions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Visit Our <span className="gold-gradient-text">Office</span>
            </h2>
            <p className="text-muted-foreground">
              We'd love to meet you in person. Visit our office in Mumbai to discuss 
              your project requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden gold-border h-80 md:h-96 bg-card flex items-center justify-center"
          >
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">SS Solutions</h3>
              <p className="text-muted-foreground">
                Business Center, Lower Parel<br />
                Mumbai, Maharashtra 400013<br />
                India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="goldOutline" size="lg">
                  Get Directions
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
