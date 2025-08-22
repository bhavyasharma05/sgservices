import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Award,
  Building,
  Globe,
  Lightbulb,
  Heart,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Expert Housekeeping",
      description: "Thorough cleaning for homes, offices, and commercial spaces."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Professional Floor Polishing",
      description: "Shine and restore all types of floors to perfection."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Trained & Trustworthy Team",
      description: "Skilled staff with verified backgrounds."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Modern Tools & Techniques",
      description: "We value your time and schedule."
    }
  ];

  const team = [
    {
      name: "Alka sharma",
      position: "founder& CEO",
      image: "/WhatsApp Image 2025-08-16 at 17.35.53_4217a197.jpg",
      description: "20+ years  experince in marble floor polishing & carpet cleaning buissness."
    },
    {
      name: "Manoj kumar sharma ",
      position: "Head of Operations & MD ",
      image: "/WhatsApp Image 2025-08-15 at 17.25.12_003cb080.jpg",
      description: "Specialist in operations management & high-quality floor care solutions."
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.div 
                className="mb-4 lg:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  About Us
                </span>
              </motion.div>
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 lg:mb-6 leading-tight font-display"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About
                <motion.span 
                  className="block text-gradient"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  SG Services
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-neutral-600 mb-6 lg:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                We are a leading provider of professional cleaning and maintenance services, 
                committed to delivering excellence in every project we undertake.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/contact"
                    className="btn-primary flex items-center justify-center group"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/#services"
                    className="btn-secondary text-center"
                  >
                    Our Services
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-first lg:order-last"
            >
              <motion.img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="About SGPSI"
                className="rounded-2xl shadow-2xl w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              variants={itemVariants}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="About SGPSI"
                className="rounded-2xl shadow-2xl w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 font-display">
                🌟 SG Services – Where Cleanliness Meets Perfection 🌟
              </h2>
              
              <p className="text-base sm:text-lg text-neutral-600 mb-4 lg:mb-6 leading-relaxed">
                At SG Services, we believe a truly clean space is more than just dust-free floors or tidy rooms – it's about creating an environment that feels fresh, inviting, and energizing every single day. With our expert housekeeping and professional floor polishing, we bring a new level of care, precision, and brilliance to your home, office, or commercial space.
              </p>
              
              <p className="text-base sm:text-lg text-neutral-600 mb-6 lg:mb-8 leading-relaxed">
                We're not just cleaners – we're perfectionists. Our trained team uses modern tools, advanced techniques, and safe, high-quality products to ensure your surroundings are not only spotless but also healthy and well-maintained. From marble and granite floors that gleam like new to every corner of your home left dust-free, our mission is to deliver the clean you deserve.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  "Skilled & Trained Team",
                  "On-Time & Reliable Service", 
                  "Modern Tools & Techniques",
                  "100% Customer Satisfaction"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700 font-medium text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-display">
              Mission & Vision
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              className="bg-white p-6 lg:p-8 rounded-xl shadow-lg card-hover"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 lg:mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 lg:mb-4 font-display">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                At SG Services, our mission is to deliver world-class housekeeping and floor polishing solutions that transform every space into a clean, safe, and welcoming environment.
                We are dedicated to using modern techniques, skilled professionals, and a customer-first approach to ensure unmatched quality and long-lasting results.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 lg:p-8 rounded-xl shadow-lg card-hover"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4 lg:mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 lg:mb-4 font-display">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                To be the most trusted and preferred provider of housekeeping and floor polishing services, recognized for our excellence, reliability, and innovation.
                We aim to create cleaner, healthier, and more beautiful spaces that inspire comfort, productivity, and pride for every client we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-display">
              How We Deliver Excellence
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              The Standards We Live By
            </p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4 lg:mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-3 lg:mb-4 group-hover:text-primary-600 transition-colors font-display">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-display">
              Our Leadership Team
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              Meet the experts driving our success
            </p>
          </motion.div>
          
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 lg:p-8 rounded-xl shadow-lg text-center group card-hover"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 lg:mb-6 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <h3 className="text-lg lg:text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors font-display">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3 lg:mb-4 text-sm sm:text-base">{member.position}</p>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center"
            variants={containerVariants}
          >
            {[
              { number: '5000+', label: 'Services Delivered' },
              { number: '20+', label: 'Years Experience' },
              { number: '200+', label: 'Happy Clients' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors font-display"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-primary-100 group-hover:text-white transition-colors text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;