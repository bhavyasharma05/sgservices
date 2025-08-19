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
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-gray-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  About Us
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About
                <motion.span 
                  className="block text-red-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  SG Services
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                We are a leading provider of professional cleaning and maintenance services, 
                committed to delivering excellence in every project we undertake.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link 
                  to="/contact"
                  className="group bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300 font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/#services"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold text-center transform hover:-translate-y-1"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="About SGPSI"
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🌟 SG Services – Where Cleanliness Meets Perfection 🌟
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At SG Services, we believe a truly clean space is more than just dust-free floors or tidy rooms – it’s about creating an environment that feels fresh, inviting, and energizing every single day. With our expert housekeeping and professional floor polishing, we bring a new level of care, precision, and brilliance to your home, office, or commercial space.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We’re not just cleaners – we’re perfectionists. Our trained team uses modern tools, advanced techniques, and safe, high-quality products to ensure your surroundings are not only spotless but also healthy and well-maintained. From marble and granite floors that gleam like new to every corner of your home left dust-free, our mission is to deliver the clean you deserve.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
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
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
              At SG Services, our mission is to deliver world-class housekeeping and floor polishing solutions that transform every space into a clean, safe, and welcoming environment.
              We are dedicated to using modern techniques, skilled professionals, and a customer-first approach to ensure unmatched quality and long-lasting results.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
              To be the most trusted and preferred provider of housekeeping and floor polishing services, recognized for our excellence, reliability, and innovation.
              We aim to create cleaner, healthier, and more beautiful spaces that inspire comfort, productivity, and pride for every client we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Deliver Excellence
            </h2>
            <p className="text-xl text-gray-600">
            The Standards We Live By
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                  className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving our success
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center group"
                variants={itemVariants}
                whileHover={{ y: -10, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <motion.div 
                  className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
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
                  className="text-4xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-red-100 group-hover:text-white transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;