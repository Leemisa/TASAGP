import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <motion.div
        className="footer__inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src="/logo.png" alt="TASA logo" className="footer__logo" />
        <h3>Evolution Through Christ</h3>
        <p>
          Join a TASA chapter near you &mdash; Wits, UJ, TUT, UP, VUT or NWU.
        </p>
        <a href="mailto:info@tasagp.org" className="btn btn--primary">
          Get In Touch
        </a>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} TASA Gauteng. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
