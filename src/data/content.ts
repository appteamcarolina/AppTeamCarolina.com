// Static content data for App Team Carolina website

export interface Pillar {
  icon: string
  iconAlt: string
  title: string
  text: string
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

export const pillars: Pillar[] = [
  {
    icon: '/assets/idea.svg',
    iconAlt: 'Lightbulb Icon',
    title: 'Learn',
    text: "We strive to provide quality education pertaining to the iOS app-making process from design to development. Our curriculum covers a wealth of information that you will not learn in Computer Science classes, and our passionate and hardworking instructors strive to provide you with the most successful learning environment possible.",
  },
  {
    icon: '/assets/bezier.svg',
    iconAlt: 'Bezier Icon',
    title: 'Design',
    text: "We hold high standards for the look and feel of our products because we know that apps must be intuitive, attractive, and exciting in order to be successful. We strive to provide unique design insight to our members, and we encourage all members to gain an understanding and respect for the importance of good design.",
    cardClass: 'mobile-card-margin-1',
  },
  {
    icon: '/assets/tools.svg',
    iconAlt: 'Tools Icon',
    title: 'Develop',
    text: "We provide iOS developers of all skill levels the opportunity to improve their programming skills and ultimately produce real apps with our team. Our team is a welcoming community for iOS developers and enthusiasts to learn, grow, and create together while gaining the skills necessary to be successful in the industry.",
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
