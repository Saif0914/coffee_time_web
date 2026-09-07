import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { BlogSingle } from './pages/BlogSingle';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname.toLowerCase();
    let bgUrl = 'images/coffee_banner_beans.jpg';
    if (path.startsWith('/menu')) {
      bgUrl = 'images/bg_menu.jpg';
    } else if (path.startsWith('/services')) {
      bgUrl = 'images/bg_services.jpg';
    } else if (path.startsWith('/blog')) {
      bgUrl = 'images/bg_blog.jpg';
    } else if (path.startsWith('/about')) {
      bgUrl = 'images/bg_about.jpg';
    } else if (path.startsWith('/contact')) {
      bgUrl = 'images/bg_contact.jpg';
    }
    document.body.style.backgroundImage = `url(${bgUrl})`;
  }, [location.pathname]);

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/index.html" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu.html" element={<Menu />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services.html" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog.html" element={<Blog />} />
              <Route path="/blog-single" element={<BlogSingle />} />
              <Route path="/blog-single.html" element={<BlogSingle />} />
              <Route path="/about" element={<About />} />
              <Route path="/about.html" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact.html" element={<Contact />} />
              {/* Redirect any obsolete shop or cart URLs to Menu */}
              <Route path="/shop" element={<Navigate to="/menu" replace />} />
              <Route path="/shop.html" element={<Navigate to="/menu" replace />} />
              <Route path="/product-single" element={<Navigate to="/menu" replace />} />
              <Route path="/product-single.html" element={<Navigate to="/menu" replace />} />
              <Route path="/cart" element={<Navigate to="/menu" replace />} />
              <Route path="/cart.html" element={<Navigate to="/menu" replace />} />
              <Route path="/checkout" element={<Navigate to="/menu" replace />} />
              <Route path="/checkout.html" element={<Navigate to="/menu" replace />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
