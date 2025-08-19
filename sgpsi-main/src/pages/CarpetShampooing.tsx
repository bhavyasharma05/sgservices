import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Clock, Shield, Users, Droplet, Sparkles, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarpetShampooing = () => {
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
      title: "Deep Penetration",
      description: "Foam penetrates deep into carpet fibers to lift embedded dirt and stains"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Controlled Application",
      description: "Precise foam distribution ensures even cleaning across all carpet areas"
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: "Faster Drying",
      description: "Uses less moisture than traditional methods for quicker drying times"
    }
  ];

  const serviceBenefits = [
    "Effectively removes deep-seated dirt and stains",
    "Revitalizes carpet appearance and texture",
    "Extends carpet lifespan through gentle yet thorough cleaning",
    "Reduces allergens and improves indoor air quality",
    "Eliminates unpleasant odors trapped in carpet fibers",
    "Safe for most carpet types and materials",
    "Environmentally friendly cleaning solutions available"
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
                Carpet Shampooing
                <motion.span 
                  className="block text-red-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  with Foam Generator 🧼
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Our advanced foam generator technology delivers superior carpet cleaning results with faster drying times and exceptional stain removal.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                The foam shampooing method creates a rich, dense foam that penetrates deep into carpet fibers, 
                lifting embedded dirt and stains while using minimal moisture for faster drying times.
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
                src="/Screenshot 2025-08-15 111603.png"
                alt="Carpet Shampooing with Foam Generator"
                className="rounded-lg shadow-2xl w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits of Foam Generator Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced foam shampooing for superior carpet cleaning results
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

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Sparkles className="w-8 h-8 text-red-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How Foam Shampooing Works ✨</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our foam generator technology creates a rich, dense foam that penetrates deep into carpet fibers, 
                lifting embedded dirt and stains while using minimal moisture for faster drying times.
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
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
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
                  src="/Screenshot 2025-08-15 111603.png" 
                  alt="Foam Shampooing Process"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Advanced Foam Technology</h3>
                  <p className="text-sm text-white/80">Our specialized equipment generates the perfect foam consistency for optimal cleaning results</p>
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
              Our Foam Shampooing Process
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
                title: "Inspection & Preparation",
                description: "Thorough assessment of carpet type, condition, and stains before preparing the area"
              },
              {
                step: "02",
                title: "Foam Generation",
                description: "Creation of rich, dense foam using our specialized foam generator equipment"
              },
              {
                step: "03",
                title: "Application & Agitation",
                description: "Even application of foam and gentle agitation to penetrate deep into carpet fibers"
              },
              {
                step: "04",
                title: "Extraction & Drying",
                description: "Thorough extraction of foam and dirt, followed by accelerated drying process"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {step.step}
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
              Ready for Fresh, Clean Carpets?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote on our professional foam shampooing services
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

export default CarpetShampooing;