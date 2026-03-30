/**
 * AppProducts
 *
 * Home-page product preview section.
 */

import ProductShowcase from '@/components/site/ProductShowcase'
import SectionHeading from '@/components/site/SectionHeading'

export default function AppProducts() {
  return (
    <div id="apps" className="section">
      <SectionHeading title="What We Build." />
      <ProductShowcase
        summary="Our teams and apps span accessibility, education, and personal finance, serving students, communities, and real users in different ways."
      />
    </div>
  )
}
