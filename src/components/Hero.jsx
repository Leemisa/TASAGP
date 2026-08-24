import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" style={{ backgroundImage: 'url(/gallery-2.jpg)' }} />
      <div className="hero__overlay" />

      <motion.div
        className="hero__glow"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero__content">
        <motion.img
          src="/logo.png"
          alt="TASA crest"
          className="hero__crest"
          initial={{ opacity: 0, y: -30, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />

        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          TASA &mdash; Gauteng
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          Evolution Through Christ
        </motion.h1>

        <motion.p
          className="hero__lede"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          A community of students across Gauteng's leading universities,
          growing in faith, fellowship and purpose.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
        >
          <a href="#about" className="btn btn--primary">Discover TASA</a>
          <a href="#contact" className="btn btn--ghost">Get Involved</a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span />
      </motion.div>
    </section>
  )
}
