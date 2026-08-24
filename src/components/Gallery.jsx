import { motion } from 'framer-motion'

const images = [
  { src: '/gallery-1.jpg', alt: 'TASA members gathered outside campus' },
  { src: '/gallery-2.jpg', alt: 'TASA members holding the TASA banner' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <motion.p
        className="eyebrow eyebrow--center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Moments
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Life Within TASA
      </motion.h2>

      <div className="gallery__grid">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            className="gallery__item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
