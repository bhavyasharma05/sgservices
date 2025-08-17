import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Users, Droplet, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarpetInjection = () => {
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
      icon: <Droplet className="w-10 h-10" />,
      title: "Effective Deep Cleaning",
      description: "Works on all types of carpets to remove embedded dirt and stains"
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Eco-Friendly",
      description: "100% eco-friendly and powerful cleaning chemicals"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Thorough Drying",
      description: "Drying takes approximately 8-12 hours depending on the carpet"
    }
  ];

  const serviceBenefits = [
    "No odour after the carpet cleaning process",
    "Minimum water consumption for cleaning",
    "No volatile organic compounds (VOCs)",
    "Effective on heavily soiled commercial carpets",
    "Removes pathogens, allergens, and dust",
    "Prevents permanent damage to carpet fibers",
    "Eliminates risk of respiratory illnesses"
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen"
    >
      <div className="bg-yellow-50 min-h-screen relative">
        {/* Hero Section */}
        <section className="bg-red-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Carpet Injection
                  <motion.span 
                    className="block text-red-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    & Extraction 💧
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  For Cleansing & Restoring Carpets - A deep cleaning method that you can rely on.
                </motion.p>
                <motion.p 
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Commercial carpets often get soiled typically over the course of a year with substantial deposit of pathogens, allergens, 
                  dust, etc. It can result in permanent damage of the carpet and incur heavy costs. Our Injection-Extraction method is one of the 
                  highly regarded deep cleaning methods that is effective on every type of carpet.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 mt-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link 
                    to="/contact"
                    className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/#services"
                    className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold text-center transform hover:-translate-y-1"
                  >
                    View All Services
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.img 
                  src="/src/pages/injection.jpg"
                  alt="Carpet Injection & Extraction"
                  className="rounded-lg shadow-2xl w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" style={{ backgroundColor: '#F0F8FF' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Injection Extraction?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A powerful cleaning method for all types of carpets
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
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <Zap className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">How Injection Extraction Works ✨</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  With 3-in-1 action of agitation, injection and extraction, it helps to restore the carpet quality and eliminate risk of respiratory illnesses.
                </p>
                
                <ul className="space-y-4">
                  {serviceBenefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="relative rounded-lg overflow-hidden shadow-xl"
                variants={itemVariants}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="/src/pages/injection.jpg" 
                    alt="Injection Extraction Process"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Professional Equipment</h3>
                    <p className="text-sm text-white/80">Our specialized injection extraction machines deliver powerful cleaning performance</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process Steps Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Injection Extraction Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to delivering spotless, fresh carpets
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {[
                {
                  step: "01",
                  title: "Inspection & Pre-treatment",
                  description: "Thorough assessment of carpet condition and application of specialized pre-treatment solutions"
                },
                {
                  step: "02",
                  title: "Injection Process",
                  description: "Injection of cleaning solution deep into carpet fibers to break down dirt and stains"
                },
                {
                  step: "03",
                  title: "Agitation & Extraction",
                  description: "Mechanical agitation followed by powerful extraction to remove dirt, allergens, and moisture"
                },
                {
                  step: "04",
                  title: "Drying & Final Inspection",
                  description: "Accelerated drying process and quality check to ensure complete restoration"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Deep Cleaned Carpets?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and quote on our professional injection extraction services
              </p>
              <motion.div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact"
                  className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/#services"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold text-center transform hover:-translate-y-1"
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default CarpetInjection;