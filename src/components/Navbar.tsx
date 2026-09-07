import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [scrollState, setScrollState] = useState<'default' | 'scrolled' | 'awake' | 'sleep'>('default');

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      if (st > 350) {
        setScrollState('awake');
      } else if (st > 150) {
        setScrollState('scrolled');
      } else {
        setScrollState('default');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  const navClasses = [
    'navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light',
    scrollState === 'scrolled' ? 'scrolled' : '',
    scrollState === 'awake' ? 'scrolled awake' : '',
    scrollState === 'sleep' ? 'scrolled sleep' : ''
  ].filter(Boolean).join(' ');

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={navClasses} id="ftco-navbar">
      <div className="container-fluid px-3 px-md-5">
        <Link className="navbar-brand" to="/">
          Coffee<small>Time</small>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          aria-controls="ftco-nav"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
        >
          <span className="icon-bars mr-2"></span> Menu
        </button>

        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${isCurrent('/') ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${isCurrent('/menu') ? 'active' : ''}`}>
              <Link to="/menu" className="nav-link">Menu</Link>
            </li>
            <li className={`nav-item ${isCurrent('/services') ? 'active' : ''}`}>
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className={`nav-item ${isCurrent('/blog') ? 'active' : ''}`}>
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className={`nav-item ${isCurrent('/about') ? 'active' : ''}`}>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className={`nav-item ${isCurrent('/contact') ? 'active' : ''}`}>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
