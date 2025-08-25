import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target,
  TrendingUp,
  Users,
  Building,
  Briefcase,
  Globe,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  BarChart,
  Settings,
  Shield,
  Zap,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      shortDescription: "Comprehensive strategic planning services to help organizations define their vision, mission, and strategic objectives.",
      fullDescription: "Our strategic planning services help organizations create a clear roadmap for success. We work with leadership teams to define vision, mission, and strategic objectives while developing actionable plans for sustainable growth.",
      features: [
        "Vision & Mission Development",
        "Strategic Objective Setting",
        "Market Analysis & Positioning",
        "Competitive Intelligence",
        "Strategic Roadmap Creation",
        "Performance Metrics Definition"
      ],
      benefits: [
        "Clear direction and focus",
        "Improved decision making",
        "Better resource allocation",
        "Enhanced competitive advantage"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Process Improvement",
      shortDescription: "Optimize your business processes through systematic analysis and implementation of best practices.",
      fullDescription: "We help organizations streamline operations, eliminate inefficiencies, and implement best practices to enhance productivity and reduce costs while maintaining quality standards.",
      features: [
        "Process Mapping & Analysis",
        "Workflow Optimization",
        "Automation Implementation",
        "Quality Management Systems",
        "Performance Monitoring",
        "Continuous Improvement Programs"
      ],
      benefits: [
        "Increased operational efficiency",
        "Cost reduction",
        "Improved quality",
        "Enhanced customer satisfaction"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Human Resource Development",
      shortDescription: "Develop your human capital through training programs, performance management systems, and organizational development.",
      fullDescription: "Our HR development services focus on building organizational capabilities through strategic talent management, training programs, and performance enhancement initiatives.",
      features: [
        "Talent Management Strategy",
        "Training & Development Programs",
        "Performance Management Systems",
        "Leadership Development",
        "Employee Engagement Programs",
        "Succession Planning"
      ],
      benefits: [
        "Enhanced employee performance",
        "Improved retention rates",
        "Better leadership pipeline",
        "Increased organizational capability"
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Organizational Development",
      shortDescription: "Transform your organization's culture, structure, and capabilities to achieve higher performance.",
      fullDescription: "We help organizations transform their culture, structure, and capabilities to achieve sustainable competitive advantage and higher performance levels.",
      features: [
        "Organizational Design",
        "Culture Transformation",
        "Change Management",
        "Team Development",
        "Communication Enhancement",
        "Conflict Resolution"
      ],
      benefits: [
        "Improved organizational agility",
        "Enhanced collaboration",
        "Better change adaptability",
        "Stronger organizational culture"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Management Consulting",
      shortDescription: "Expert management consulting services covering operations, finance, marketing, and technology.",
      fullDescription: "Comprehensive management consulting services that address all aspects of business operations, from financial management to marketing strategy and technology implementation.",
      features: [
        "Operations Management",
        "Financial Planning & Analysis",
        "Marketing Strategy",
        "Technology Integration",
        "Risk Management",
        "Governance & Compliance"
      ],
      benefits: [
        "Holistic business improvement",
        "Expert guidance",
        "Risk mitigation",
        "Sustainable growth"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Transformation",
      shortDescription: "Guide your organization through digital transformation initiatives to leverage technology for improved outcomes.",
      fullDescription: "We help organizations navigate digital transformation by implementing technology solutions that improve efficiency, enhance customer experience, and drive innovation.",
      features: [
        "Digital Strategy Development",
        "Technology Assessment",
        "System Integration",
        "Data Analytics Implementation",
        "Digital Process Automation",
        "Cybersecurity Enhancement"
      ],
      benefits: [
        "Improved operational efficiency",
        "Enhanced customer experience",
        "Better data-driven decisions",
        "Competitive advantage"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your current situation, challenges, and objectives to understand your unique needs."
    },
    {
      step: "02", 
      title: "Strategy",
      description: "We develop customized strategies and solutions tailored to your specific requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We work with your team to implement solutions with minimal disruption to operations."
    },
    {
      step: "04",
      title: "Optimization",
      description: "We monitor progress and continuously optimize for sustained improvement and growth."
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
                  Our Services
                </span>
              </motion.div>
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Floor Polishing & Carpet Cleaning
                <motion.span 
                  className="block text-red-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Services in Delhi NCR
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Expert floor polishing in Delhi, Gurugram & Faridabad. Professional carpet cleaning, sofa cleaning & blind cleaning services. 
                20+ years experience serving residential and commercial clients across Delhi NCR.
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
                  Get Free Quote
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
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                variants={itemVariants}
                whileHover={{ shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6 flex-1">
                      <motion.div 
                        className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{service.shortDescription}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Settings className="w-5 h-5 mr-2 text-red-600" />
                        <span className="text-sm text-gray-500">Professional</span>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => setExpandedService(expandedService === index ? null : index)}
                      className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        animate={{ rotate: expandedService === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Our Professional Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach for floor polishing, carpet cleaning & sofa cleaning services
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
                <motion.div 
                  className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-red-700 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {index + 1}
                </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Get professional floor polishing in Delhi, Gurugram, Faridabad. Free consultation for carpet cleaning, sofa cleaning & blind cleaning services. Call +91-9999629566
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote - Call Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold"
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

export default Services;