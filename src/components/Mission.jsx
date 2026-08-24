import { motion } from 'framer-motion'

const pillars = [
  { label: 'Spiritual', desc: 'Growing faith through worship and discipleship.' },
  { label: 'Social', desc: 'Building community and lasting fellowship.' },
  { label: 'Economic', desc: 'Equipping students with capacity-building skills.' },
  { label: 'Health', desc: 'Nurturing holistic wellbeing on campus.' },
  { label: 'Academic', desc: 'Producing globally competitive graduates.' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Mission() {
  return (
    <section id="mission" className="mission">
      <motion.p
        className="eyebrow eyebrow--center eyebrow--light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Our Mission
      </motion.p>
      <motion.h2
        className="section-title section-title--light"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Evolution Through Christ
      </motion.h2>
      <motion.p
        className="mission__lede"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        We aim to be the mass-based Christian association of choice in
        institutions of higher learning &mdash; a value-adding association
        providing comprehensive spiritual, social, economic, health and
        academic development to students, communities and stakeholders
        wherever TASA exists.
      </motion.p>

      <motion.div
        className="mission__grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {pillars.map((p) => (
          <motion.div
            key={p.label}
            className="pillar-card"
            variants={item}
            whileHover={{ y: -6, borderColor: 'rgba(176,32,42,0.6)' }}
          >
            <span className="pillar-card__label">{p.label}</span>
            <span className="pillar-card__desc">{p.desc}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
