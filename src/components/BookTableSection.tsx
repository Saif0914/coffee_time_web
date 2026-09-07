import React from 'react';
import { motion } from 'motion/react';
import { StaggerContainer, StaggerItem } from './ScrollAnimation';

interface BookTableSectionProps {
  showInfoBar?: boolean;
}

export const BookTableSection: React.FC<BookTableSectionProps> = ({ showInfoBar = true }) => {
  if (!showInfoBar) return null;

  return (
    <section className="ftco-intro" style={{ marginTop: 0, position: 'relative', zIndex: 5 }}>
      <div className="container-wrap">
        <div className="wrap d-md-flex align-items-xl-end">
          <div className="info w-100" style={{ width: '100%', padding: '35px 40px' }}>
            <StaggerContainer staggerDelay={0.15} className="row no-gutters">
              <div className="col-md-4 d-flex">
                <StaggerItem yOffset={25} className="d-flex w-100">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="icon"
                  >
                    <span className="icon-phone"></span>
                  </motion.div>
                  <div className="text">
                    <h3>000 (123) 456 7890</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                  </div>
                </StaggerItem>
              </div>
              <div className="col-md-4 d-flex">
                <StaggerItem yOffset={25} className="d-flex w-100">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="icon"
                  >
                    <span className="icon-my_location"></span>
                  </motion.div>
                  <div className="text">
                    <h3>198 West 21th Street</h3>
                    <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                  </div>
                </StaggerItem>
              </div>
              <div className="col-md-4 d-flex">
                <StaggerItem yOffset={25} className="d-flex w-100">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="icon"
                  >
                    <span className="icon-clock-o"></span>
                  </motion.div>
                  <div className="text">
                    <h3>Open Monday-Friday</h3>
                    <p>8:00am - 9:00pm</p>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTableSection;

