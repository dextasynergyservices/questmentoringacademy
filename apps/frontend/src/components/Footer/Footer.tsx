import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import "../../app/styles/responsive.css";
import {
  FaPinterest,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <h2 className={styles.sectionTitle}>Subscribe to newsletter</h2>
        <form className={styles.newsletterForm}>
          <input
            type="email"
            required
            placeholder="Email Address"
            className={styles.newsletterInput}
          />
          <button type="submit" className={styles.newsletterButton}>
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Content */}
      <div className={styles.footerContent}>
        {/* About */}
        <div>
          <Image
            src="/questnewlogo2.png"
            alt="Quest Logo"
            width={150}
            height={96}
            className={styles.logoImage}
          />
          <p className={styles.aboutText}>
            We are driven by competence, confidence, and character—ensuring
            excellence, innovation, and impact in education, training, and
            consulting.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className={styles.columnTitle}>Menu</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href="/">
                Home
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href="/about">
                About Us
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href="/courses">
                Courses
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href="/news">
                News
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listLink} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className={styles.columnTitle}>Useful Links</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a className={styles.listLink} href="#">
                Testimonials
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listLink} href="#">
                FAQ
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listLink} href="#">
                Community
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listLink} href="#">
                Campus Pictures
              </a>
            </li>
            <li className={styles.listItem}>
              <a className={styles.listLink} href="#">
                Tuitions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className={styles.columnTitle}>Contact</h3>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              16, Probyn Road, Friends Colony Estate, Agungi, Lekki, Lagos,
              Nigeria
            </li>
            <li className={styles.contactItem}>+234 803 664 9286</li>
            <li className={styles.contactItem}>info@questbusinessschool.org</li>
          </ul>
        </div>
      </div>

      {/* Footer Bar */}
      <div className={styles.footerBar}>
        <span>
          &copy; {new Date().getFullYear()} All rights reserved | Quest Business
          School
        </span>
        <div className={styles.socialIcons}>
          <a className={styles.socialLink} href="#">
            <FaPinterest />
          </a>
          <a className={styles.socialLink} href="#">
            <FaLinkedinIn />
          </a>
          <a className={styles.socialLink} href="#">
            <FaInstagram />
          </a>
          <a className={styles.socialLink} href="#">
            <FaFacebookF />
          </a>
          <a className={styles.socialLink} href="#">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
