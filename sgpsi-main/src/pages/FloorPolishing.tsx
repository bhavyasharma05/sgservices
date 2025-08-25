import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Shield, Users, Sparkles, Wrench, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloorPolishing = () => {
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

  const benefits = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Faster Service",
      description: "Reduced labor costs compared to traditional methods"
    },
    {
      icon: <Gem className="w-10 h-10" />,
      title: "Honing",
      description: "Remove minimal scratches"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Crystallization",
      description: "For flawless shine and protection"
    }
  ];

  const serviceBenefits = [
    "One-time service ideal for offices & building lobbies",
    "Removes scratches & stains from surfaces",
    "Repairs cracks using specialized sealing treatment",
    "Suitable for a variety of marble & granite floors",
    "Advanced technology for efficient cleaning",
    "100% statutory compliance & service delivery",
    "Performed by highly-trained professionals"
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-red-50 py-20 overflow-hidden">
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
                  Professional Service
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professional Floor Polishing in Delhi, Gurugram & Faridabad
                <motion.span 
                  className="block text-red-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Marble & Granite Polishing Experts ✨
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Expert floor polishing services in Delhi, Gurugram, and Faridabad. Professional marble and granite floor restoration using advanced diamond polishing technology. 
                Transform your dull floors into mirror-like surfaces with our 20+ years of expertise.
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
                <motion.div 
                  className="text-center mt-12"
                  variants={itemVariants}
                >
                  <Link 
                    to="/#services"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-lg group"
                  >
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <motion.img 
                src=" /OIP.PNG"
                alt="Floor Polishing Service"
                className="rounded-lg shadow-2xl w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Floor Polishing Process - Delhi NCR
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced diamond polishing methods for marble and granite floors across Delhi, Gurugram & Faridabad
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Restoration & Maintenance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Wrench className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Floor Restoration & Maintenance in Delhi NCR 🔧</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Is your marble or granite floor in Delhi, Gurugram, or Faridabad looking dull and scratched? Our floor polishing experts assess your specific needs to determine the best restoration approach.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our floor polishing specialists in Delhi NCR evaluate:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Grinding vs. honing needs
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Polishing vs. crystallization process
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Degree of surface damage
                </li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-600 p-4">
                <p className="text-red-800 font-medium">
                  <strong>Important:</strong> Professional floor polishing requires expertise and proper equipment. SG Services provides expert floor restoration in Delhi, Gurugram & Faridabad with proper maintenance programs to keep your floors in perfect condition.
                </p>
              </div>
              <p className="text-lg text-gray-600 mt-6">
                SG Services delivers professional floor polishing across Delhi NCR, preserving the natural elegance and shine of your marble and granite floors.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <img 
                src="/hard-floor-polishing (1).jpg"
                alt="Marble Restoration"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Floor Polishing Services in Delhi NCR? 🏆
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert floor polishing in Delhi, Gurugram & Faridabad for all types of marble and granite flooring.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {serviceBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {benefit}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specific Polishing Services */}
      <section className="py-20" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Marble Floor Polishing in Delhi NCR 🪞
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Expert marble floor polishing services in Delhi, Gurugram & Faridabad using advanced single-disk machines and industrial-grade diamond pads for superior results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Professional marble polishing in Delhi NCR
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Expert care for Italian/Indian marble floors
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Complete floor polishing solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Quality assurance with shine measurement
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Professional crack repair & sealing
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <img 
                src="/What-Best-Method-Polishing-Marble-Floors-1-scaled.jpg"
                alt="Marble Polishing"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Granite Polishing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <img 
                src="/granite-floor-restoration2.jpeg"
                alt="Granite Polishing"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Granite Floor Polishing in Delhi, Gurugram & Faridabad 🪨
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional granite floor polishing services across Delhi NCR. Ideal for residential homes, offices, and commercial spaces with granite flooring.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Specialized granite polishing in Delhi NCR
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Professional scratch & stain removal
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Expert care for all granite varieties
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Complete granite floor restoration
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                  Consistent quality with professional equipment
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready for Professional Floor Polishing in Delhi NCR?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get expert floor polishing in Delhi, Gurugram & Faridabad. Free consultation for marble and granite floor polishing services. Call +91-9999629566 today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Quote - Call Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FloorPolishing;
