import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Usama Bhatti',
  title: "Hi all, I'm Usama",
  description:
    "I'm a passionate Full Stack developer having experience in web and native applications with Php, Angular, React.js, React-native, Ionic, Nodejs.",
  resumeLink:
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'usamabhattii',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://usamabhattii.github.io/',
  linkedin: 'https://www.linkedin.com/in/usamabhattii/',
  github: 'https://github.com/usamabhattii',
  instagram: 'https://www.instagram.com/usamabhattii_4190',
  facebook: 'https://www.facebook.com/usamabhattii',
  twitter: 'https://twitter.com/usamabhattii',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in Angular,React.js'
        ),
        emoji('⚡ Building responsive static websites using Nodejs and Php'),
        emoji('⚡ Building RESTful APIs in Expressjs & Laravel Php Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Bootstrap',
          fontAwesomeClassName: 'logos:bootstrap',
        },
        {
          skillName: 'Tailwindcss',
          fontAwesomeClassName: 'logos:tailwindcss',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Typescript',
          fontAwesomeClassName: 'logos:typescript',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassName: 'logos:angular',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Express',
          fontAwesomeClassName: 'logos:express',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
        {
          skillName: 'Php',
          fontAwesomeClassName: 'logos:php',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'logos:laravel',
        },
        {
          skillName: 'Rust',
          fontAwesomeClassName: 'vscode-icons:file-type-light-rust',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        }
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Learning Smart Contract development using Rust & Solana'
        ),
        emoji('⚡ Learning NFT Smart Contracts development using ERC-721 Token Standard')
      ],
      softwareSkills: [
        {
          skillName: 'Solana',
          fontAwesomeClassName: 'vscode-icons:file-type-light-solana',
        },
        {
          skillName: 'Rust',
          fontAwesomeClassName: 'logos:rust',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'National University Of Modern Languages(NUML)',
    subHeader: 'Master of Science in Computer Science (MCS)',
    duration: 'Feb 2018 - May 2020',
    desc: 'Participated in the research of XXX and published 3 papers.',
    grade: 'Grade B',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Developer',
    company: 'Cyber Soft Vantage',
    companyLogo: '/img/icons/common/CSV.jpg',
    date: 'Aug 2022 – Present',
    desc: 'I am working as a full stack developer, responsible for developing and maintaining web/mobile based applications apps using Nodejs,Angular,React,React-Native,Ionic,Html,Bootstrap,Css , Php and much more.',
  },
  {
    role: 'Software Engineer',
    company: 'Stella Technology',
    companyLogo: '/img/icons/common/Stellatechnology.jpg',
    date: 'Dec 2021 – Jul 2022',
    desc: 'I worked as a software Engineer, responsible for developing and maintaining web based applications using nodejs,angular,mysql,postgresql. Worked on authentication, authorization and learnt Jira,Docker etc',
  },
  {
    role: 'Php Prestashop Developer',
    company: 'EBridge Technology',
    companyLogo: '/img/icons/common/Ebridge.png',
    date: 'Oct 2020 - Dec 2021',
    desc: 'Worked as a php prestashop developer.Created custom prestashop modules using php framework symphony,html,css,bootstrap,javascript,ajax, and smarty . I was responsible for creating complete frontend/backend functionality of a prestashop module.',
  }
];

export const projects: ProjectType[] = [
  {
    name: 'portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/UsamaBhattii/portfolio.git',
    link: 'https://developer-portfolio-usamabhattii.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/usamabhattii/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/usamabhattii/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/usamabhattii/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Usama Bhatti',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Usama Bhatti',

  keywords: [
    'Usama',
    'Usama Bhatti',
    '@usamabhattii',
    'usamabhattii',
    'Portfolio',
    'Usama Portfolio ',
    'Usama Bhatti Portfolio',
  ],
};
