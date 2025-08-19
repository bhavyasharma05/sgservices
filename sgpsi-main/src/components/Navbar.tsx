import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/#services' }, // Change path to anchor
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact', path: '/contact', isHighlighted: true }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <motion.div 
        className="bg-gray-900 text-white py-2 px-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <motion.div 
              className="flex items-center hover:text-red-200 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>+91 9999629566</span>
            </motion.div>
            <motion.div 
              className="flex items-center hover:text-red-200 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>sgservicesindia@gmail.com</span>
            </motion.div>
          </div>
          <motion.div 
            className="flex items-center mt-2 sm:mt-0 hover:text-red-200 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span> Delhi , India</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center group">
              <motion.div 
                className="w-28 h-28 -mr-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/Untitled_design-removebg-preview.png" 
                  alt="SG Services Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.div 
                  className="text-3xl font-bold text-gray-900 group-hover:text-red-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SG Services
                </motion.div>
                <div className="text-base text-gray-600 group-hover:text-gray-800 transition-colors">
                 Live every day in a clean, fresh home & office.
                </div>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {item.isHighlighted ? (
                    <Link 
                      to={item.path}
                      className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`relative font-medium transition-colors ${
                        location.pathname === item.path 
                          ? 'text-red-600' 
                          : 'text-gray-700 hover:text-red-600'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                          layoutId="activeTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}

            </div>

            <motion.button 
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden bg-white border-t shadow-lg overflow-hidden"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: isMenuOpen ? 0.1 * index : 0 }}
              >
                {item.isHighlighted ? (
                  <Link 
                    to={item.path}
                    className="block w-full bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link 
                    to={item.path}
                    className={`block font-medium transition-colors ${
                      location.pathname === item.path 
                        ? 'text-red-600' 
                        : 'text-gray-700 hover:text-red-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}

          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;