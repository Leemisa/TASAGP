import { motion } from 'framer-motion'
import { universities } from '../data/universities'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Affiliates() {
  return (
    <section id="affiliates" className="affiliates">
      <motion.p
        className="eyebrow eyebrow--center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Reach
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Affiliated Across Gauteng
      </motion.h2>
      <motion.p
        className="affiliates__lede"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        TASA chapters are active at six leading universities, uniting students
        in Christ across the province.
      </motion.p>

      <motion.div
        className="affiliates__grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {universities.map((u) => (
          <motion.div
            key={u.code}
            className="affiliate-card"
            variants={card}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(11,29,81,0.25)' }}
          >
            <span className="affiliate-card__code">{u.code}</span>
            <span className="affiliate-card__name">{u.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
