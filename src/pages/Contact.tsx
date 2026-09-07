import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollAnimation';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <>
      <PageHeader title="Contact Us" breadcrumbs={[{ label: 'Contact' }]} noBanner={true} />

      <section className="ftco-section contact-section" style={{ padding: '4em 0 7em' }}>
        <div className="container">
          <div
            className="p-4 p-md-5"
            style={{
              backgroundColor: 'rgba(18, 14, 13, 0.82)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: '1px solid rgba(196, 155, 99, 0.28)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65)'
            }}
          >
            <div className="row block-9 align-items-center">
              <ScrollReveal direction="right" className="col-md-5 contact-info pr-md-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h2
                      className="h4"
                      style={{
                        color: '#ffffff',
                        fontSize: '26px',
                        fontWeight: 600,
                        borderBottom: '2px solid #c49b63',
                        paddingBottom: '12px',
                        display: 'inline-block'
                      }}
                    >
                      Contact Information
                    </h2>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p style={{ color: '#ffffff', fontSize: '15px' }}>
                      <span style={{ color: '#c49b63', fontWeight: 600, marginRight: '8px' }}>Address:</span>
                      198 West 21th Street, Suite 721 New York NY 10016
                    </p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p style={{ color: '#ffffff', fontSize: '15px' }}>
                      <span style={{ color: '#c49b63', fontWeight: 600, marginRight: '8px' }}>Phone:</span>
                      <a href="tel://1235235598" style={{ color: '#ffffff', textDecoration: 'none' }}>+ 1235 2355 98</a>
                    </p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p style={{ color: '#ffffff', fontSize: '15px' }}>
                      <span style={{ color: '#c49b63', fontWeight: 600, marginRight: '8px' }}>Email:</span>
                      <a href="mailto:info@yoursite.com" style={{ color: '#c49b63', textDecoration: 'none' }}>info@yoursite.com</a>
                    </p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p style={{ color: '#ffffff', fontSize: '15px' }}>
                      <span style={{ color: '#c49b63', fontWeight: 600, marginRight: '8px' }}>Website:</span>
                      <a href="#website" style={{ color: '#c49b63', textDecoration: 'none' }}>yoursite.com</a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="col-md-1 d-none d-md-block" style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)', height: '320px' }}></div>

              <ScrollReveal direction="left" className="col-md-6 pl-md-4">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="alert alert-success p-4 text-center"
                    style={{ background: '#c49b63', color: '#fff', border: 'none', borderRadius: '8px' }}
                  >
                    <span className="icon icon-check-circle mr-2"></span>
                    Thank you, {form.name}! Your message has been sent successfully. We will get back to you shortly.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.08)',
                              border: '1px solid rgba(255, 255, 255, 0.16)',
                              borderRadius: '8px',
                              padding: '12px 16px',
                              color: '#ffffff'
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.08)',
                              border: '1px solid rgba(255, 255, 255, 0.16)',
                              borderRadius: '8px',
                              padding: '12px 16px',
                              color: '#ffffff'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          color: '#ffffff'
                        }}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <textarea
                        cols={30}
                        rows={5}
                        className="form-control"
                        placeholder="Message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '8px',
                          padding: '12px 16px',
                          color: '#ffffff'
                        }}
                      ></textarea>
                    </div>
                    <div className="form-group mb-0">
                      <motion.input
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary py-3 px-5"
                        style={{
                          cursor: 'pointer',
                          borderRadius: '8px',
                          fontWeight: 600,
                          letterSpacing: '1px',
                          textTransform: 'uppercase'
                        }}
                      />
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
