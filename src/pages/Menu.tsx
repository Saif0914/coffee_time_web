import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { BookTableSection } from '../components/BookTableSection';
import { ScrollReveal, StaggerContainer, StaggerItem, HoverLift } from '../components/ScrollAnimation';
import { MENU_ITEMS, PRODUCTS } from '../data/mockData';

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'main-dish' | 'drinks' | 'desserts'>('main-dish');

  const starters = MENU_ITEMS.filter((m) => m.category === 'starter');
  const mainDishes = MENU_ITEMS.filter((m) => m.category === 'main-dish');
  const desserts = MENU_ITEMS.filter((m) => m.category === 'desserts');
  const drinks = MENU_ITEMS.filter((m) => m.category === 'drinks');

  const tabProducts = PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <>
      <PageHeader title="Our Menu" breadcrumbs={[{ label: 'Menu' }]} bgImage="images/bg_menu.jpg" />

      <BookTableSection showInfoBar={true} />

      {/* Pricing list */}
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 pb-3">
              <ScrollReveal direction="up">
                <h3 className="mb-5 heading-pricing">Starter</h3>
              </ScrollReveal>
              <StaggerContainer staggerDelay={0.1}>
                {starters.map((item) => (
                  <StaggerItem key={item.id} yOffset={20}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className="pricing-entry d-flex"
                    >
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${item.image})`, borderRadius: '50%' }}
                      ></div>
                      <div className="desc pl-3">
                        <div className="d-flex text align-items-center">
                          <h3>
                            <span>{item.name}</span>
                          </h3>
                          <span className="price">${item.price.toFixed(2)}</span>
                        </div>
                        <div className="d-block">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="col-md-6 mb-5 pb-3">
              <ScrollReveal direction="up">
                <h3 className="mb-5 heading-pricing">Main Dish</h3>
              </ScrollReveal>
              <StaggerContainer staggerDelay={0.1}>
                {mainDishes.map((item) => (
                  <StaggerItem key={item.id} yOffset={20}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className="pricing-entry d-flex"
                    >
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${item.image})`, borderRadius: '50%' }}
                      ></div>
                      <div className="desc pl-3">
                        <div className="d-flex text align-items-center">
                          <h3>
                            <span>{item.name}</span>
                          </h3>
                          <span className="price">${item.price.toFixed(2)}</span>
                        </div>
                        <div className="d-block">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="col-md-6 mb-4 mb-md-0">
              <ScrollReveal direction="up">
                <h3 className="mb-5 heading-pricing">Desserts</h3>
              </ScrollReveal>
              <StaggerContainer staggerDelay={0.1}>
                {desserts.map((item) => (
                  <StaggerItem key={item.id} yOffset={20}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className="pricing-entry d-flex"
                    >
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${item.image})`, borderRadius: '50%' }}
                      ></div>
                      <div className="desc pl-3">
                        <div className="d-flex text align-items-center">
                          <h3>
                            <span>{item.name}</span>
                          </h3>
                          <span className="price">${item.price.toFixed(2)}</span>
                        </div>
                        <div className="d-block">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="col-md-6">
              <ScrollReveal direction="up">
                <h3 className="mb-5 heading-pricing">Drinks</h3>
              </ScrollReveal>
              <StaggerContainer staggerDelay={0.1}>
                {drinks.map((item) => (
                  <StaggerItem key={item.id} yOffset={20}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                      className="pricing-entry d-flex"
                    >
                      <div
                        className="img"
                        style={{ backgroundImage: `url(${item.image})`, borderRadius: '50%' }}
                      ></div>
                      <div className="desc pl-3">
                        <div className="d-flex text align-items-center">
                          <h3>
                            <span>{item.name}</span>
                          </h3>
                          <span className="price">${item.price.toFixed(2)}</span>
                        </div>
                        <div className="d-block">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Products */}
      <section className="ftco-menu mb-5 pb-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <ScrollReveal direction="up" className="col-md-7 heading-section text-center">
              <span className="subheading">Discover</span>
              <h2 className="mb-4">Our Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </ScrollReveal>
          </div>
          <div className="row d-md-flex">
            <div className="col-lg-12 p-md-5">
              <div className="row">
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div
                    className="nav nav-pills justify-content-center"
                    id="v-pills-tab"
                    role="tablist"
                  >
                    <button
                      className={`nav-link ${activeTab === 'main-dish' ? 'active' : ''}`}
                      onClick={() => setActiveTab('main-dish')}
                      style={{ border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    >
                      Main Dish
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'drinks' ? 'active' : ''}`}
                      onClick={() => setActiveTab('drinks')}
                      style={{ border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    >
                      Drinks
                    </button>
                    <button
                      className={`nav-link ${activeTab === 'desserts' ? 'active' : ''}`}
                      onClick={() => setActiveTab('desserts')}
                      style={{ border: 'none', cursor: 'pointer', transition: 'all 0.3s ease' }}
                    >
                      Desserts
                    </button>
                  </div>
                </div>

                <div className="col-md-12 d-flex align-items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className="tab-content w-100"
                    >
                      <StaggerContainer staggerDelay={0.1} className="row">
                        {tabProducts.map((prod) => (
                          <div key={prod.id} className="col-md-4 text-center">
                            <StaggerItem yOffset={25}>
                              <HoverLift liftY={-8} className="menu-wrap">
                                <div
                                  className="menu-img img mb-4"
                                  style={{ backgroundImage: `url(${prod.image})`, borderRadius: '4px' }}
                                ></div>
                                <div className="text">
                                  <h3>{prod.name}</h3>
                                  <p>{prod.description}</p>
                                  <p className="price">
                                    <span>${prod.price.toFixed(2)}</span>
                                  </p>
                                </div>
                              </HoverLift>
                            </StaggerItem>
                          </div>
                        ))}
                      </StaggerContainer>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
