import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="ftco-footer ftco-section img">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About Us</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animated">
                  <a href="#twitter" aria-label="Twitter">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="ftco-animated">
                  <a href="#facebook" aria-label="Facebook">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animated">
                  <a href="#instagram" aria-label="Instagram">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              <div className="block-21 mb-4 d-flex">
                <Link
                  to="/blog-single"
                  className="blog-img mr-4"
                  style={{ backgroundImage: 'url(images/image_1.jpg)' }}
                ></Link>
                <div className="text">
                  <h3 className="heading">
                    <Link to="/blog-single">
                      Even the all-powerful Pointing has no control about
                    </Link>
                  </h3>
                  <div className="meta">
                    <div>
                      <Link to="/blog-single">
                        <span className="icon-calendar"></span> Sept 15, 2018
                      </Link>
                    </div>
                    <div>
                      <Link to="/blog-single">
                        <span className="icon-person"></span> Admin
                      </Link>
                    </div>
                    <div>
                      <Link to="/blog-single">
                        <span className="icon-chat"></span> 19
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-21 mb-4 d-flex">
                <Link
                  to="/blog-single"
                  className="blog-img mr-4"
                  style={{ backgroundImage: 'url(images/image_2.jpg)' }}
                ></Link>
                <div className="text">
                  <h3 className="heading">
                    <Link to="/blog-single">
                      Even the all-powerful Pointing has no control about
                    </Link>
                  </h3>
                  <div className="meta">
                    <div>
                      <Link to="/blog-single">
                        <span className="icon-calendar"></span> Sept 15, 2018
                      </Link>
                    </div>
                    <div>
                      <Link to="/blog-single">
                        <span className="icon-person"></span> Admin
                      </Link>
                    </div>
                    <div>
                      <Link to="/blog-single">
                        <span className="icon-chat"></span> 19
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/services" className="py-2 d-block">Specialty Selection</Link>
                </li>
                <li>
                  <Link to="/services" className="py-2 d-block">Freshly Brewed</Link>
                </li>
                <li>
                  <Link to="/services" className="py-2 d-block">Quality Coffee</Link>
                </li>
                <li>
                  <Link to="/services" className="py-2 d-block">Table Reservations</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">
                      742 Evergreen Terrace, San Francisco, California 94102, USA
                    </span>
                  </li>
                  <li>
                    <a href="tel://1234567920">
                      <span className="icon icon-phone"></span>
                      <span className="text">+1 111 1111 111</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@yourdomain.com">
                      <span className="icon icon-envelope"></span>
                      <span className="text">info@yourdomain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
