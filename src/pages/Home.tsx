import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { HeroSlider } from '../components/HeroSlider';
import { BookTableSection } from '../components/BookTableSection';
import { CounterSection } from '../components/CounterSection';
import { GallerySection } from '../components/GallerySection';
import { TestimoniesSlider } from '../components/TestimoniesSlider';
import { ScrollReveal, StaggerContainer, StaggerItem, HoverLift } from '../components/ScrollAnimation';
import { PRODUCTS, MENU_ITEMS, BLOG_POSTS } from '../data/mockData';

export const Home: React.FC = () => {
  const bestSellers = PRODUCTS.slice(0, 4);
  const recentBlogs = BLOG_POSTS.slice(0, 3);

  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    phone: '',
    message: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.firstName || !bookingData.phone) {
      alert('Please provide your name and phone number to reserve a table.');
      return;
    }
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingData({
        firstName: '',
        lastName: '',
        date: '',
        time: '',
        phone: '',
        message: ''
      });
    }, 4500);
  };

  // Group menu highlights
  const starters = MENU_ITEMS.filter((m) => m.category === 'starter').slice(0, 3);
  const mainDishes = MENU_ITEMS.filter((m) => m.category === 'main-dish').slice(0, 3);
  const desserts = MENU_ITEMS.filter((m) => m.category === 'desserts').slice(0, 3);
  const drinks = MENU_ITEMS.filter((m) => m.category === 'drinks').slice(0, 3);

  return (
    <>
      {/* 1. Home Slider */}
      <HeroSlider />

      {/* 2. Intro Bar & Book a Table */}
      <BookTableSection showInfoBar={true} />

      {/* 3. Discover Our Story */}
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

      {/* 4. Services */}
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

      {/* 5. Discover Our Menu Section */}
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

      {/* 6. Counters */}
      <CounterSection />

      {/* 7. Best Coffee Sellers */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <ScrollReveal direction="up" className="col-md-7 heading-section text-center">
              <span className="subheading">Discover</span>
              <h2 className="mb-4">Best Coffee Sellers</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer staggerDelay={0.12} className="row">
            {bestSellers.map((prod) => (
              <div key={prod.id} className="col-md-3">
                <StaggerItem yOffset={30}>
                  <HoverLift liftY={-8} className="menu-entry h-100">
                    <Link
                      to="/menu"
                      className="img"
                      style={{ backgroundImage: `url(${prod.image})`, borderRadius: '4px' }}
                    ></Link>
                    <div className="text text-center pt-4">
                      <h3>
                        <Link to="/menu">{prod.name}</Link>
                      </h3>
                      <p>{prod.description}</p>
                      <p className="price">
                        <span>${prod.price.toFixed(2)}</span>
                      </p>
                      <p>
                        <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                          <Link to="/menu" className="btn btn-primary btn-outline-primary">
                            View Details
                          </Link>
                        </motion.span>
                      </p>
                    </div>
                  </HoverLift>
                </StaggerItem>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. Gallery */}
      <GallerySection />

      {/* 9. Discover Menu Highlight Grid (Starters, Main, Desserts, Drinks) */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <ScrollReveal direction="up" className="col-md-7 heading-section text-center">
              <span className="subheading">Discover</span>
              <h2 className="mb-4">Our Products</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </ScrollReveal>
          </div>
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
                      <div className="img" style={{ backgroundImage: `url(${item.image})`, borderRadius: '50%' }}></div>
                      <div className="desc pl-3">
                        <div className="d-flex text align-items-center">
                          <h3><span>{item.name}</span></h3>
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
                      <div className="img" style={{ backgroundImage: `url(${item.image})`, borderRadius: '50%' }}></div>
                      <div className="desc pl-3">
                        <div className="d-flex text align-items-center">
                          <h3><span>{item.name}</span></h3>
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
                      <div className="img" style={{ backgroundImage: `url(${item.image})`, borderRadius: '50%' }}></div>
                      <div className="desc pl-3">
                        <div className="d-flex text align-items-center">
                          <h3><span>{item.name}</span></h3>
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
                      <div className="img" style={{ backgroundImage: `url(${item.image})`, borderRadius: '50%' }}></div>
                      <div className="desc pl-3">
                        <div className="d-flex text align-items-center">
                          <h3><span>{item.name}</span></h3>
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

      {/* 10. Testimonies */}
      <TestimoniesSlider />

      {/* 11. Recent from blog */}
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <ScrollReveal direction="up" className="col-md-7 heading-section text-center">
              <span className="subheading">Recent from blog</span>
              <h2 className="mb-4">The Blog</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer staggerDelay={0.15} className="row d-flex">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="col-md-4 d-flex">
                <StaggerItem yOffset={30} className="w-100">
                  <HoverLift liftY={-8} className="blog-entry align-self-stretch h-100">
                    <Link
                      to="/blog-single"
                      className="block-20"
                      style={{ backgroundImage: `url(${blog.image})`, borderRadius: '4px' }}
                    ></Link>
                    <div className="text py-4 d-block">
                      <div className="meta">
                        <div>
                          <Link to="/blog-single">{blog.date}</Link>
                        </div>
                        <div>
                          <Link to="/blog-single">{blog.author}</Link>
                        </div>
                        <div>
                          <Link to="/blog-single" className="meta-chat">
                            <span className="icon-chat"></span> {blog.commentsCount}
                          </Link>
                        </div>
                      </div>
                      <h3 className="heading mt-2">
                        <Link to="/blog-single">{blog.title}</Link>
                      </h3>
                      <p>{blog.excerpt}</p>
                    </div>
                  </HoverLift>
                </StaggerItem>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 12. Book a Table (Appointment Section at the bottom) */}
      <section className="ftco-appointment">
        <div className="overlay"></div>
        <div className="container-wrap">
          <div className="row no-gutters d-md-flex align-items-center">
            <ScrollReveal direction="right" className="col-md-6 d-flex align-self-stretch">
              <div
                style={{
                  width: '100%',
                  minHeight: '450px',
                  backgroundImage: 'url(images/about.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="col-md-6 appointment p-4 p-md-5">
              <h3 className="mb-3">Book a Table</h3>
              {bookingSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="alert alert-success p-3 my-3"
                  style={{ background: '#c49b63', color: '#fff', border: 'none' }}
                >
                  <span className="icon icon-check mr-2"></span>
                  Thank you, {bookingData.firstName}! Your reservation request has been received. We will confirm shortly.
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="appointment-form">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        name="firstName"
                        value={bookingData.firstName}
                        onChange={handleBookingChange}
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="text"
                        name="lastName"
                        value={bookingData.lastName}
                        onChange={handleBookingChange}
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <div className="input-wrap">
                        <div className="icon">
                          <span className="ion-md-calendar"></span>
                        </div>
                        <input
                          type="date"
                          name="date"
                          value={bookingData.date}
                          onChange={handleBookingChange}
                          className="form-control appointment_date"
                          placeholder="Date"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <div className="input-wrap">
                        <div className="icon">
                          <span className="ion-ios-clock"></span>
                        </div>
                        <input
                          type="time"
                          name="time"
                          value={bookingData.time}
                          onChange={handleBookingChange}
                          className="form-control appointment_time"
                          placeholder="Time"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleBookingChange}
                        className="form-control"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <textarea
                        name="message"
                        value={bookingData.message}
                        onChange={handleBookingChange}
                        cols={30}
                        rows={2}
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-group ml-md-4">
                      <motion.input
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        value="Appointment"
                        className="btn btn-primary py-3 px-4"
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};
