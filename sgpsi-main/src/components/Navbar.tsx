import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X
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
    { name: 'Services', path: '/#services' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact', path: '/contact', isHighlighted: true }
  ];

  return (
    <>
      {/* Navigation */}
      <motion.nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-3 lg:py-4">
            <Link to="/" className="flex items-center group">
              <motion.div 
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 -mr-2 sm:-mr-3 lg:-mr-4 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src="/favicon.png" 
                  alt="SG Services Logo" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </motion.div>
              <div className="flex flex-col min-w-0">
                <motion.div 
                  className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors font-display"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SG Services
                </motion.div>
                <div className="text-xs sm:text-sm lg:text-base text-neutral-600 group-hover:text-neutral-800 transition-colors leading-tight">
                  Live every day in a clean, fresh home & office.
                </div>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
                      className="btn-primary text-sm lg:text-base"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`relative font-medium transition-colors text-sm lg:text-base ${
                        location.pathname === item.path 
                          ? 'text-primary-600' 
                          : 'text-neutral-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
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
              className="lg:hidden p-2 rounded-md hover:bg-neutral-100 transition-colors focus:ring-2 focus:ring-primary-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden bg-white/95 backdrop-blur-md border-t shadow-lg overflow-hidden"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-3">
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
                    className="block w-full btn-primary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link 
                    to={item.path}
                    className={`block font-medium transition-colors py-2 ${
                      location.pathname === item.path 
                        ? 'text-primary-600' 
                        : 'text-neutral-700 hover:text-primary-600'
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