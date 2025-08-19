import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Users, Droplet, Sparkles, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarpetEncapsulation = () => {
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
      icon: <Volume2 className="w-10 h-10" />,
      title: "Quiet Operation",
      description: "Ideal for 24x7 businesses with minimal disruption"
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Eco-Friendly",
      description: "100% eco-friendly and powerful cleaning chemicals"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Quick Drying",
      description: "Average drying time of only 60 minutes"
    }
  ];

  const serviceBenefits = [
    "No odour after the carpet cleaning process",
    "Minimum water consumption for cleaning",
    "No volatile organic compounds (VOCs)",
    "Protects office environment from virus infections",
    "Improves the longevity of the carpet",
    "Safe for commercial spaces with high foot traffic",
    "Holistic solution for modern offices"
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="min-h-screen"
    >
      <div className="bg-yellow-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-red-100 py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-600/10"></div>
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
                  Carpet Encapsulation
                  <motion.span 
                    className="block text-green-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Technology ✨
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  For Safe and Hygienic Commercial Carpets - Holistic carpet cleaning for modern offices.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Carpets hide a significant amount of pathogens, allergens, dust, etc. that can periodically accumulate in the air through 
                  footfall pressure and ultimately enter our respiratory system. Our encapsulation treatment provides a holistic solution for 
                  commercial carpet cleaning, protecting your office environment from virus infections and improving carpet longevity.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link 
                    to="/contact"
                    className="group bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition-all duration-300 font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/#services"
                    className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-md hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold text-center transform hover:-translate-y-1"
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
                  src="/Carpet-Encapsulation-thumb.png"
                  alt="Carpet Encapsulation Technology"
                  className="rounded-lg shadow-2xl w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" style={{ backgroundColor: '#F0FFF4' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Encapsulation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced low-moisture cleaning for commercial spaces
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
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
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
                  <Sparkles className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">How Encapsulation Works ✨</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Our encapsulation technology uses specialized polymers that crystallize around soil particles, 
                  encapsulating them for easy removal. This low-moisture method is perfect for commercial spaces 
                  that need to remain operational during cleaning.
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
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
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
                    src="/Carpet-Encapsulation-thumb.png" 
                    alt="Encapsulation Process"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Advanced Encapsulation Technology</h3>
                    <p className="text-sm text-white/80">Our specialized equipment ensures thorough cleaning with minimal moisture</p>
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
                Our Encapsulation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to delivering clean, hygienic carpets with minimal disruption
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {[
                {
                  step: "01",
                  title: "Inspection & Preparation",
                  description: "Thorough assessment of carpet condition and preparation of the area"
                },
                {
                  step: "02",
                  title: "Application",
                  description: "Even application of encapsulation solution using specialized equipment"
                },
                {
                  step: "03",
                  title: "Agitation & Crystallization",
                  description: "Mechanical agitation to work solution into fibers and allow crystallization"
                },
                {
                  step: "04",
                  title: "Vacuuming & Finishing",
                  description: "Final vacuuming to remove encapsulated soil particles and quality inspection"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Cleaner, Healthier Office Carpets?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and quote on our professional encapsulation services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Quote
                </motion.a>
                <motion.div 
                  className="text-center mt-12"
                  variants={itemVariants}
                >
                  <Link 
                    to="/#services"
                    className="inline-flex items-center text-white hover:text-green-200 font-semibold text-lg group"
                  >
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default CarpetEncapsulation;