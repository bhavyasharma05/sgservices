import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Shield,
  Clock,
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  Target,
  Lightbulb,
  Globe,
  Heart,
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Expertise",
      description: "Over 20 years of experience in floor polishing & carpet cleaning with a track record of successful service delivery across diverse industries.",
      stats: "500+ Projects Completed"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Partner",
      description: "We build long-term partnerships with our clients, ensuring sustainable solutions and continuous support throughout their journey.",
      stats: "200+ Long-term Clients"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Committed to delivering services on time and within budget while maintaining the highest quality standards and exceeding expectations.",
      stats: "98% On-time Delivery"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Client Satisfaction",
      description: "Our client-centric approach ensures 100% satisfaction with customized solutions for every unique requirement and business challenge.",
      stats: "100% Client Satisfaction"
    }
  ];

  const differentiators = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quality Focus",
      description: "We don’t just clean – we deliver a flawless shine that lasts."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Modern Techniques",
      description: "We use the latest polishing tools and methods for superior results."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer-Centric Approach",
      description: "We work closely with you to match your exact flooring needs and style."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Industry Knowledge",
      description: "Years of experience in all floor types – marble, granite, wood, tiles, and more."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Team",
      description: " Dedicated professionals who take pride in every polish."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Reliable Service",
      description: "Quick turnaround without compromising on quality."
    }
  ];

  const testimonials = [
    {
      name: "Anil Mehta",
      position: "Hotel Manager, Grand Stay",
      image: "/src/pages/OIP.jpg",
      quote: "Our marble floors had lost their shine over the years, but after the team worked their magic, they look brand new! Guests can’t stop complimenting our lobby.",
      rating: 5
    },
    {
      name: "Sunita Verma",
      position: "Homeowner, South Delhi",
      image: "/src/pages/OIP.webp",
      quote: "They restored our granite floors to a mirror finish. Professional, on time, and the results exceeded our expectations. Worth every penny!",
      rating: 5
    },
    {
      name: "Rohit Sharma",
      position: "Restaurant Owner,Delhi",
      image: "/src/pages/OIP.jpg",
      quote: "From deep cleaning to polishing, their service was flawless. The shine has lasted for months, and it’s so much easier to maintain now.",
      rating: 4.5
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
                  Why Choose Us
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Why Choose
                <motion.span 
                  className="block text-red-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  SG Services?
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                We stand out from the competition with our commitment to excellence, 
                professional expertise, and customer satisfaction in every project.
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
              className="hidden lg:block"
              variants={itemVariants}
            >
              <img 
                src="/src/pages/OIP.PNG"
                alt="Why Choose Us"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 h-full hover:shadow-xl transition-all duration-300">
                  <motion.div 
                    className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {reason.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {reason.description}
                  </p>
                  <div className="text-red-600 font-semibold text-lg">
                    {reason.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600">
            The unmatched expertise and care that make us your trusted partner
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {differentiators.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from organizations we've helped transform
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 group"
                variants={itemVariants}
                whileHover={{ y: -10, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * Math.floor(testimonial.rating) }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
                    </motion.div>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <motion.div 
                    className="w-12 h-12 rounded-full overflow-hidden mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-red-100">
              Numbers that speak for our commitment to excellence
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
          >
            {[
              { number: '5000+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8" /> },
              { number: '20+', label: 'Years Experience', icon: <Clock className="w-8 h-8" /> },
              { number: '200+', label: 'Happy Clients', icon: <Users className="w-8 h-8" /> },
              { number: '100%', label: 'Client Satisfaction', icon: <Star className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <motion.div 
                  className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-white group-hover:text-red-600 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience the SG Services Difference
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the perfect blend of expert housekeeping and premium floor polishing services—delivering spotless, sparkling, and truly inviting results every single time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Transformation
              </motion.a>
              <motion.a 
                href="/contact"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-md hover:bg-red-600 hover:text-white transition-colors font-semibold transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default WhyChooseUs;