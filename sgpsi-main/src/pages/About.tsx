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
      title: "Floor Polishing Expertise",
      description: "Professional marble & granite floor polishing in Delhi NCR with diamond polishing technology."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Carpet Cleaning Specialists",
      description: "Expert carpet cleaning services in Delhi & Gurugram with advanced cleaning methods."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Sofa & Blind Cleaning",
      description: "Professional sofa cleaning and blind cleaning services for homes and offices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Delhi NCR Coverage",
      description: "Serving Delhi, Gurugram, Faridabad with reliable and timely cleaning services."
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
                About SG Services - Floor Polishing Experts in Delhi NCR
                <motion.span 
                  className="block text-gradient"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  20+ Years Experience
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-neutral-600 mb-6 lg:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Leading provider of floor polishing in Delhi, Gurugram & Faridabad. Professional carpet cleaning, sofa cleaning & blind cleaning services. 
                Trusted by 5000+ customers across Delhi NCR with 20+ years of expertise.
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
                🌟 SG Services – Premier Floor Polishing & Carpet Cleaning in Delhi NCR 🌟
              </h2>
              
              <p className="text-base sm:text-lg text-neutral-600 mb-4 lg:mb-6 leading-relaxed">
                At SG Services, we specialize in professional floor polishing in Delhi, Gurugram, and Faridabad. Our expert team provides comprehensive carpet cleaning, sofa cleaning, and blind cleaning services across Delhi NCR. With 20+ years of experience and 5000+ satisfied customers, we deliver exceptional results for residential and commercial properties.
              </p>
              
              <p className="text-base sm:text-lg text-neutral-600 mb-6 lg:mb-8 leading-relaxed">
                Our specialized services include marble floor polishing, granite floor restoration, deep carpet cleaning, professional sofa cleaning, and comprehensive blind cleaning. We use advanced diamond polishing techniques and modern equipment to restore your floors to mirror-like shine while ensuring complete customer satisfaction.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  "Floor Polishing Experts - Delhi NCR",
                  "Professional Carpet Cleaning Services", 
                  "Sofa & Blind Cleaning Specialists",
                  "5000+ Satisfied Customers"
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
                To provide the best floor polishing services in Delhi, Gurugram, and Faridabad. We deliver professional carpet cleaning, sofa cleaning, and blind cleaning services using advanced techniques and modern equipment. Our mission is to exceed customer expectations with every project while maintaining the highest standards of quality and reliability.
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
                To become the leading floor polishing and carpet cleaning service provider across Delhi NCR. We envision expanding our professional cleaning services while maintaining our reputation for excellence in marble polishing, granite restoration, carpet cleaning, sofa cleaning, and blind cleaning throughout Delhi, Gurugram, and Faridabad.
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
              Why Choose Our Floor Polishing & Carpet Cleaning Services
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600">
              Professional cleaning services across Delhi, Gurugram & Faridabad
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