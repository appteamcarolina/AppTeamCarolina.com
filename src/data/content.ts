// Static content data for App Team Carolina website

export interface Pillar {
  icon: string
  iconAlt: string
  title: string
  text: string
  imageSrc?: string
  imageAlt?: string
  eyebrow?: string
  cardClass?: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface Track {
  label: 'Learning' | 'Production'
  icon: string
  iconAlt: string
  title: string
  text: string
  eyebrow?: string
  badgeLabel?: string
  cardClass?: string
}

export interface App {
  coverSrc: string
  coverAlt: string
  iconSrc: string
  iconAlt: string
  name: string
  started: string
  description: string
  link?: string
  linkLabel?: string
  cardClass?: string
}

export interface Role {
  title: string
  subtitle?: string
  label?: 'Learning' | 'Production'
  description: string
  requirements: string[]
  applyUrl: string
  applyLabel: string
  spacingClass: string
  cardClass?: string
}

export interface Social {
  href: string
  iconSrc: string
  alt: string
  target?: string
}

export interface OrgMember {
  name: string
  role: string
  major?: string
  year?: string
}

export interface OrgTier {
  tier: string
  color: string
  members: OrgMember[]
}

export const orgChart: OrgTier[] = [
  {
    tier: 'Executive',
    color: '#4b8cb8',
    members: [
      { name: 'President',               role: 'President',               major: 'Computer Science', year: 'Senior' },
      { name: 'VP of Operations',        role: 'VP of Operations',        major: 'Information Science', year: 'Junior' },
      { name: 'VP of Product',           role: 'VP of Product',           major: 'Computer Science', year: 'Senior' },
    ],
  },
  {
    tier: 'Production Leads',
    color: '#2f5b79',
    members: [
      { name: 'iOS Lead',                role: 'iOS Development Lead',    major: 'Computer Science', year: 'Junior' },
      { name: 'Backend Lead',            role: 'Backend Lead',            major: 'Computer Science', year: 'Junior' },
      { name: 'Product Management Lead', role: 'PM Lead',                 major: 'Information Science', year: 'Senior' },
      { name: 'Marketing Lead',          role: 'Product Marketing Lead',  major: 'Business', year: 'Junior' },
    ],
  },
  {
    tier: 'Design Leads',
    color: '#3a7a6a',
    members: [
      { name: 'UI/UX Lead',             role: 'UI/UX Design Lead',       major: 'Graphic Design', year: 'Senior' },
      { name: 'Brand Lead',             role: 'Brand & Visual Lead',     major: 'Art & Design', year: 'Junior' },
    ],
  },
  {
    tier: 'Learning Leads',
    color: '#5a4a8a',
    members: [
      { name: 'iOS Bootcamp Lead',       role: 'iOS Bootcamp Lead',       major: 'Computer Science', year: 'Junior' },
      { name: 'UI/UX Bootcamp Lead',     role: 'UI/UX Bootcamp Lead',     major: 'Graphic Design', year: 'Sophomore' },
      { name: 'Apprenticeship Lead',     role: 'Apprenticeship Lead',     major: 'Computer Science', year: 'Junior' },
    ],
  },
]

export interface Executive {
  title: string
  name: string
  major?: string
  year?: string
  initials: string
}

export interface ProductionLead {
  role: string
  name: string
  major?: string
  year?: string
  initials: string
}

export interface ProductionTeam {
  name: string
  type: 'Client' | 'Startup'
  members: number
  semester: string
  apps: { name: string; icon: string }[]
  leads: { name: string }[]
}

export const productionTeams: ProductionTeam[] = [
  {
    name: 'Client Team 1',
    type: 'Client',
    members: 17,
    semester: 'S25',
    apps: [
      { name: 'Cupboard', icon: '/assets/apps/cupboard/cupboard-icon.png' },
      { name: 'Bubbly',   icon: '/assets/apps/bubbly/bubbly-icon.svg' },
    ],
    leads: [{ name: 'Jacob Brown' }, { name: 'Kavya Sriram' }],
  },
  {
    name: 'Client Team 2',
    type: 'Client',
    members: 17,
    semester: 'F25',
    apps: [
      { name: 'Porch', icon: '/assets/apps/porch/porch-icon.png' },
    ],
    leads: [{ name: 'Anisha Kundu' }, { name: 'Ashley Hinostroza' }],
  },
  {
    name: 'Startup Team 1',
    type: 'Startup',
    members: 15,
    semester: 'S25',
    apps: [
      { name: 'Centible', icon: '/assets/apps/centible/centible.png' },
    ],
    leads: [{ name: 'Charlotte Tsui' }, { name: 'Shikha Vyas' }],
  },
  {
    name: 'Startup Team 2',
    type: 'Startup',
    members: 18,
    semester: 'S25',
    apps: [
      { name: 'Luminary', icon: '/assets/apps/luminary/luminary.png' },
    ],
    leads: [{ name: 'Josh Robertson' }, { name: 'Richard Lin' }],
  },
]

export interface Founder {
  name: string
  role: string
  quote: string
}

export interface NetworkDestination {
  company: string
  logoSrc: string
  logoAlt: string
}

export interface LeadershipCredit {
  name: string
  role: string
  era: string
  sortYear: number
}

export const executives: Executive[] = [
  { title: 'Chief Executive Officer',      name: 'Johanna Lohmus', initials: 'JL' },
  { title: 'Chief Operating Officer',      name: 'Yash Gupta',    initials: 'YG' },
  { title: 'Chief Technology Officer',     name: 'Josh Robertson',initials: 'JR' },
  { title: 'Chief Design Officer',         name: 'Sherry Chen',   initials: 'SC' },
  { title: 'Chief People Officer',         name: 'Riya Jain',     initials: 'RJ' },
  { title: 'Chief Marketing Officer',      name: 'Trisha Deepak', initials: 'TD' },
  { title: 'Chief Learning Officer',       name: 'Alex Yang',     initials: 'AY' },
  { title: 'Chief Financial Officer',      name: 'Vasu Bansal',   initials: 'VB' },
]

export const productionLeads: ProductionLead[] = [
  { role: 'iOS Development Lead',    name: 'iOS Lead',        initials: 'IL', major: 'Computer Science',    year: 'Junior' },
  { role: 'Backend Lead',            name: 'Backend Lead',    initials: 'BL', major: 'Computer Science',    year: 'Junior' },
  { role: 'Product Management Lead', name: 'PM Lead',         initials: 'PM', major: 'Information Science', year: 'Senior' },
  { role: 'Marketing Lead',          name: 'Marketing Lead',  initials: 'ML', major: 'Business',            year: 'Junior' },
  { role: 'UI/UX Design Lead',       name: 'Design Lead',     initials: 'DL', major: 'Graphic Design',      year: 'Senior' },
  { role: 'iOS Bootcamp Lead',       name: 'Bootcamp Lead',   initials: 'BL', major: 'Computer Science',    year: 'Junior' },
  { role: 'UI/UX Bootcamp Lead',     name: 'UX Bootcamp Lead',initials: 'UB', major: 'Graphic Design',      year: 'Sophomore' },
  { role: 'Apprenticeship Lead',     name: 'Apprentice Lead', initials: 'AL', major: 'Computer Science',    year: 'Junior' },
]

export const founders: Founder[] = [
  {
    name: 'Kush',
    role: 'Co-Founder',
    quote: 'We wanted to build the kind of place we wished we had found earlier: somewhere students could care deeply, make ambitious things, and feel taken seriously before the world told them they were ready.',
  },
  {
    name: 'Sam',
    role: 'Co-Founder',
    quote: 'There was always a bittersweet truth behind it: so many talented people at Carolina were learning in isolation. We made App Team to turn that lonely ambition into shared momentum.',
  },
  {
    name: 'Morgan',
    role: 'Co-Founder',
    quote: 'We cared about more than shipping apps. We wanted to build a culture where high standards and kindness could coexist, because the best creative work usually grows out of both.',
  },
  {
    name: 'Max',
    role: 'Co-Founder',
    quote: 'The organization started as a response to a gap, but it lasted because it became something more human: a place where people could become excellent together instead of competing alone.',
  },
  {
    name: 'Beliz',
    role: 'Co-Founder',
    quote: 'What made it worth building was the idea that students could leave with more than portfolio pieces. They could leave with taste, discipline, confidence, and people who changed their lives.',
  },
]

export const legacyLeadershipCredits: LeadershipCredit[] = [
  {
    name: 'Will Wang',
    role: 'CEO',
    era: 'Fall 2025 - Spring 2026',
    sortYear: 2025,
  },
  {
    name: 'Haley Shah',
    role: 'CEO',
    era: 'Spring 2026 - Fall 2026',
    sortYear: 2026,
  },
  {
    name: 'Ben Chesser',
    role: 'CEO',
    era: 'Fall 2024 - Spring 2025',
    sortYear: 2024,
  },
  {
    name: 'Alec Nipp',
    role: 'CEO',
    era: 'Fall 2023 - Spring 2024',
    sortYear: 2023,
  },
  {
    name: 'Bailey Van Wormer',
    role: 'CEO',
    era: 'Fall 2022 - Spring 2023',
    sortYear: 2022,
  },
  {
    name: 'Beliz Yilmaz',
    role: 'CEO',
    era: 'Spring 2021 - Spring 2022',
    sortYear: 2021,
  },
  {
    name: 'Max Nabokow',
    role: 'CEO',
    era: 'Fall 2019 - Fall 2020',
    sortYear: 2019,
  },
  {
    name: 'Will Wang',
    role: 'CFO',
    era: 'Fall 2023 - Present',
    sortYear: 2023,
  },
  {
    name: 'Josh Myatt',
    role: 'CFO',
    era: 'Spring 2022 - Spring 2023',
    sortYear: 2022,
  },
  {
    name: 'Felipe Yanaga',
    role: 'CFO',
    era: 'Spring 2021 - Fall 2021',
    sortYear: 2021,
  },
  {
    name: 'Jiyoon Moon',
    role: 'CFO',
    era: 'Previous C-Suite',
    sortYear: 2020,
  },
  {
    name: 'Mackenzie Perry',
    role: 'CTO',
    era: 'Fall 2024 - Present',
    sortYear: 2024,
  },
  {
    name: 'Max Nabokow',
    role: 'CTO',
    era: 'Spring 2021 - Spring 2024',
    sortYear: 2021,
  },
  {
    name: 'Johanna Lohmus',
    role: 'CTO',
    era: 'Previous C-Suite',
    sortYear: 2020,
  },
  {
    name: 'Kavya Sriram',
    role: 'CTO',
    era: 'Previous C-Suite',
    sortYear: 2024,
  },
  {
    name: 'Haley Shah',
    role: 'COO',
    era: 'Fall 2025 - Present',
    sortYear: 2025,
  },
  {
    name: 'Ryder Klein',
    role: 'COO',
    era: 'Fall 2024 - Fall 2025',
    sortYear: 2024,
  },
  {
    name: 'Ciya Joseph',
    role: 'COO',
    era: 'Fall 2023 - Spring 2024',
    sortYear: 2023,
  },
  {
    name: 'Noah Frahm',
    role: 'COO',
    era: 'Fall 2022 - Spring 2023',
    sortYear: 2022,
  },
  {
    name: 'Bailey Van Wormer',
    role: 'COO',
    era: 'Spring 2022',
    sortYear: 2022,
  },
  {
    name: 'Sam Shi',
    role: 'CLO',
    era: 'Spring 2021 - Spring 2024',
    sortYear: 2021,
  },
  {
    name: 'Alexandra Marum',
    role: 'CLO',
    era: 'Fall 2024 - Present',
    sortYear: 2024,
  },
  {
    name: 'Rishab “RJ” Jain',
    role: 'CMO',
    era: 'Spring 2020',
    sortYear: 2020,
  },
  {
    name: 'Kush Shah',
    role: 'CMO',
    era: 'Fall 2021',
    sortYear: 2021,
  },
  {
    name: 'Lauren Jones',
    role: 'CMO',
    era: 'Spring 2022',
    sortYear: 2022,
  },
  {
    name: 'Sarayu Yenumula',
    role: 'CMO',
    era: 'Fall 2022',
    sortYear: 2022,
  },
  {
    name: 'Halima Hasan',
    role: 'CMO',
    era: 'Spring 2023',
    sortYear: 2023,
  },
  {
    name: 'Will Astilla',
    role: 'CMO',
    era: 'Fall 2023',
    sortYear: 2023,
  },
  {
    name: 'Mitchell Anderson',
    role: 'CMO',
    era: 'Previous C-Suite',
    sortYear: 2024,
  },
  {
    name: 'Stabler Matrazzo',
    role: 'CMO',
    era: 'Previous C-Suite',
    sortYear: 2024,
  },
  {
    name: 'Kush Shah',
    role: 'CPO',
    era: 'Fall 2021',
    sortYear: 2021,
  },
  {
    name: 'Aidan Maguire',
    role: 'CPO',
    era: 'Previous C-Suite',
    sortYear: 2024,
  },
  {
    name: 'Morgan Roberts',
    role: 'CDO',
    era: 'Fall 2021 - Present',
    sortYear: 2021,
  },
  {
    name: 'Olivia Hammond',
    role: 'CDO',
    era: 'Previous C-Suite',
    sortYear: 2020,
  },
  {
    name: 'Trey Anderson',
    role: 'CDO',
    era: 'Previous C-Suite',
    sortYear: 2024,
  },
]

export const networkDestinations: NetworkDestination[] = [
  {
    company: 'Netflix',
    logoSrc: 'https://logo.clearbit.com/netflix.com?size=256',
    logoAlt: 'Netflix logo',
  },
  {
    company: 'Apple',
    logoSrc: 'https://logo.clearbit.com/apple.com?size=256',
    logoAlt: 'Apple logo',
  },
  {
    company: 'Meta',
    logoSrc: 'https://logo.clearbit.com/meta.com?size=256',
    logoAlt: 'Meta logo',
  },
  {
    company: 'Amazon',
    logoSrc: '/assets/alumni/Amazon Logo.webp',
    logoAlt: 'Amazon logo',
  },
  {
    company: 'Google',
    logoSrc: 'https://logo.clearbit.com/google.com?size=256',
    logoAlt: 'Google logo',
  },
  {
    company: 'PayPal',
    logoSrc: 'https://logo.clearbit.com/paypal.com?size=256',
    logoAlt: 'PayPal logo',
  },
  {
    company: 'Wells Fargo',
    logoSrc: 'https://logo.clearbit.com/wellsfargo.com?size=256',
    logoAlt: 'Wells Fargo logo',
  },
  {
    company: 'Datadog',
    logoSrc: 'https://logo.clearbit.com/datadoghq.com?size=256',
    logoAlt: 'Datadog logo',
  },
  {
    company: 'Capital One',
    logoSrc: 'https://commons.wikimedia.org/wiki/Special:FilePath/Capital%20One%20logo.svg',
    logoAlt: 'Capital One logo',
  },
  {
    company: 'Microsoft',
    logoSrc: 'https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft%20logo%20(2012).svg',
    logoAlt: 'Microsoft logo',
  },
  {
    company: 'Adobe',
    logoSrc: 'https://commons.wikimedia.org/wiki/Special:FilePath/Adobe%20Corporate%20logo.svg',
    logoAlt: 'Adobe logo',
  },
  {
    company: 'Pinterest',
    logoSrc: 'https://logo.clearbit.com/pinterest.com?size=256',
    logoAlt: 'Pinterest logo',
  },
  {
    company: 'WillowTree',
    logoSrc: 'https://www.google.com/s2/favicons?domain=willowtreeapps.com&sz=256',
    logoAlt: 'WillowTree logo',
  },
  {
    company: 'Google DeepMind',
    logoSrc: 'https://logo.clearbit.com/deepmind.google?size=256',
    logoAlt: 'Google DeepMind logo',
  },
  {
    company: 'Walmart',
    logoSrc: 'https://commons.wikimedia.org/wiki/Special:FilePath/New%20Walmart%20Logo.svg',
    logoAlt: 'Walmart logo',
  },
  {
    company: 'Visa',
    logoSrc: 'https://logo.clearbit.com/visa.com?size=256',
    logoAlt: 'Visa logo',
  },
  {
    company: 'Plaid',
    logoSrc: 'https://www.google.com/s2/favicons?domain=plaid.com&sz=256',
    logoAlt: 'Plaid logo',
  },
  {
    company: 'AWS',
    logoSrc: 'https://commons.wikimedia.org/wiki/Special:FilePath/Amazon%20Web%20Services%20Logo.svg',
    logoAlt: 'AWS logo',
  },
  {
    company: 'Bank of America',
    logoSrc: 'https://logo.clearbit.com/bankofamerica.com?size=256',
    logoAlt: 'Bank of America logo',
  },
  {
    company: 'Goldman Sachs',
    logoSrc: 'https://logo.clearbit.com/goldmansachs.com?size=256',
    logoAlt: 'Goldman Sachs logo',
  },
  {
    company: 'Appian',
    logoSrc: 'https://logo.clearbit.com/appian.com?size=256',
    logoAlt: 'Appian logo',
  },
  {
    company: 'DoorDash',
    logoSrc: 'https://logo.clearbit.com/doordash.com?size=256',
    logoAlt: 'DoorDash logo',
  },
  {
    company: 'Bloomberg',
    logoSrc: 'https://www.google.com/s2/favicons?domain=bloomberg.com&sz=256',
    logoAlt: 'Bloomberg logo',
  },
  {
    company: 'NVIDIA',
    logoSrc: 'https://logo.clearbit.com/nvidia.com?size=256',
    logoAlt: 'NVIDIA logo',
  },
  {
    company: 'Tesla',
    logoSrc: 'https://logo.clearbit.com/tesla.com?size=256',
    logoAlt: 'Tesla logo',
  },
  {
    company: 'Salesforce',
    logoSrc: '/assets/alumni/Salesforce Logo.png',
    logoAlt: 'Salesforce logo',
  },
  {
    company: 'Cisco',
    logoSrc: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cisco%20logo-1000px.png',
    logoAlt: 'Cisco logo',
  },
  {
    company: 'Stripe',
    logoSrc: 'https://logo.clearbit.com/stripe.com?size=256',
    logoAlt: 'Stripe logo',
  },
  {
    company: 'Boeing',
    logoSrc: 'https://logo.clearbit.com/boeing.com?size=256',
    logoAlt: 'Boeing logo',
  },
  {
    company: 'Oracle',
    logoSrc: '/assets/alumni/Oracle Logo.png',
    logoAlt: 'Oracle logo',
  },
  {
    company: 'Intuit',
    logoSrc: 'https://www.google.com/s2/favicons?domain=intuit.com&sz=256',
    logoAlt: 'Intuit logo',
  },
  {
    company: 'Databricks',
    logoSrc: 'https://www.google.com/s2/favicons?domain=databricks.com&sz=256',
    logoAlt: 'Databricks logo',
  },
  {
    company: 'ZipRecruiter',
    logoSrc: 'https://www.google.com/s2/favicons?domain=ziprecruiter.com&sz=256',
    logoAlt: 'ZipRecruiter logo',
  },
  {
    company: 'Bandwidth',
    logoSrc: 'https://www.google.com/s2/favicons?domain=bandwidth.com&sz=256',
    logoAlt: 'Bandwidth logo',
  },
  {
    company: 'Red Hat',
    logoSrc: 'https://www.google.com/s2/favicons?domain=redhat.com&sz=256',
    logoAlt: 'Red Hat logo',
  },
  {
    company: 'Tanium',
    logoSrc: 'https://www.google.com/s2/favicons?domain=tanium.com&sz=256',
    logoAlt: 'Tanium logo',
  },
  {
    company: 'ServiceNow',
    logoSrc: 'https://www.google.com/s2/favicons?domain=servicenow.com&sz=256',
    logoAlt: 'ServiceNow logo',
  },
  {
    company: 'CoStar Group',
    logoSrc: 'https://www.google.com/s2/favicons?domain=costargroup.com&sz=256',
    logoAlt: 'CoStar Group logo',
  },
  {
    company: 'Pendo',
    logoSrc: 'https://www.google.com/s2/favicons?domain=pendo.io&sz=256',
    logoAlt: 'Pendo logo',
  },
]

export const pillars: Pillar[] = [
  {
    icon: '/assets/icons/idea.svg',
    iconAlt: 'Lightbulb Icon',
    title: 'Learn',
    eyebrow: 'Education',
    imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students collaborating around a laptop',
    text: "We teach the full iOS product process, from product thinking and interface design to implementation. The goal is practical foundations, real feedback, and enough repetition that members can contribute with confidence.",
  },
  {
    icon: '/assets/icons/bezier.svg',
    iconAlt: 'Bezier Icon',
    title: 'Design',
    eyebrow: 'Craft',
    imageSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Designer sketching product ideas on a glass wall',
    text: "We treat design as a core part of building good products, not something bolted on at the end. Members learn to care about clarity, usability, and visual polish so the work feels intuitive and intentional.",
    cardClass: 'mobile-card-margin-1',
  },
  {
    icon: '/assets/icons/tools.svg',
    iconAlt: 'Tools Icon',
    title: 'Develop',
    eyebrow: 'Execution',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Developer working at a laptop with code on screen',
    text: "We give members the chance to improve by building in teams, shipping real work, and seeing how strong products come together. That means better code, good collaboration, fast iteration, and holding a standard that feels closer to industry than a classroom.",
    cardClass: 'mobile-card-margin-2',
  },
]

export const galleryImages: GalleryImage[] = [
  { src: '/assets/photos/ios-lecture.jpg',    alt: 'iOS lecture in class' },
  { src: '/assets/photos/team-hike.jpg',      alt: 'Team hiking together' },
  { src: '/assets/photos/team-dinner.jpg',    alt: 'Team dinner out' },
  { src: '/assets/photos/academy-lecture.jpg',alt: 'Academy lecture' },
  { src: '/assets/photos/team-social.jpg',    alt: 'Team social event' },
  { src: '/assets/photos/women-in-tech.jpg',  alt: 'Women in Tech event' },
]

export const learningTracks: Track[] = [
  {
    label: 'Learning',
    eyebrow: 'Beginner',
    badgeLabel: 'iOS',
    icon: '/assets/icons/books.svg',
    iconAlt: 'Books Icon',
    title: 'iOS Bootcamp',
    text: "Learn to build real iOS apps from scratch. You'll cover Swift fundamentals, SwiftUI layouts, working with APIs, and the full Xcode development workflow. No interview needed, just curiosity and a willingness to show up.",
  },
  {
    label: 'Learning',
    eyebrow: 'Beginner',
    badgeLabel: 'Design',
    icon: '/assets/icons/eyedropper.svg',
    iconAlt: 'Eyedropper Icon',
    title: 'UI/UX Bootcamp',
    text: "Learn the craft of designing products people actually want to use. You'll work in Figma, study visual hierarchy and typography, build wireframes and prototypes, and develop the eye for detail that separates good design from great. No interview needed.",
    cardClass: 'mobile-card-margin-1',
  },
  {
    label: 'Learning',
    eyebrow: 'Intermediate',
    badgeLabel: 'iOS',
    icon: '/assets/icons/blocks.svg',
    iconAlt: 'Blocks Icon',
    title: 'iOS Apprenticeship',
    text: "Go deeper. You'll tackle advanced Swift patterns, app architecture, performance, and shipping real features on a project that matters. Open to members who've completed the bootcamp or have some iOS background.",
    cardClass: 'mobile-card-margin-2',
  },
  {
    label: 'Learning',
    eyebrow: 'Intermediate',
    badgeLabel: 'Design',
    icon: '/assets/icons/blocks.svg',
    iconAlt: 'Blocks Icon',
    title: 'UI/UX Apprenticeship',
    text: "Take your design thinking further. You'll explore user research, interaction design systems, critique, and the full process of shipping a polished product. Open to members who've completed the bootcamp or have some design background.",
    cardClass: 'mobile-card-margin-3',
  },
]

export const productionTracks: Track[] = [
  {
    label: 'Production',
    icon: '/assets/icons/client.svg',
    iconAlt: 'Client Icon',
    title: 'Client Teams',
    text: "Experience the rewarding process of bringing a client's vision to life with an expert team of developers, designers, and product managers. It doesn't get any closer to real-world industry experience than this.",
    cardClass: 'mobile-card-margin-3',
  },
  {
    label: 'Production',
    icon: '/assets/icons/rocket.svg',
    iconAlt: 'Rocket Icon',
    title: 'Start-up Teams',
    text: "Exercise your creative freedom by working with a seamless and experienced team of developers, designers, and product managers to build apps that are completely original.",
    cardClass: 'mobile-card-margin-3',
  },
]

export const apps: App[] = [
  {
    coverSrc: '/assets/apps/luminary/luminary-cover.svg',
    coverAlt: 'Luminary cover',
    iconSrc: '/assets/apps/luminary/luminary.png',
    iconAlt: 'Luminary Icon',
    name: 'Luminary',
    started: 'Started Spring 2023',
    description: "Luminary makes navigating UNC's campus more accessible for those with mobility limitations. Users can find accessible routes tailored to their needs and report barriers, which show up in a real-time feed.",
  },
  {
    coverSrc: '/assets/apps/centible/centible-cover.svg',
    coverAlt: 'Centible cover',
    iconSrc: '/assets/apps/centible/centible.png',
    iconAlt: 'Centible Icon',
    name: 'Centible',
    started: 'Started Spring 2022',
    description: "Centible helps college students manage their finances by syncing with their bank to track spending and sort transactions into custom categories.",
    link: 'https://centible.app/',
    linkLabel: 'Try it out!',
    cardClass: 'mobile-card-margin-1',
  },
  {
    coverSrc: '/assets/apps/bubbly/bubbly-cover.svg',
    coverAlt: 'Bubbly cover',
    iconSrc: '/assets/apps/bubbly/bubbly-icon.svg',
    iconAlt: 'Bubbly Icon',
    name: 'Bubbly',
    started: 'Started Fall 2021',
    description: "Bubbly is an iPad game with targeted brain training exercises to help improve vision in kids and teens with Cortical Visual Impairment (CVI), a condition caused by brain damage that disrupts how visual information is processed.",
    link: '/bubbly',
    linkLabel: 'Tell me more!',
    cardClass: 'mobile-card-margin-2 third',
  },
  {
    coverSrc: '/assets/apps/porch/placeholder.svg',
    coverAlt: 'Porch designs in progress',
    iconSrc: '/assets/apps/porch/porch-icon.png',
    iconAlt: 'Porch Icon',
    name: 'Porch',
    started: 'Started Fall 2025',
    description: "Porch connects residents with their local communities, making it easy to discover neighborhood events, share resources, and stay engaged with the people and places around them.",
    cardClass: 'mobile-card-margin-1',
  },
  {
    coverSrc: '/assets/apps/cupboard/cupboard-cover.png',
    coverAlt: 'Cupboard app screens',
    iconSrc: '/assets/apps/cupboard/cupboard-icon.png',
    iconAlt: 'Cupboard Icon',
    name: 'Cupboard',
    started: 'Started Spring 2025',
    description: "Cupboard connects UNC students with Carolina Cupboard's food pantry, making it easier to access nutritious food, schedule pickups, and find resources to support food security on campus.",
  },
]

export const roles: Role[] = [
  {
    title: 'iOS Bootcamp',
    label: 'Learning',
    description: "With App Team Carolina's iOS Bootcamp, you will learn the foundations of iOS development and build real apps every week. Our learning track will teach you the skills you need to build high-quality applications and approach new challenges in an ever-evolving field.",
    requirements: [
      'Foundational programming experience (COMP 110 or equivalent)',
      'Passion for all things iOS',
      'High attention to detail and standards for quality',
    ],
    applyUrl: 'https://forms.gle/jmKShFRnmY19wzNBA',
    applyLabel: 'Sign Up Now',
    spacingClass: 'spacing-application-active',
  },
  {
    title: 'UI/UX Bootcamp',
    label: 'Learning',
    description: "With App Team Carolina's UI/UX Bootcamp, you will learn the foundations of visual and interaction design. UI/UX Bootcamp will teach you the skills you need to design high-quality applications and approach new challenges in an ever-evolving field.",
    requirements: [
      'Basic knowledge of design principles',
      'Demonstrated passion for technology',
      'Desire and willingness to learn',
    ],
    applyUrl: 'https://forms.gle/irW5LVMnhFpmeDL48',
    applyLabel: 'Sign Up Now',
    spacingClass: 'spacing-application-active',
    cardClass: 'second-space',
  },
  {
    title: 'iOS Developer',
    subtitle: 'Production Team',
    label: 'Production',
    description: "As an iOS Developer, you'll be the driving force behind developing extraordinary user experiences with Swift and SwiftUI. You'll work on a production team building one of our apps.",
    requirements: [
      'Strong, demonstrated knowledge of iOS development and concepts',
      'Passion for all things iOS',
      'Reliable access to a Mac',
    ],
    applyUrl: 'https://forms.gle/6GdCABHY4BMTa2NZ7',
    applyLabel: 'Apply now',
    spacingClass: 'spacing-application-other',
  },
  {
    title: 'UI/UX Designer',
    subtitle: 'Production Team',
    label: 'Production',
    description: "As a UI/UX Designer, you will craft exceptional user experiences through visually captivating and intuitive designs. Collaborating closely with developers and project managers, you will translate client requirements into engaging and high-quality user interfaces for our innovative apps.",
    requirements: [
      'Strong, demonstrated knowledge of UI/UX design principles',
      'Proficiency in creating wireframes, prototypes, and interactive mockups with Figma',
      'Demonstrated passion for technology',
    ],
    applyUrl: 'https://forms.gle/zJ4ZQQe4zhYUjoky9',
    applyLabel: 'Apply Now',
    spacingClass: 'spacing-application',
    cardClass: 'second-space',
  },
  {
    title: 'Product Manager',
    subtitle: 'Production Team',
    label: 'Production',
    description: "As a Product Manager, you'll drive product development, launch strategies, and feature prioritization for our innovative apps. You'll work in either a client team or a startup environment, getting real PM experience firsthand.",
    requirements: [
      'Strong, demonstrated knowledge of product management',
      'Demonstrated passion for technology',
      'The ability to communicate clearly and work collaboratively',
      'Aptitude for highlighting problems, recognizing opportunities, and formulating strategies.',
    ],
    applyUrl: 'https://forms.gle/v8RfdTjAU5bPcNk97',
    applyLabel: 'Apply Now',
    spacingClass: 'spacing-application',
  },
  {
    title: 'Product Marketing Manager',
    subtitle: 'Production Team',
    label: 'Production',
    description: "As a Product Marketing Manager, you're responsible for understanding our users' needs and conveying how our products address those needs. Through strategic positioning, messaging, and go-to-market strategies, you will drive awareness, adoption, and growth.",
    requirements: [
      'Ability to craft compelling narratives around products and convey complex technical details simply.',
      'Demonstrated passion for technology',
      'Capable of analyzing market and user data to inform strategic decisions.',
    ],
    applyUrl: 'https://forms.gle/tP8xjY3ruKWPoDGUA',
    applyLabel: 'Apply Now',
    spacingClass: 'spacing-application',
    cardClass: 'second-space',
  },
  /*{
     title: 'Web Developer',
    description: "As a Web Developer, you will create the public face for App Team through our website.",
    requirements: [
      'Experience building modern, functional websites',
      'Proficiency working in HTML, CSS, React, Angular, or another web-building framework',
      'Familiarity with technologies such as Firebase, Plaid, or the OpenAI API (Not Required)',
    ],
    applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScc--LokcLakGeMV7OWd--LEk-IoeFyvNvwRLlHakIsFEknTw/viewform?usp=sharing&ouid=107410903587223080553',
    applyLabel: 'Apply Now',
    spacingClass: 'spacing-application',
  }, */
  {
    title: 'Backend Developer',
    subtitle: 'Production Team',
    label: 'Production',
    description: "As a Backend Developer, you'll build the backend that powers our apps and makes great experiences possible. You'll work alongside developers, designers, PMs, and marketers to bring products to life.",
    requirements: [
      'Experience building backend systems, like data storage and authentication that are accessed through APIs.',
      'Demonstrated passion for technology',
      'Familiarity with technologies such as Firebase, Plaid, or the OpenAI API (Not Required)',
    ],
    applyUrl: 'https://forms.gle/KuRYYZm38QisRT3r9',
    applyLabel: 'Apply Now',
    spacingClass: 'spacing-application',
    cardClass: 'second-space',
  },
]

export const socials: Social[] = [
  {
    href: 'https://www.linkedin.com/company/appteamcarolina/',
    iconSrc: '/assets/social/icon-linkedin.svg',
    alt: 'LinkedIn',
    target: '_blank',
  },
  {
    href: 'https://unc.us1.list-manage.com/subscribe?u=d0c47fe7bacc0d6c36ec8ace0&id=98e2c56752',
    iconSrc: '/assets/social/icon-newsletter.svg',
    alt: 'Newsletter',
    target: '_blank',
  },
  {
    href: 'https://www.instagram.com/appteamcarolina/',
    iconSrc: '/assets/social/icon-instagram.svg',
    alt: 'Instagram',
    target: '_blank',
  },
  {
    href: 'https://twitter.com/appteamcarolina?lang=en',
    iconSrc: '/assets/social/icon-twitter.svg',
    alt: 'Twitter',
    target: '_blank',
  },
  {
    href: 'mailto:appteamcarolina@unc.edu',
    iconSrc: '/assets/social/icon-email.svg',
    alt: 'Email',
  },
]
