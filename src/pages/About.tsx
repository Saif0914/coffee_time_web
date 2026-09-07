import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { CounterSection } from '../components/CounterSection';
import { TestimoniesSlider } from '../components/TestimoniesSlider';
import { ScrollReveal, StaggerContainer, StaggerItem, HoverLift } from '../components/ScrollAnimation';

export const About: React.FC = () => {
  return (
    <>
      <PageHeader title="About Us" breadcrumbs={[{ label: 'About' }]} noBanner={true} />

      {/* Discover Our Story */}
      <section className="ftco-about d-md-flex">
        <ScrollReveal direction="right" className="one-half img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
        <ScrollReveal direction="left" className="one-half">
          <div className="overlap">
            <div className="heading-section">
              <span className="subheading">Discover</span>
              <h2 className="mb-4">Our Story</h2>
            </div>
            <div>
              <p>
                On her way she met a copy. The copy warned the Little Blind Text, that where it came
                from it would have been rewritten a thousand times and everything that was left from
                its origin would be the word &quot;and&quot; and the Little Blind Text should turn around
                and return to its own, safe country. But nothing the copy said could convince her and
                so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk
                with Longe and Parole and dragged her into their agency, where they abused her for their.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Menu highlight preview */}
      <section className="ftco-section">
        <div className="container">
          <div className="row align-items-center">
            <ScrollReveal direction="right" className="col-md-6 pr-md-5">
              <div className="heading-section text-md-right">
                <span className="subheading">Discover</span>
                <h2 className="mb-4">Our Menu</h2>
                <p className="mb-4">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                <p>
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                    <Link to="/menu" className="btn btn-primary btn-outline-primary px-4 py-3">
                      View Full Menu
                    </Link>
                  </motion.span>
                </p>
              </div>
            </ScrollReveal>
            <div className="col-md-6">
              <StaggerContainer staggerDelay={0.12} className="row">
                <div className="col-md-6">
                  <StaggerItem yOffset={25}>
                    <HoverLift liftY={-6} className="menu-entry">
                      <Link
                        to="/menu"
                        className="img"
                        style={{ backgroundImage: 'url(images/menu-1.jpg)', borderRadius: '4px' }}
                      ></Link>
                    </HoverLift>
                  </StaggerItem>
                </div>
                <div className="col-md-6">
                  <StaggerItem yOffset={25}>
                    <HoverLift liftY={-6} className="menu-entry mt-lg-4">
                      <Link
                        to="/menu"
                        className="img"
                        style={{ backgroundImage: 'url(images/menu-2.jpg)', borderRadius: '4px' }}
                      ></Link>
                    </HoverLift>
                  </StaggerItem>
                </div>
                <div className="col-md-6">
                  <StaggerItem yOffset={25}>
                    <HoverLift liftY={-6} className="menu-entry">
                      <Link
                        to="/menu"
                        className="img"
                        style={{ backgroundImage: 'url(images/menu-3.jpg)', borderRadius: '4px' }}
                      ></Link>
                    </HoverLift>
                  </StaggerItem>
                </div>
                <div className="col-md-6">
                  <StaggerItem yOffset={25}>
                    <HoverLift liftY={-6} className="menu-entry mt-lg-4">
                      <Link
                        to="/menu"
                        className="img"
                        style={{ backgroundImage: 'url(images/menu-4.jpg)', borderRadius: '4px' }}
                      ></Link>
                    </HoverLift>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <TestimoniesSlider />

      {/* Counters */}
      <CounterSection />
    </>
  );
};
