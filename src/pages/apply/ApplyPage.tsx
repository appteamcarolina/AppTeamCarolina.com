import { useMemo, useState } from 'react'
import { roles } from '../../data/content'
import Layout from '../../components/Layout'
import { ApplyBackgroundPaths } from '@/components/ui/background-paths-variants'
import { PlaceCard } from '@/components/ui/card-22'
import { Search } from 'lucide-react'
import Reveal from '@/components/site/Reveal'
import PageHero from '@/components/site/PageHero'

const filters = ['All', 'Learning', 'Production', 'Design', 'Developer'] as const
const applicationsOpen = true

function getRoleTags(role: (typeof roles)[number]) {
  const tags: string[] = []

  if (role.title.includes('Bootcamp')) tags.push('No experience necessary')
  else if (role.title.includes('Apprenticeship')) tags.push('Some experience expected')
  else tags.push('Some experience expected')

  if (role.title.includes('Designer') || role.title.includes('UI/UX')) tags.push('Design focused')
  else if (role.title.includes('Developer') || role.title.includes('Backend') || role.title.includes('iOS')) tags.push('Builder focused')
  else if (role.title.includes('Marketing')) tags.push('Storytelling focused')
  else tags.push('Cross-functional')

  return tags
}

export default function ApplyPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All')
  const [query, setQuery] = useState('')

  const filteredRoles = useMemo(() => {
    return roles.filter((role) => {
      const matchesFilter =
        activeFilter === 'All' ||
        (activeFilter === 'Learning' && role.label === 'Learning') ||
        (activeFilter === 'Production' && role.label === 'Production') ||
        (activeFilter === 'Design' && (role.title.includes('Design') || role.title.includes('UI/UX'))) ||
        (activeFilter === 'Developer' && (role.title.includes('Developer') || role.title.includes('Backend') || role.title.includes('iOS') || role.title.includes('Web')))

      const haystack = `${role.title} ${role.subtitle ?? ''} ${role.description} ${role.requirements.join(' ')}`.toLowerCase()
      const matchesQuery = query.trim() === '' || haystack.includes(query.toLowerCase())

      return matchesFilter && matchesQuery
    })
  }, [activeFilter, query])

  return (
    <Layout>
      <PageHero
        eyebrow="Apply · Seasonal Update"
        title="Fall applications are now closed."
        description="We are not accepting Fall applications right now, but we will be looking for thoughtful builders, designers, and collaborators again in the Spring. Feel free to read through the role descriptions to see what might be a good fit or catch your eye."
        background={<div className="absolute inset-0"><ApplyBackgroundPaths /></div>}
        className="apply-page-hero relative overflow-hidden"
        contentStyle={{ padding: 'calc(var(--section-v) + 56px) var(--gutter) calc(var(--section-v) - 6px)' }}
      >
        <Reveal delay={0.5} className="apply-season-note" y={18}>
          <div className="apply-season-note__pill">Applications reopen in the Spring</div>
        </Reveal>
      </PageHero>

      <div className="section">
        <div className="section-content">
          <Reveal className="apply-controls">
            <div className="apply-search apply-search--disabled" aria-disabled="true">
              <Search className="apply-search__icon h-4 w-4" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search roles, skills, or teams"
                className="apply-search__input"
                disabled={!applicationsOpen}
              />
            </div>

            <div className="apply-filter-row">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? 'apply-filter-chip apply-filter-chip--active' : 'apply-filter-chip'}
                  disabled={!applicationsOpen}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="apply-results-meta">
              <span className="apply-results-meta__pill">{filteredRoles.length} roles</span>
            </div>
          </Reveal>

          <div className="apply-role-grid">
            {filteredRoles.map((role, index) => (
              <Reveal key={role.title} delay={index * 0.04}>
                <PlaceCard
                  title={role.title}
                  subtitle={role.subtitle}
                  label={role.label}
                  description={role.description}
                  requirements={role.requirements}
                  applyUrl={role.applyUrl}
                  applyLabel={role.applyLabel}
                  applicationsOpen={applicationsOpen}
                  tags={getRoleTags(role)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
