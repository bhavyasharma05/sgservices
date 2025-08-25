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
      title: 'Floor Polishing in Delhi NCR',
      description:
        'Professional marble & granite floor polishing in Delhi, Gurugram, Faridabad. Diamond pad polishing for mirror-like shine.',
    },
    {
      image: '/Screenshot 2025-08-15 111603.png',
      title: 'Carpet Cleaning Services',
      description:
        'Expert carpet cleaning in Delhi & Gurugram. Deep cleaning, shampooing & stain removal for all carpet types.',
    },
    {
      image: '/upholstery-solutions-services.jpg',
      title: 'Sofa & Blind Cleaning',
      description:
        'Professional sofa cleaning, upholstery cleaning & blind cleaning services for homes and offices.',
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
                className="mb-6 lg:mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                  Professional Cleaning Services
                </span>
              </motion.div>
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 mb-4 lg:mb-6 leading-tight font-display"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="block text-gradient"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Professional Floor Polishing & Carpet Cleaning in Delhi NCR
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-neutral-600 mb-6 lg:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Expert floor polishing in Faridabad, Gurugram & Delhi. Professional carpet cleaning, sofa cleaning & blind cleaning services. 
                20+ years experience serving 5000+ satisfied customers across Delhi NCR.
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
                    Contact Us Today
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    to="/about"
                    className="btn-secondary text-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                <motion.img 
                  src="/OIP.PNG"
                  alt="Professional Cleaning Services"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  loading="eager"
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-xl"
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm sm:text-base">5000+ Services</div>
                      <div className="text-neutral-600 text-xs sm:text-sm">Successfully Delivered</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 font-display" id="services">
              Professional Cleaning Services in Delhi, Gurugram & Faridabad
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Expert floor polishing, carpet cleaning, sofa cleaning & blind cleaning services across Delhi NCR
            </p>
          </motion.div>

          <motion.div 
            className="responsive-grid"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={`/service/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <motion.div 
                  className="group bg-white p-6 lg:p-8 rounded-xl shadow-lg card-hover border border-neutral-100 cursor-pointer flex flex-col h-full"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="w-full h-48 sm:h-56 lg:h-64 rounded-lg overflow-hidden mb-4 lg:mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                      loading="lazy"
                    />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3 lg:mb-4 group-hover:text-primary-600 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm sm:text-base flex-grow">{service.description}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90"></div>
        <div className="container-custom relative">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center"
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
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-primary-200 transition-colors font-display"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-primary-100 group-hover:text-white transition-colors text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 font-display">
              Ready to Shine Your Space Like Never Before?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 mb-6 lg:mb-8 max-w-3xl mx-auto">
              Get professional floor polishing in Delhi, Gurugram, Faridabad. Expert carpet cleaning, sofa cleaning & blind cleaning services. 
              Free consultation available. Call +91-9999629566 today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/contact"
                  className="btn-primary"
                >
                  Get Free Quote - Call Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New SEO-Optimized Location Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 font-display">
              Floor Polishing & Carpet Cleaning Services Across Delhi NCR
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Professional cleaning services available in Delhi, Gurugram, and Faridabad
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-neutral-50 p-6 lg:p-8 rounded-xl shadow-lg card-hover"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 lg:mb-4 font-display">
                Floor Polishing in Delhi
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base mb-4">
                Expert marble and granite floor polishing services across Delhi. Professional diamond polishing for homes, offices, and commercial spaces.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>✓ Marble floor polishing</li>
                <li>✓ Granite floor restoration</li>
                <li>✓ Commercial floor polishing</li>
                <li>✓ Residential floor care</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 p-6 lg:p-8 rounded-xl shadow-lg card-hover"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 lg:mb-4 font-display">
                Floor Polishing in Gurugram
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base mb-4">
                Professional floor polishing services in Gurugram. Specialized in marble, granite, and stone floor restoration with modern equipment.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>✓ Office floor polishing</li>
                <li>✓ Residential marble care</li>
                <li>✓ Stone floor restoration</li>
                <li>✓ High-rise building services</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-neutral-50 p-6 lg:p-8 rounded-xl shadow-lg card-hover"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 lg:mb-4 font-display">
                Floor Polishing in Faridabad
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base mb-4">
                Expert floor polishing services in Faridabad. Complete marble and granite floor care solutions for residential and commercial properties.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li>✓ Home floor polishing</li>
                <li>✓ Commercial floor care</li>
                <li>✓ Marble restoration</li>
                <li>✓ Granite polishing</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section - Based on attachment */}
      <section className="section-padding bg-[#FCF7EF]">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
              TRUSTED BY PROFESSIONALS ACROSS DELHI NCR
            </h2>
            <p className="text-neutral-800 text-lg">
              Leading companies trust SG Services for their floor polishing and carpet cleaning needs
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-60"
            variants={containerVariants}
          >
            {/* Company logos placeholder - matching the attachment style */}
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">SAMSUNG</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">DATADOG</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">stripe</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">monday.com</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">RIPPLING</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">perplexity</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">ramp</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">shopify</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">US FOODS</div>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center h-16"
              variants={itemVariants}
            >
              <div className="text-neutral-400 text-lg font-semibold">mercado libre</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;