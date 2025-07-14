'use client';

import React, { ReactNode } from 'react';
import styles from './ContactHero.module.css';

type ContactHeroProps = {
  children?: ReactNode;
};

const ContactHero = ({ children }: ContactHeroProps) => {
  return (
    <>
       {/* Hero Section */}
       <div className={styles.home}>
        <div
          className={styles.home_background}
          style={{
            backgroundImage: "url('/contact_background.jpg')",
          }}
        >
          <div className={styles.home_content}>
            <h1>Contact</h1>
          </div>
        </div>
      </div>

      {/* Optional Children Section */}
      {children}

      {/* Contact Section */}
      <div className={styles.contact}>
        <div className={styles.contact_wrapper}>
          
          {/* Contact Form Section */}
          <div className={styles.contact_info_section}>
            <div className="contact_form">
              <div className={styles.contact_title}>Get in touch</div>
              <div className={styles.contact_form_container}>
                <form action="post">
                  <input
                    id="contact_form_name"
                    className={`input_field contact_form_name ${styles.input_field}`}
                    type="text"
                    placeholder="Name"
                    required
                    data-error="Name is required."
                  />
                  <input
                    id="contact_form_email"
                    className={`input_field contact_form_email ${styles.input_field}`}
                    type="email"
                    placeholder="E-mail"
                    required
                    data-error="Valid email is required."
                  />
                  <textarea
                    id="contact_form_message"
                    className={`text_field contact_form_message ${styles.text_field}`}
                    name="message"
                    placeholder="Message"
                    required
                    data-error="Please, write us a message."
                  ></textarea>
                  <button
                    id="contact_send_btn"
                    type="button"
                    className={`contact_send_btn trans_200 ${styles.contact_send_btn}`}
                  >
                    send message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className={styles.contact_info_section}>
            <div className="about">
              <div className={styles.about_title}>Join Us</div>
              <p className={styles.about_text}>
                We are driven by competence, confidence, and character—ensuring
                excellence, innovation, and impact in education, training, and consulting.
              </p>
              <div className={styles.contact_info}>
                <ul>
                  <li className={styles.contact_info_item}>
                    <div className={styles.contact_info_icon}>
                      <img src="/placeholder.svg" alt="location icon" />
                    </div>
                    16, Probyn Road, Friends Colony Estate, Agungi, Lekki, Lagos, Nigeria
                  </li>
                  <li className={styles.contact_info_item}>
                    <div className={styles.contact_info_icon}>
                      <img src="/smartphone.svg" alt="phone icon" />
                    </div>
                    ‪+234 803 664 9286‬
                  </li>
                  <li className={styles.contact_info_item}>
                    <div className={styles.contact_info_icon}>
                      <img src="/envelope.svg" alt="email icon" />
                    </div>
                    info@questbusinessschool.org
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div id="google_map">
        <div className="map_container">
          <div id="map"></div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
