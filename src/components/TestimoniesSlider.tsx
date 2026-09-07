import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimation';

export const TestimoniesSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="ftco-section img"
      id="ftco-testimony"
      style={{ backgroundImage: 'url(images/coffee_hero_2.jpg)' }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center mb-5">
          <ScrollReveal direction="up" className="col-md-7 heading-section text-center">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Customers Says</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </ScrollReveal>
        </div>
      </div>
      <div className="container-wrap">
        <StaggerContainer staggerDelay={0.12} className="row d-flex no-gutters justify-content-center">
          {TESTIMONIALS.map((item, index) => {
            const isCurrent = index === activeIndex;
            return (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 align-self-sm-end p-3"
              >
                <StaggerItem yOffset={25} className="h-100">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    animate={{
                      backgroundColor: isCurrent ? 'rgba(196, 155, 99, 0.18)' : 'rgba(0,0,0,0.4)',
                      borderColor: isCurrent ? '#c49b63' : 'rgba(255,255,255,0.08)',
                      scale: isCurrent ? 1.02 : 1
                    }}
                    transition={{ duration: 0.4 }}
                    className="testimony"
                    style={{
                      border: '1px solid',
                      padding: '30px',
                      borderRadius: '4px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <blockquote>
                      <p>&ldquo;{item.quote}&rdquo;</p>
                    </blockquote>
                    <div className="author d-flex mt-4">
                      <div className="image mr-3 align-self-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="name align-self-center">
                        {item.name} <span className="position">{item.role}</span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              </div>
            );
          })}
        </StaggerContainer>

        {/* Carousel Dots */}
        <div className="d-flex justify-content-center mt-4">
          {TESTIMONIALS.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                width: idx === activeIndex ? 26 : 10,
                backgroundColor: idx === activeIndex ? '#c49b63' : 'rgba(255,255,255,0.4)'
              }}
              transition={{ duration: 0.3 }}
              style={{
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                margin: '0 6px',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
