import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarpetCleaning = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Deep Cleaning",
      description: "Advanced encapsulation technology for thorough carpet restoration"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Drying",
      description: "Fast-drying process minimizing disruption to your space"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stain Removal",
      description: "Professional stain treatment for all types of carpet materials"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Technicians",
      description: "Trained professionals with specialized carpet cleaning expertise"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Inspection",
      description: "Thorough assessment of carpet type, condition, and stains"
    },
    {
      step: "02",
      title: "Pre-treatment",
      description: "Application of specialized cleaning solutions for optimal results"
    },
    {
      step: "03",
      title: "Deep Cleaning",
      description: "Advanced cleaning with professional equipment and techniques"
    },
    {
      step: "04",
      title: "Protection",
      description: "Application of protective treatments for long-lasting freshness"
    }
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
                Professional Carpet Cleaning in Delhi & Gurugram
                <motion.span 
                  className="block text-red-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Expert Deep Cleaning Services
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Expert carpet cleaning services in Delhi and Gurugram. Professional deep cleaning, shampooing, and stain removal for all carpet types. 
                Advanced cleaning technology with quick drying times for residential and commercial spaces.
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
                src="/Carpet-Encapsulation-thumb.png"
                alt="Carpet Cleaning Service"
                className="rounded-lg shadow-2xl w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Carpet Cleaning Methods - Delhi & Gurugram
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three specialized carpet cleaning techniques for homes and offices in Delhi NCR
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => window.location.href = '/carpet-shampooing'}
              style={{ cursor: 'pointer' }}
            >
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img 
                  src="/Screenshot 2025-08-15 111603.png" 
                  alt="Carpet Shampooing with Foam Generator" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Carpet Shampooing with Foam Generator</h3>
              <p className="text-gray-600">
                Professional carpet shampooing services in Delhi & Gurugram. Advanced foam generator technology provides deep cleaning 
                with faster drying times for residential and commercial carpets.
              </p>
              <div className="mt-4">
                <span className="text-red-600 font-medium hover:underline">Learn more →</span>
              </div>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => window.location.href = '/carpet-injection'}
              style={{ cursor: 'pointer' }}
            >
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img 
                  src="/injection.jpg" 
                  alt="Carpet Injection & Extraction" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Carpet Injection & Extraction</h3>
              <p className="text-gray-600">
                Expert carpet cleaning in Delhi NCR for deep-seated stains and dirt. Professional injection and extraction technology 
                ensures thorough cleaning for heavily soiled carpets in homes and offices.
              </p>
              <div className="mt-4">
                <span className="text-red-600 font-medium hover:underline">Learn more →</span>
              </div>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-lg hover:bg-red-50 transition-colors group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => window.location.href = '/carpet-encapsulation'}
              style={{ cursor: 'pointer' }}
            >
              <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                <img 
                  src="/Carpet-Encapsulation-thumb.png" 
                  alt="Carpet Encapsulation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Carpet Encapsulation</h3>
              <p className="text-gray-600">
                Professional carpet encapsulation services in Delhi & Gurugram. Low-moisture cleaning process ideal for 
                high-traffic commercial areas and modern offices across Delhi NCR.
              </p>
              <div className="mt-4">
                <span className="text-red-600 font-medium hover:underline">Learn more →</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Carpet Cleaning Process - Delhi NCR
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach for carpet cleaning in Delhi, Gurugram & Faridabad
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
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
              Ready for Professional Carpet Cleaning in Delhi NCR?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Get expert carpet cleaning in Delhi & Gurugram. Free consultation for residential and commercial carpet cleaning services. Call +91-9999629566 today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Free Consultation

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

export default CarpetCleaning;
