import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { StaggerContainer, StaggerItem, HoverLift } from '../components/ScrollAnimation';

export const Services: React.FC = () => {
  return (
    <>
      <PageHeader title="Services" breadcrumbs={[{ label: 'Services' }]} bgImage="images/bg_services.jpg" />

      <section className="ftco-section ftco-services">
        <div className="container">
          <StaggerContainer staggerDelay={0.15} className="row">
            <div className="col-md-4">
              <StaggerItem yOffset={30}>
                <HoverLift liftY={-8} className="media d-block text-center block-6 services">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="icon d-flex justify-content-center align-items-center mb-5"
                  >
                    <span className="flaticon-choices"></span>
                  </motion.div>
                  <div className="media-body">
                    <h3 className="heading">Specialty Selection</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                  </div>
                </HoverLift>
              </StaggerItem>
            </div>
            <div className="col-md-4">
              <StaggerItem yOffset={30}>
                <HoverLift liftY={-8} className="media d-block text-center block-6 services">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="icon d-flex justify-content-center align-items-center mb-5"
                  >
                    <span className="flaticon-coffee-cup"></span>
                  </motion.div>
                  <div className="media-body">
                    <h3 className="heading">Freshly Brewed</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                  </div>
                </HoverLift>
              </StaggerItem>
            </div>
            <div className="col-md-4">
              <StaggerItem yOffset={30}>
                <HoverLift liftY={-8} className="media d-block text-center block-6 services">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="icon d-flex justify-content-center align-items-center mb-5"
                  >
                    <span className="flaticon-coffee-bean"></span>
                  </motion.div>
                  <div className="media-body">
                    <h3 className="heading">Quality Coffee</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the blind texts it is an
                      almost unorthographic.
                    </p>
                  </div>
                </HoverLift>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
};
