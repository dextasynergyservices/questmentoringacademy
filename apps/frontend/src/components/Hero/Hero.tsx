"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import styles from "./Hero.module.css";

export default function Hero({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.hero}>
      <div className={styles.headerWrapper}>{children}</div>
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        navigation={{
          nextEl: ".nextEl",
          prevEl: ".prevEl",
        }}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.heroSlideBackground}
            style={{ backgroundImage: "url(/slider-1.png)" }}
          />
          <div className={styles.heroSlideContentWrapper}>
            <div className={styles.heroSlideContent}>
              <h1>
                We <span>Inspire</span> Transformation!
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.heroSlideBackground}
            style={{ backgroundImage: "url(/slider-2.png)" }}
          />
          <div className={styles.heroSlideContentWrapper}>
            <div className={styles.heroSlideContent}>
              <h1>
                A Journey to <span>Unlock</span> Potentials!
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
          <div
            className={styles.heroSlideBackground}
            style={{ backgroundImage: "url(/slider-3.png)" }}
          />
          <div className={styles.heroSlideContentWrapper}>
            <div className={styles.heroSlideContent}>
              <h1>
                Get your <span>Education</span> today!
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <div
          className={`${styles.swiperNavButton} ${styles.swiperNavButtonLeft} prevEl`}
        >
          <span>prev</span>
        </div>
        <div
          className={`${styles.swiperNavButton} ${styles.swiperNavButtonRight} nextEl`}
        >
          <span>next</span>
        </div>
      </Swiper>

      <div className={styles.heroBoxes}>
        <div className={styles.heroBoxesInner}>
          <div className={styles.heroBox}>
            <div className={styles.heroBoxContent}>
              <h2 className={styles.heroBoxTitle}>Our Mission</h2>
              <p>
                Our mission is to empower individuals, organizations, and
                businesses through high-quality educational services, expert
                training programs, and impactful management consulting.
              </p>
            </div>
          </div>

          <div className={styles.heroBox}>
            <div className={styles.heroBoxContent}>
              <h2 className={styles.heroBoxTitle}>Our Values</h2>
              <p>
                We are driven by competence, confidence, and character—ensuring
                excellence, innovation, and impact in education, training, and
                consulting.
              </p>
            </div>
          </div>

          <div className={styles.heroBox}>
            <div className={styles.heroBoxContent}>
              <h2 className={styles.heroBoxTitle}>Our Vision</h2>
              <p>
                Our vision is to be a leading provider of comprehensive
                educational services, training, and management consulting,
                recognized for our commitment to excellence and transformative
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
