import { motion } from 'framer-motion'
import Reveal from '@/components/site/Reveal'
import SectionHeading from '@/components/site/SectionHeading'

type TestimonialAuthor = {
  name: string
  role?: string
}

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

type TestimonialSectionProps = {
  title?: string
  intro?: string
  testimonials?: Testimonial[]
  quote?: string
  authors?: TestimonialAuthor[]
}

export default function TestimonialSection({
  title = 'Why We Do It.',
  intro = 'We built App Team to make serious work feel collaborative, human, and worth caring about.',
  testimonials = [],
  quote,
  authors = [],
}: TestimonialSectionProps) {
  const singleTestimonial = quote && authors.length > 0

  return (
    <section className="section">
      <SectionHeading title={title} />

      <Reveal delay={0.04}>
        <div className="about-founders-message">
          <p>{intro}</p>
        </div>
      </Reveal>

      {singleTestimonial ? (
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="about-testimonial-card about-testimonial-card--single"
        >
          <p className="about-testimonial-quote">“{quote}”</p>
          <footer className="about-testimonial-group-footer">
            <div>
              <cite className="about-testimonial-name">
                {authors.map((author) => author.name).join(', ')}
              </cite>
              <p className="about-testimonial-role">
                Co-Founders
              </p>
            </div>
          </footer>
        </motion.blockquote>
      ) : (
        <div className="about-testimonials">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="about-testimonial-card"
            >
              <p className="about-testimonial-quote">“{item.quote}”</p>
              <footer className="about-testimonial-footer">
                <div>
                  <cite className="about-testimonial-name">{item.name}</cite>
                  <p className="about-testimonial-role">{item.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      )}
    </section>
  )
}
