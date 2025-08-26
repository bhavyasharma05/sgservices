import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import FloorPolishing from './pages/FloorPolishing';
import CarpetCleaning from './pages/CarpetCleaning';
import CarpetShampooing from './pages/CarpetShampooing';
import CarpetInjection from './pages/CarpetInjection';
import CarpetEncapsulation from './pages/CarpetEncapsulation';
import UpholsteryCleaning from './pages/UpholsteryCleaning';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Service page error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">We're sorry, but there was an error loading this page.</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      );
    }
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service/floor-polishing" element={<FloorPolishing />} />
              <Route path="/service/carpet-cleaning" element={<CarpetCleaning />} />
              <Route path="/carpet-shampooing" element={<CarpetShampooing />} />
              <Route path="/carpet-injection" element={<CarpetInjection />} />
              <Route path="/carpet-encapsulation" element={<CarpetEncapsulation />} />
              <Route path="/service/upholstery-cleaning" element={<UpholsteryCleaning />} />
              {/* Catch-all route for 404 errors */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="text-center p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                    <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                    <a 
                      href="/"
                      className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
                    >
                      Return to Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

    return this.props.children;
  }
}

export default App;