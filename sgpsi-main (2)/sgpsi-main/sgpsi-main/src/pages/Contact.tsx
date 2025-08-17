import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare
} from 'lucide-react';

// Inside function Contact()
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Replace simulated submit with actual POST to Formspree
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const response = await fetch('https://formspree.io/f/xeozvblg', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setSubmitError('Failed to send message. Please try again.');
      }
    } catch {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9999629566", "+91 9999399541"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["sgservicesindia@gmail.com", ""],
      description: "Send us your queries anytime"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: ["223, Garg Colony II, Behind Durga Mandir, Near Gurjjar Chownk, Ballabgarh Faridabad-121004, Haryana, India."],
      description: "Visit our office for consultation"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["24/7"],
      description: "We're here when you need us"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Other"
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
      <section className="bg-gradient-to-br from-[#FFF8E1] to-[#FFD6D6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#B71C1C] mb-6">
              Get In <span className="text-[#FFD600]">Touch</span>
            </h1>
            <p className="text-xl text-[#B71C1C] max-w-3xl mx-auto">
             Experience the perfect blend of expert housekeeping and premium floor polishing services—delivering spotless, sparkling, and truly inviting results every single time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#FFF8E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-[#B71C1C] mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-[#B71C1C]">
              Multiple ways to reach us - choose what works best for you
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-[#FFD6D6] p-8 rounded-lg shadow-lg border border-[#B71C1C] text-center group hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-[#F97C7C] rounded-full flex items-center justify-center text-[#B71C1C] mx-auto mb-6 group-hover:bg-[#B71C1C] group-hover:text-[#FFD600] transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-[#B71C1C] mb-4 group-hover:text-[#FFD600] transition-colors">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-[#CC3829] font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-[#B71C1C] text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#FFD6D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-[#B71C1C] mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-[#B71C1C] mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                Our team is ready to discuss your project requirements and provide expert guidance.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Free Consultation</div>
                    <div className="text-gray-600">Initial consultation is completely free</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Quick Response</div>
                    <div className="text-gray-600">We respond within 24 hours</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Confidential</div>
                    <div className="text-gray-600">All information is kept strictly confidential</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <CheckCircle className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  // Inside the JSX of function Contact(), within the form block
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          First Name *
                        </label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your first name"
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Last Name *
                        </label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="Your last name"
                        />
                      </motion.div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email *
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Phone
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          placeholder="+91 9876543210"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Company
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </motion.div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </motion.div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Message *
                      </label>
                      <textarea 
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your project requirements, challenges, or questions..."
                      ></textarea>
                    </motion.div>
                    
                    <motion.button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5 ml-2" />
                    </motion.button>
                    {submitError && <p className="text-red-600 text-sm">{submitError}</p>}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" style={{ backgroundColor: '#FFF8DF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office or get in touch with us
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Branch Office Address</h3>
                      <p className="text-gray-600">2184 (Basement), Near Community Centre, Sector 46, Gurgaon (Haryana)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600">Only for you </p>
                      <p className="text-gray-600">24/7 open contact us anytime</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+91 9999629566</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;