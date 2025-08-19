import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (window.location.hash === "#services") {
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const stats = [
    { number: '5000+', label: 'Services delivered' },
    { number: '20+', label: 'Years Experience' },
    { number: '200+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const services = [
    {
      image: '/OIP.PNG',
      title: 'Floor Polishing',
      description:
        'Achieve a mirror-like shine with precision diamond pad polishing for long-lasting beauty.',
    },
    {
      image: '/Screenshot 2025-08-15 111603.png',
      title: 'Carpet Cleaning',
      description:
        'Specialized cleaning to restore the beauty of all Carpet surfaces.',
    },
    {
      image: '/upholstery-solutions-services.jpg',
      title: 'upholstery Cleaning',
      description:
        'Professional restoration and polishing services for all types of hard surfaces.',
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
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                 
              </motion.div>
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                
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
                Because a clean space isn't just about looks —
                It's about comfort, health, and peace of mind.
                Live each day in the freshness you deserve.


              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link 
                  to="/get-quote"
                  className="group bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300 font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about"
                  className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold text-center transform hover:-translate-y-1"
                >
                  Learn More
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
                src="/OIP.PNG"
                alt="Business Consulting"
                className="rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl"
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">5000+ Services</div>
                    <div className="text-gray-600 text-sm">Successfully Delivered</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning and maintenance solutions for homes, offices, and commercial spaces
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <motion.div 
                  className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ minHeight: '400px' }} // Ensures enough space for the image
                >
                  <motion.div 
                    className="w-full h-1/2 rounded-lg overflow-hidden mb-6 flex-grow"
                    style={{ height: '200px', width: '100%' }} // Enlarged image container
                    whileHover={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
           
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <motion.div 
                  className="text-4xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-red-100 group-hover:text-white transition-colors">{stat.label}</div>
              </motion.div>
            ))}
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
            Ready to Shine Your Space Like Never Before?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the perfect blend of expert housekeeping and premium floor polishing services—delivering spotless, sparkling, and truly inviting results every single time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us Today
              </Link>

            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;