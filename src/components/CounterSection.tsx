import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { StaggerContainer, StaggerItem } from './ScrollAnimation';

interface CounterItem {
  icon: string;
  target: number;
  label: string;
}

const COUNTERS: CounterItem[] = [
  { icon: 'flaticon-coffee-cup', target: 100, label: 'Coffee Branches' },
  { icon: 'flaticon-coffee-cup', target: 85, label: 'Number of Awards' },
  { icon: 'flaticon-coffee-cup', target: 10567, label: 'Happy Customers' },
  { icon: 'flaticon-coffee-cup', target: 900, label: 'Staff' }
];

export const CounterSection: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 2500;
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(COUNTERS.map((c) => Math.floor(easeOut * c.target)));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(COUNTERS.map((c) => c.target));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ftco-counter ftco-bg-dark img"
      id="section-counter"
      style={{ backgroundImage: 'url(images/coffee_hero_3.jpg)' }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <StaggerContainer staggerDelay={0.15} className="row">
              {COUNTERS.map((item, idx) => (
                <div
                  key={idx}
                  className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap"
                >
                  <StaggerItem yOffset={30} className="w-100">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.04 }}
                      transition={{ duration: 0.25 }}
                      className="block-18 text-center"
                    >
                      <div className="text">
                        <motion.div
                          whileHover={{ rotate: 12, scale: 1.15 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="icon"
                        >
                          <span className={item.icon}></span>
                        </motion.div>
                        <strong className="number">
                          {counts[idx].toLocaleString()}
                        </strong>
                        <span>{item.label}</span>
                      </div>
                    </motion.div>
                  </StaggerItem>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
