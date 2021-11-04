import image1 from '../../assets/pawan.jpg'
import image2 from '../../assets/overhead.jpg'
import image3 from '../../assets/natasha.jpg'
import image4 from '../../assets/jack.jpg'
import image5 from '../../assets/etty-fidele.jpg'
import mission from '../../assets/mission.png'
import missioninceo from '../../assets/missioninceo2.jpg'
import visioninceo from '../../assets/visioninceo1.jpg'
import corevaluesinceo from '../../assets/corevaluesinceo2.jpg'

//carousell images
import teamphoto1 from '../../assets/carousell/ambagivinginstructions.jpg'
import squadphotovsarrowheads from '../../assets/carousell/sarifcteamphotovsarrowheads.jpg'
import sectorhalftime from '../../assets/carousell/sector.jpg'
import sarifcsittinghalftime from '../../assets/carousell/sarifcsittinglarge.jpg'

import ambassadorcoach from '../../assets/carousell/ambaimgcoach.jpg'

const organizationalTenets = [
  {
    title: 'Mission',
    description:
      'To bring together the Sari F.C family to create life changing opportunities for children and young people in Tolon District and beyond.',
    image: missioninceo,
    isReversed: false,
  },
  {
    title: 'Vision',
    description:
      'To be the best football club in Ghana, both on and off the pitch. To become the District’s leading football club that changes lives.',
    image: visioninceo,
    isReversed: true,
  },
  {
    title: 'Core Values',
    description:
      'Respect, effort, ambition, teamwork and humility are the five principal values that define the spirit of Sari Football Club',
    image: corevaluesinceo,
    isReversed: false,
  },
]
const content = [
  {
    title: 'Sari FC vs Kasalgu Arrow Heads - Utrecht Academy Park',
    description: '',
    button: 'View More',
    path: '/FinishedProjects',
    image: teamphoto1,
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },
  {
    title: 'Sari FC vs Kasalgu Arrow Heads - Utrecht Academy Park',
    description: '',
    image: squadphotovsarrowheads,
    path: '/FinishedProjects',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },
  {
    title: 'Sector Apiligu - Half-Time',
    description:
      'Sector Apiligu listening keenly to the team talk from the Manager ',
    button: 'View More',
    image: sectorhalftime,
    path: '/FinishedProjects',
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },
  {
    title: 'Sari FC vs Kasalgu Arrow Heads - Utrecht Academy Park',
    description:
      'Haft-Time team talk ongoing after a fierce first half display by the boys at the Utrecht Academy Park',
    button: 'View More',
    path: '/FinishedProjects',
    image: sarifcsittinghalftime,
    user: 'Luan Gjokaj',
    userProfile: 'https://i.imgur.com/JSW6mEk.png',
  },

  {
    title: 'Sari FC vs Kasalgu Arrow Heads - Utrecht Academy Park',
    description: 'Coach Ambassador in full tactics layout to the boys dur',
    button: 'View more',
    path: '/FinishedProjects',
    image: ambassadorcoach,
    user: 'Bruno Vizovskyy',
    userProfile: 'https://i.imgur.com/4KeKvtH.png',
  },
]

const navLInks = [
  {
    title: 'About Us',
    dropdownLinks: [
      {
        path: 'MessagesFromCeo',
        title: 'Message from CEO',
        dropdownLinks: [],
      },
      {
        path: 'CorporateProfile',
        title: 'Sari Football Club Profile',
        dropdownLinks: [],
      },
    ],
  },
  {
    title: 'Divisions',
    dropdownLinks: [
      {
        path: 'Divisions',
        title: 'Divisions',
        dropdownLinks: [],
      },
    ],
  },
  {
    title: 'Latest News',
    dropdownLinks: [
      {
        path: 'viewAll',
        title: 'All Media',
        dropdownLinks: [],
      },
      {
        path: 'newsPage',
        title: 'Latest News',
        dropdownLinks: [],
      },

      {
        path: 'Gallery',
        title: 'Picutres',
        dropdownLinks: [],
      },
      {
        path: 'Video',
        title: 'Videos',
        dropdownLinks: [],
      },
    ],
  },
  {
    title: 'Results / Fixtures',
    dropdownLinks: [
      {
        path: 'FinishedProjects',
        title: 'Match Results',
        dropdownLinks: [],
      },
      {
        path: 'OngoingProjects',
        title: 'Upcoming Fixtures',
        dropdownLinks: [],
      },
    ],
  },
  {
    title: 'Match Center',
    dropdownLinks: [
      // {
      //   path: "StrategicPlan",
      //   title: "Strategic Plan",
      //   dropdownLinks: [],
      // },
      // {
      //   path: "Procurement",
      //   title: "Procurement",
      //   dropdownLinks: [],
      // },

      {
        path: 'AnnualReport',
        title: 'Match Report',
        dropdownLinks: [],
      },
    ],
  },
  {
    title: 'Careers',
    dropdownLinks: [
      {
        path: 'Career',
        title: 'Careers at Sari FC',
        dropdownLinks: [],
      },
    ],
  },
  {
    title: 'Contact',
    path: '/contact-us',
    dropdownLinks: [
      {
        path: 'Regional',
        title: 'Contact Info',
        dropdownLinks: [],
      },
      {
        path: 'LeaveMessage',
        title: 'Message US',
        dropdownLinks: [],
      },
    ],
  },
]

export const items = [
  // Photo by ivan Torres on Unsplash

  {
    id: 'a',
    category: 'Holidays',
    title: 'Our Pick of Apps to Help You Escape From Apps',
    pointOfInterest: 200,
    backgroundColor: '#8F986D',
    description: 'lorem fggjdjf dggfgg',
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: 'c',
    category: 'Photography',
    title: 'The Latest Ultra-Specific Photography Editing Apps',
    pointOfInterest: 150,
    backgroundColor: '#FA6779',
    description: 'lorem fggjdjf dggfgg',
  },
  // Photo by Siora Photography on Unsplash
  {
    id: 'd',
    category: "They're all the same",
    title: '100 Cupcake Apps for the Cupcake Connoisseur',
    pointOfInterest: 60,
    backgroundColor: '#282F49',
    description: 'lorem fggjdjf dggfgg',
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: 'e',
    category: 'Cats',
    title: 'Yes, They Are Sociopaths',
    pointOfInterest: 200,
    backgroundColor: '#AC7441',
    description: 'lorem fggjdjf dggfgg',
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: 'b',
    category: 'Holidays',
    title: 'Seriously the Only Escape is the Stratosphere',
    pointOfInterest: 260,
    backgroundColor: '#CC555B',
    description: 'lorem fggjdjf dggfgg',
  },
]
const images = [
  {
    id: 1,
    url: 'https://pbs.twimg.com/media/EvZMeotXAAEGnFc?format=jpg&name=4096x4096',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 2,
    url: 'https://media.istockphoto.com/videos/happy-business-team-men-and-women-are-dancing-at-work-party-together-video-id1086609388?s=640x640',
    description: 'Obuase Road Contruction After',
  },
  {
    id: 3,
    url: 'https://nelliganlaw.ca/wp-content/uploads/2017/11/featureimage_holidayparty.jpg',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 4,
    url: 'https://hiring.workopolis.com/wp-content/uploads/sites/3/2017/12/iStock-616116972.jpg',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 5,
    url: 'https://nelliganlaw.ca/wp-content/uploads/2017/11/featureimage_holidayparty.jpg',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 6,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 7,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 8,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 9,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 10,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 11,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 12,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 13,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
  {
    id: 14,
    url: 'https://media.istockphoto.com/photos/business-colleagues-taking-a-selfie-at-birthday-party-at-work-picture-id1076815340?k=6&m=1076815340&s=612x612&w=0&h=8Wg7PeqGVTUatP4Oh1H8Q6HbGCCySFPHuixLS5Idtrc=',
    description: 'Obuase Road Contruction Before',
  },
]
const news = [
  {
    image:
      'https://www.mercurynews.com/wp-content/uploads/2017/12/ebt-l-tollcrash-1203-37.jpg',
    heading: 'Tema Bridges sword cutting',
    body: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit ametaliquam... ',
  },
  {
    image:
      'https://www.mercurynews.com/wp-content/uploads/2017/12/ebt-l-tollcrash-1203-37.jpg',
    heading: 'Tema Bridges sword cutting',
    body: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit ametaliquam... ',
  },
  {
    image:
      'https://www.mercurynews.com/wp-content/uploads/2017/12/ebt-l-tollcrash-1203-37.jpg',
    heading: 'Tema Bridges sword cutting',
    body: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit ametaliquam... ',
  },
  {
    image:
      'https://www.mercurynews.com/wp-content/uploads/2017/12/ebt-l-tollcrash-1203-37.jpg',
    heading: 'Tema Bridges sword cutting',
    body: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit ametaliquam... ',
  },
  {
    image:
      'https://www.mercurynews.com/wp-content/uploads/2017/12/ebt-l-tollcrash-1203-37.jpg',
    heading: 'Tema Bridges sword cutting',
    body: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit ametaliquam... ',
  },
  {
    image:
      'https://www.mercurynews.com/wp-content/uploads/2017/12/ebt-l-tollcrash-1203-37.jpg',
    heading: 'Tema Bridges sword cutting',
    body: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit ametaliquam... ',
  },
  {
    image:
      'https://www.mercurynews.com/wp-content/uploads/2017/12/ebt-l-tollcrash-1203-37.jpg',
    heading: 'Tema Bridges sword cutting',
    body: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit ametaliquam... ',
  },
  {
    image:
      'https://www.mercurynews.com/wp-content/uploads/2017/12/ebt-l-tollcrash-1203-37.jpg',
    heading: 'Tema Bridges sword cutting',
    body: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. Aenean tempor ornare ipsum, sit ametaliquam... ',
  },
]

// CAREERS ROLES DEFINITION SPACE IN CAREER SECTION IN MOCK JS FILE

const careerDivsion = [
  {
    id: 1,
    division: 'Head Coach',
    career:
      'Primary duties: A soccer coach is responsible for coaching and mentoring soccer players. Coaches guide players through drills, practices and games and act as spokespeople for a team. They can also help schedule games and practices for a team. Most importantly, coaches keep players accountable for on-field performance.  ',
  },
  {
    id: 2,
    division: 'Team Manager',
    career:
      'Primary duties: A soccer manager works closely with the social media and marketing team for a team or organization to attract new players, handle interviews and schedule games and events. A manager should also have a strong understanding of the sport and its rules.',
  },
  {
    id: 3,
    division: 'Assistant Coach',
    career:
      'Primary duties: An assistant coach helps a head coach manage a team, encourages players, creates plays and generally leads a team in their on- and off-field duties. Assistant coaches also help with planning and speaking on behalf of the team to the media. An assistant coach may work with one or more other assistant coaches, depending on the level of play at which they are coaching.  ',
  },
  {
    id: 4,
    division: 'U-13 Coach',
    career:
      'Primary duties: A U-13 coach is responsible for coaching and mentoring U13 players. Coaches guide players through drills, practices and games and act as spokespeople for a team. They can also help schedule games and practices for a team. Most importantly, coaches keep players accountable for on-field performance.  ',
  },
  {
    id: 5,
    division: 'U-13 Assistant Coach',
    career:
      'Primary duties: An U-13 assistant coach helps a U-13 head coach manages the U13 team, encourages players, creates plays and generally leads a team in their on- and off-field duties. Assistant coaches also help with planning and speaking on behalf of the team to the media. An assistant coach may work with one or more other assistant coaches, depending on the level of play at which they are coaching.  ',
  },
  {
    id: 6,
    division: 'Sports Editor',
    career:
      'Primary duties: A sports editor proofreads and edits sports articles for newspapers, magazines or other publications. An editor assists writers and other editors in reaching deadlines and ensuring the accuracy of written material. They are also typically responsible for addressing articles that included mistakes that require clarification or any necessary updates to a story.',
  },
  {
    id: 7,
    division: 'Sports Writer',
    career:
      'Primary duties: A sports writer creates reports on soccer and other sports for newspapers, magazines, websites or other publications. Employers expect sports writers to commit to deadlines, conduct research and report to an editor. Sports writers also maintain a high level of accuracy and professional conduct in their writing.',
  },
  {
    id: 8,
    division: 'General Secretary',
    career: 'General secretay duties  ',
  },
  {
    id: 9,
    division: 'Kit Manager',
    career: 'Coming soon... ',
  },
  {
    id: 10,
    division: 'Team Doctor',
    career: 'Coming soon... ',
  },
  {
    id: 11,
    division: 'Director of Football',
    career: 'Coming soon... ',
  },
]

const allresources = [
  {
    id: 1,
    resource: 'd',
    description: 'book',
    author: 'jay',
    date: '20/07/2020',
  },
  {
    id: 2,
    resource: 'd',
    description: 'book',
    author: 'jay',
    date: '20/07/2020',
  },
  {
    id: 3,
    resource: 'd',
    description: 'book',
    author: 'jay',
    date: '20/07/2020',
  },
]
export const openSpring = { type: 'spring', stiffness: 200, damping: 30 }

export {
  navLInks,
  content,
  organizationalTenets,
  images,
  news,
  careerDivsion,
  allresources,
}
