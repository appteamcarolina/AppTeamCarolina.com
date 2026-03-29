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
      { name: 'Cupboard', icon: '' },
      { name: 'Bubbly',   icon: '/assets/bubbly-icon.svg' },
    ],
    leads: [{ name: 'Jacob Brown' }, { name: 'Kavya Sriram' }],
  },
  {
    name: 'Client Team 2',
    type: 'Client',
    members: 17,
    semester: 'F25',
    apps: [
      { name: 'PORCH', icon: '/assets/luminary.png' },
    ],
    leads: [{ name: 'Anisha Kundu' }, { name: 'Ashley Hinostroza' }],
  },
  {
    name: 'Startup Team 1',
    type: 'Startup',
    members: 15,
    semester: 'S25',
    apps: [
      { name: 'Centible', icon: '/assets/centible.png' },
    ],
    leads: [{ name: 'Charlotte Tsui' }, { name: 'Shikha Vyas' }],
  },
  {
    name: 'Startup Team 2',
    type: 'Startup',
    members: 18,
    semester: 'S25',
    apps: [
      { name: 'Luminary', icon: '/assets/luminary.png' },
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
  { title: 'Chief Executive Officer',      name: 'President',                initials: 'CE', major: 'Computer Science',    year: 'Senior' },
  { title: 'Chief Operating Officer',      name: 'VP of Operations',         initials: 'CO', major: 'Information Science', year: 'Junior' },
  { title: 'Chief Technology Officer',     name: 'VP of Product',            initials: 'CT', major: 'Computer Science',    year: 'Senior' },
  { title: 'Chief Design Officer',         name: 'Design Director',          initials: 'CD', major: 'Graphic Design',      year: 'Senior' },
  { title: 'Chief People Officer',         name: 'People Director',          initials: 'CP', major: 'Psychology',          year: 'Junior' },
  { title: 'Chief Marketing Officer',      name: 'Marketing Director',       initials: 'CM', major: 'Business',            year: 'Junior' },
  { title: 'Chief Learning Officer',       name: 'Learning Director',        initials: 'CL', major: 'Computer Science',    year: 'Junior' },
  { title: 'Chief Financial Officer',      name: 'Finance Director',         initials: 'CF', major: 'Economics',           year: 'Senior' },
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
]

export const networkDestinations: NetworkDestination[] = [
  {
    company: 'Netflix',
    logoSrc: 'https://cdn.simpleicons.org/netflix',
    logoAlt: 'Netflix logo',
  },
  {
    company: 'Apple',
    logoSrc: 'https://cdn.simpleicons.org/apple',
    logoAlt: 'Apple logo',
  },
  {
    company: 'Meta',
    logoSrc: 'https://cdn.simpleicons.org/meta',
    logoAlt: 'Meta logo',
  },
  {
    company: 'Amazon',
    logoSrc: 'https://cdn.simpleicons.org/amazon',
    logoAlt: 'Amazon logo',
  },
  {
    company: 'Google',
    logoSrc: 'https://cdn.simpleicons.org/google',
    logoAlt: 'Google logo',
  },
  {
    company: 'PayPal',
    logoSrc: 'https://cdn.simpleicons.org/paypal',
    logoAlt: 'PayPal logo',
  },
  {
    company: 'Fidelity',
    logoSrc: 'https://cdn.simpleicons.org/fidelityinvestments',
    logoAlt: 'Fidelity logo',
  },
  {
    company: 'SAS',
    logoSrc: 'https://cdn.simpleicons.org/sas',
    logoAlt: 'SAS logo',
  },
  {
    company: 'Wells Fargo',
    logoSrc: 'https://cdn.simpleicons.org/wellsfargo',
    logoAlt: 'Wells Fargo logo',
  },
  {
    company: 'Datadog',
    logoSrc: 'https://cdn.simpleicons.org/datadog',
    logoAlt: 'Datadog logo',
  },
  {
    company: 'Capital One',
    logoSrc: 'https://cdn.simpleicons.org/capitalone',
    logoAlt: 'Capital One logo',
  },
  {
    company: 'Microsoft',
    logoSrc: 'https://cdn.simpleicons.org/microsoft',
    logoAlt: 'Microsoft logo',
  },
  {
    company: 'Adobe',
    logoSrc: 'https://cdn.simpleicons.org/adobe',
    logoAlt: 'Adobe logo',
  },
  {
    company: 'Pinterest',
    logoSrc: 'https://cdn.simpleicons.org/pinterest',
    logoAlt: 'Pinterest logo',
  },
  {
    company: 'WillowTree',
    logoSrc: 'https://cdn.simpleicons.org/willowtree',
    logoAlt: 'WillowTree logo',
  },
  {
    company: 'Google DeepMind',
    logoSrc: 'https://cdn.simpleicons.org/googledeepmind',
    logoAlt: 'Google DeepMind logo',
  },
  {
    company: 'Walmart',
    logoSrc: 'https://cdn.simpleicons.org/walmart',
    logoAlt: 'Walmart logo',
  },
  {
    company: 'Visa',
    logoSrc: 'https://cdn.simpleicons.org/visa',
    logoAlt: 'Visa logo',
  },
  {
    company: 'Plaid',
    logoSrc: 'https://cdn.simpleicons.org/plaid',
    logoAlt: 'Plaid logo',
  },
  {
    company: 'AWS',
    logoSrc: 'https://cdn.simpleicons.org/amazonwebservices',
    logoAlt: 'AWS logo',
  },
  {
    company: 'Bank of America',
    logoSrc: 'https://cdn.simpleicons.org/bankofamerica',
    logoAlt: 'Bank of America logo',
  },
  {
    company: 'JPMorgan Chase',
    logoSrc: 'https://cdn.simpleicons.org/jpmorganchase',
    logoAlt: 'JPMorgan Chase logo',
  },
  {
    company: 'Goldman Sachs',
    logoSrc: 'https://cdn.simpleicons.org/goldmansachs',
    logoAlt: 'Goldman Sachs logo',
  },
  {
    company: 'CoStar',
    logoSrc: 'https://cdn.simpleicons.org/costar',
    logoAlt: 'CoStar logo',
  },
  {
    company: 'Appian',
    logoSrc: 'https://cdn.simpleicons.org/appian',
    logoAlt: 'Appian logo',
  },
]

export const pillars: Pillar[] = [
  {
    icon: '/assets/idea.svg',
    iconAlt: 'Lightbulb Icon',
    title: 'Learn',
    eyebrow: 'Education',
    imageSrc: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students collaborating around a laptop',
    text: "We teach the full iOS product process, from product thinking and interface design to implementation. The goal is to give students practical foundations, real feedback, and the repetition that helps them contribute with confidence.",
  },
  {
    icon: '/assets/bezier.svg',
    iconAlt: 'Bezier Icon',
    title: 'Design',
    eyebrow: 'Craft',
    imageSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Designer sketching product ideas on a glass wall',
    text: "We treat design as a core part of building good products, not something added at the end. Members learn to care about clarity, usability, and visual polish so the work feels intuitive, intentional, and ready for real users.",
    cardClass: 'mobile-card-margin-1',
  },
  {
    icon: '/assets/tools.svg',
    iconAlt: 'Tools Icon',
    title: 'Develop',
    eyebrow: 'Execution',
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Developer working at a laptop with code on screen',
    text: "We give students the chance to improve by building in teams, shipping real work, and seeing how strong products actually come together. That means writing better code, collaborating well, iterating quickly, and working toward a standard that feels closer to industry than to a classroom assignment.",
    cardClass: 'mobile-card-margin-2',
  },
]

export const galleryImages: GalleryImage[] = [
  { src: '/assets/images/ios-lecture.jpg',    alt: 'iOS lecture in class' },
  { src: '/assets/images/team-hike.jpg',      alt: 'Team hiking together' },
  { src: '/assets/images/team-dinner.jpg',    alt: 'Team dinner out' },
  { src: '/assets/images/academy-lecture.jpg',alt: 'Academy lecture' },
  { src: '/assets/images/team-social.jpg',    alt: 'Team social event' },
  { src: '/assets/images/women-in-tech.jpg',  alt: 'Women in Tech event' },
]

export const learningTracks: Track[] = [
  {
    label: 'Learning',
    icon: '/assets/books.svg',
    iconAlt: 'Books Icon',
    title: 'iOS Bootcamp',
    text: "Dive into the world of iOS development with a complete overview of building high-quality mobile applications using Swift, SwiftUI, and Xcode. Open to all who meet our requirements, the iOS Bootcamp offers hands-on experience in turning app ideas into reality—no interview necessary.",
  },
  {
    label: 'Learning',
    icon: '/assets/eyedropper.svg',
    iconAlt: 'Eyedropper Icon',
    title: 'UI/UX Bootcamp',
    text: "Become proficient in the craft of designing amazing digital products. Open to all qualifying students, this course teaches the fundamentals of creating top-tier user interfaces and experiences, with no interview process to join.",
    cardClass: 'mobile-card-margin-1',
  },
  {
    label: 'Learning',
    icon: '/assets/blocks.svg',
    iconAlt: 'Blocks Icon',
    title: 'iOS Apprenticeship',
    text: "Transform your fundamental iOS development knowledge into mastery with this project-focused education experience. Build real, impressive iOS apps while solidifying the basics, and learning advanced concepts.",
    cardClass: 'mobile-card-margin-2',
  },
  {
    label: 'Learning',
    icon: '/assets/blocks.svg',
    iconAlt: 'Blocks Icon',
    title: 'UI/UX Apprenticeship',
    text: "Transform your fundamental UI/UX design knowledge into mastery with this project-focused education experience. Design real, impressive user experiences while solidifying the basics, and learn more, including advanced research methods.",
    cardClass: 'mobile-card-margin-3',
  },
]

export const productionTracks: Track[] = [
  {
    label: 'Production',
    icon: '/assets/client.svg',
    iconAlt: 'Client Icon',
    title: 'Client Teams',
    text: "Experience the rewarding process of bringing a client's vision to life with an expert team of developers, designers, and product managers. It doesn't get any closer to real-world industry experience than this.",
    cardClass: 'mobile-card-margin-3',
  },
  {
    label: 'Production',
    icon: '/assets/rocket.svg',
    iconAlt: 'Rocket Icon',
    title: 'Start-up Teams',
    text: "Exercise your creative freedom by working with a seamless and experienced team of developers, designers, and product managers to build apps that are completely original.",
    cardClass: 'mobile-card-margin-3',
  },
]

export const apps: App[] = [
  {
    coverSrc: '/assets/luminary-cover.svg',
    coverAlt: 'Luminary cover',
    iconSrc: '/assets/luminary.png',
    iconAlt: 'Luminary Icon',
    name: 'Luminary',
    started: 'Started Spring 2023',
    description: "This app aims to make navigating UNC's campus more accessible for those with mobility limitations. It allows users to find accessible routes curated to their specific needs and report accessibility concerns and barriers, which are displayed in a real-time feed.",
  },
  {
    coverSrc: '/assets/centible-cover.svg',
    coverAlt: 'Centible cover',
    iconSrc: '/assets/centible.png',
    iconAlt: 'Centible Icon',
    name: 'Centible',
    started: 'Started Spring 2022',
    description: "This app helps college students manage their finances and build toward a healthy financial lifestyle by syncing with their banks to track spending and allowing the user to sort their transactions into custom categories.",
    link: 'https://centible.app/',
    linkLabel: 'Try it out!',
    cardClass: 'mobile-card-margin-1',
  },
  {
    coverSrc: '/assets/bubbly-cover.svg',
    coverAlt: 'Bubbly cover',
    iconSrc: '/assets/bubbly-icon.svg',
    iconAlt: 'Bubbly Icon',
    name: 'Bubbly',
    started: 'Started Fall 2021',
    description: "This is an iPad game consisting of targeted brain training exercises to help improve vision in children and adolescents with Cortical Visual Impairment (CVI), a disorder that is caused by damage to the parts of the brain that process vision, which disrupts the brain's communication with the eyes.",
    link: '/bubbly',
    linkLabel: 'Tell me more!',
    cardClass: 'mobile-card-margin-2 third',
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
    applyUrl: 'https://forms.gle/UmJKL9GEr7wBZkWSA',
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
    applyUrl: 'https://forms.gle/2vQphnxRmafHpxd48',
    applyLabel: 'Sign Up Now',
    spacingClass: 'spacing-application-active',
    cardClass: 'second-space',
  },
  {
    title: 'iOS Developer',
    subtitle: 'Production Team',
    label: 'Production',
    description: "As an iOS Developer, you'll be the driving force behind developing extraordinary user experiences with Swift and SwiftUI. You will work on a production team for one of our innovative applications.",
    requirements: [
      'Strong, demonstrated knowledge of iOS development and concepts',
      'Passion for all things iOS',
      'Reliable access to a Mac',
    ],
    applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe3CPegVmdB2P4L3CvV5pDutdF_6uNfkavWNAI2uayF03cxAQ/viewform?usp=sharing&ouid=107410903587223080553',
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
    applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfDldQO_ZSzc55LAyX8yH4qEHmlVmR3fOAr7tOJW4ZFJyy-AA/viewform?usp=sharing&ouid=107410903587223080553',
    applyLabel: 'Apply Now',
    spacingClass: 'spacing-application',
    cardClass: 'second-space',
  },
  {
    title: 'Product Manager',
    subtitle: 'Production Team',
    label: 'Production',
    description: "As a Product Manager, you'll drive product development, launch strategies, and feature prioritization for our innovative apps. You will work in either a client-focused consulting team or a startup environment, gaining product management experience firsthand.",
    requirements: [
      'Strong, demonstrated knowledge of product management',
      'Demonstrated passion for technology',
      'The ability to communicate clearly and work collaboratively',
      'Aptitude for highlighting problems, recognizing opportunities, and formulating strategies.',
    ],
    applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc895oq6JsGeXiaHnVsfX9_QG6thulIcWBOK-fscMU5CJYH2w/viewform?usp=sharing&ouid=107410903587223080553',
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
    applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeENhbkcG__nlb6z1I0-xifqLMz8CaQf0d0NWVJ_FNpfZzR7g/viewform?usp=sharing&ouid=107410903587223080553',
    applyLabel: 'Apply Now',
    spacingClass: 'spacing-application',
    cardClass: 'second-space',
  },
  {
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
  },
  {
    title: 'Backend Developer',
    subtitle: 'Production Team',
    label: 'Production',
    description: "As a Backend Developer, you will create the backend solutions that power our frontend applications and create amazing experiences for our users. You will work together with a team of developers, designers, product managers, and marketers to bring ideas to life.",
    requirements: [
      'Experience building backend systems, like data storage and authentication that are accessed through APIs.',
      'Demonstrated passion for technology',
      'Familiarity with technologies such as Firebase, Plaid, or the OpenAI API (Not Required)',
    ],
    applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfdR_irQv979aKyWidYRVkWcK-q9zrnfXykWInWDha9_WV5sw/viewform?usp=sharing&ouid=107410903587223080553',
    applyLabel: 'Apply Now',
    spacingClass: 'spacing-application',
    cardClass: 'second-space',
  },
]

export const socials: Social[] = [
  {
    href: 'https://www.linkedin.com/company/appteamcarolina/',
    iconSrc: '/assets/icon-linkedin.svg',
    alt: 'LinkedIn',
    target: '_blank',
  },
  {
    href: 'https://unc.us1.list-manage.com/subscribe?u=d0c47fe7bacc0d6c36ec8ace0&id=98e2c56752',
    iconSrc: '/assets/icon-newsletter.svg',
    alt: 'Newsletter',
    target: '_blank',
  },
  {
    href: 'https://www.instagram.com/appteamcarolina/',
    iconSrc: '/assets/icon-instagram.svg',
    alt: 'Instagram',
    target: '_blank',
  },
  {
    href: 'https://twitter.com/appteamcarolina?lang=en',
    iconSrc: '/assets/icon-twitter.svg',
    alt: 'Twitter',
    target: '_blank',
  },
  {
    href: 'mailto:appteamcarolina@unc.edu',
    iconSrc: '/assets/icon-email.svg',
    alt: 'Email',
  },
]
