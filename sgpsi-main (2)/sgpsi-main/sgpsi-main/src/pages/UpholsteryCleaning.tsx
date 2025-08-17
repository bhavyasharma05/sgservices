import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Users, Sofa, Car, Square, Armchair } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpholsteryCleaning = () => {
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
                Upholstery Cleaning
                <motion.span 
                  className="block text-red-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Services 🛋️✨
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Professional sofa, chair, car upholstery, and blind cleaning for homes, offices, and commercial spaces.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We use premium-quality liquid solutions to clean and protect your upholstery from scratches, stains, and spots. 
                Our advanced cleaning techniques and modern equipment ensure deep cleaning without damaging the fabric.
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
                src="/src/pages/upholstery-solutions-services.jpg"
                alt="Upholstery Cleaning Service"
                className="rounded-lg shadow-2xl w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services 🧽
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive upholstery cleaning solutions for all your needs
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="text-red-600">
                  <Sofa className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🛋️ Sofa Cleaning</h3>
              <p className="text-gray-600">
                Removes dust, stains, and dirt buildup, restoring your sofa's original freshness and color.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="text-red-600">
                  <Armchair className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">💺 Chair Cleaning</h3>
              <p className="text-gray-600">
                Perfect for office and home chairs — removes grime, sweat stains, and trapped dust.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="text-red-600">
                  <Car className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🚗 Car Cleaning</h3>
              <p className="text-gray-600">
                Deep cleaning of car seats and interiors to remove dust, allergens, and stains, leaving your vehicle fresh and hygienic.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="text-red-600">
                  <Square className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🪟 Blind Cleaning</h3>
              <p className="text-gray-600">
                Specialized cleaning for all types of blinds — removes dust, grease, and dirt without damaging delicate materials, leaving them spotless and fresh.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose S.G. Services Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose S.G. Services? ��
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to excellence
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="text-red-600">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Care</h3>
              <p className="text-gray-600 text-sm">Trained professionals with years of experience</p>
            </motion.div>

            <motion.div 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="text-red-600">
                  <Star className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Advanced Equipment</h3>
              <p className="text-gray-600 text-sm">Uses modern, ultra-cleaning machines for best results</p>
            </motion.div>

            <motion.div 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="text-red-600">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Safe & Effective</h3>
              <p className="text-gray-600 text-sm">Gentle on fabrics, tough on dirt and stains</p>
            </motion.div>

            <motion.div 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="text-red-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">Specialized Attention</h3>
              <p className="text-gray-600 text-sm">Every piece receives customized care</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Refresh Your Upholstery?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote on our professional upholstery cleaning services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.a>
              <motion.a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default UpholsteryCleaning;
