import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid">
        <motion.div
          className="about__image-wrap"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="/gallery-1.jpg" alt="TASA members gathered outside campus" />
        </motion.div>

        <motion.div
          className="about__copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>Who We Are</motion.p>
          <motion.h2 variants={fadeUp}>
            The Twelve Apostles&rsquo; Students Association
          </motion.h2>
          <motion.p className="about__text" variants={fadeUp}>
            We, the Twelve Apostles&rsquo; Students Association, embrace freedom of
            religion and diversity in our association based on Christianity,
            Creed and Theory; upholding the belief and doctrine that TASA is
            unified in diversity. We adopt our constitution as a mandate to
            reconcile differences based on love, race, creed and theory &mdash;
            embracing a prosperous nation free of malpractice, one that
            breeds an everlasting kingdom of human wellness.
          </motion.p>
          <motion.p className="about__text" variants={fadeUp}>
            We assume a proactive, obedient and faithful role as the
            mouthpiece of the Christian gospel &mdash; devoting ourselves to
            empowering communities through capacity building, optimising
            students&rsquo; potential, and producing globally competitive
            graduates for our society.
          </motion.p>
          <motion.p className="about__text about__text--verse" variants={fadeUp}>
            &ldquo;Let there be light, and that light may it be through
            Christ, our Lord.&rdquo;
          </motion.p>

          <motion.div className="about__stats" variants={fadeUp}>
            <div>
              <span className="about__stat-number">6</span>
              <span>Affiliated Universities</span>
            </div>
            <div>
              <span className="about__stat-number">1</span>
              <span>Shared Mission</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
