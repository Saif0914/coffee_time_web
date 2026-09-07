import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const SLIDES = [
  {
    image: 'images/coffee_hero_1.jpg',
    subheading: 'Welcome',
    title: 'The Best Coffee Testing Experience',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    image: 'images/coffee_hero_2.jpg',
    subheading: 'Welcome',
    title: 'Amazing Taste & Beautiful Place',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    image: 'images/coffee_hero_3.jpg',
    subheading: 'Welcome',
    title: 'Creamy Hot and Ready to Serve',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  }
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="home-slider position-relative" style={{ overflow: 'hidden' }}>
      {SLIDES.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`slider-item ${isActive ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              position: index === 0 ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              minHeight: '750px',
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 1s ease-in-out, visibility 1s ease-in-out',
              zIndex: isActive ? 2 : 1
            }}
          >
            <div className="overlay"></div>
            <div className="container" style={{ height: '100%' }}>
              <div
                className="row slider-text justify-content-center align-items-center"
                style={{ height: '100%', minHeight: '750px' }}
              >
                <div className="col-md-8 col-sm-12 text-center">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={`slide-${index}`}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.15 }}
                          className="subheading"
                        >
                          {slide.subheading}
                        </motion.span>
                        <motion.h1
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.25 }}
                          className="mb-4"
                        >
                          {slide.title}
                        </motion.h1>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.35 }}
                          className="mb-4 mb-md-5"
                          style={{ color: '#ffffff' }}
                        >
                          {slide.text}
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.45 }}
                        >
                          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                            <Link to="/contact" className="btn btn-primary p-3 px-xl-4 py-xl-3 mr-2">
                              Book a Table
                            </Link>
                          </motion.span>{' '}
                          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                            <Link to="/menu" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">
                              View Menu
                            </Link>
                          </motion.span>
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slider Controls */}
      <div
        className="d-flex justify-content-between position-absolute"
        style={{
          top: '50%',
          left: '20px',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: 'none',
            color: '#fff',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            cursor: 'pointer',
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s'
          }}
        >
          <span className="ion-md-arrow-back"></span>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: 'none',
            color: '#fff',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            cursor: 'pointer',
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s'
          }}
        >
          <span className="ion-chevron-right"></span>
        </button>
      </div>

      {/* Slide dots */}
      <div
        className="position-absolute d-flex justify-content-center"
        style={{
          bottom: '25px',
          left: 0,
          right: 0,
          zIndex: 10
        }}
      >
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === current ? '24px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: idx === current ? '#c49b63' : 'rgba(255,255,255,0.5)',
              border: 'none',
              margin: '0 5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
};
