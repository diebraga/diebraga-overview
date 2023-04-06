import {
  python,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  chackra,
  next,
  carrent,
  jobit,
  tripguide,
  threejs,
  rn,
  kos,
  templ8,
  hertz,
  babylon,
  apollo,
  graph,
  query,
  django,
  express,
  prisma,
  socket,
  grpc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: reactjs,
  },
  {
    title: "React Native Developer",
    icon: rn,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
    icon2: python,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: rn,
  },
  {
    name: "NextJs",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Chakra ui",
    icon: chackra,
  },
  {
    name: "Graphql",
    icon: graph,
  },
  {
    name: "Apollo",
    icon: apollo,
  },
  {
    name: "React Query",
    icon: query,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Babylon",
    icon: babylon,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "socket",
    icon: socket,
  },
  {
    name: "grpc",
    icon: grpc,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Kosmos",
    icon: kos,
    iconBg: "#000",
    date: "Jan 2020 - Mar 2022",
    points: [
      "Developing frontend applications using Next.js and Chakra UI.",
      "Manipulating 3D scenes using Babylon.js or Three.js to provide users with an immersive gaming experience.",
      "Implementing responsive design and ensuring a seamless gaming experience across desktop and mobile devices.",
      "Developing and maintaining various Node.js microservices that communicate via REST, WebSockets and gRPC protocols.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Templ8",
    icon: templ8,
    iconBg: "#000",
    date: "Apr 2021 - Dec 2022",
    points: [
      "Developing and maintaining web applications using Next.js, Chackra UI and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React and React Native Developer",
    company_name: "Hertz",
    icon: hertz,
    iconBg: "#fff",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining React.js microfrontends between different Hertz brands.",
      "Developing and maintaining React Native apps between different Hertz brands.",
      "Collaborating with cross-functional teams designers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Create unit tests using Jest and React Testing Library and E2E cypress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Image Classification",
    description:
      "A Deep Learning app that predicts if the probability of the inputed image to be a Dog a Cat or other, It use FastAI machine learning libraries and FastApi.",
    tags: [
      {
        name: "fastAI",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "text-yellow-500",
      },
      {
        name: "vite",
        color: "text-blue-500",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/52054459/224771687-2ed97135-8669-4775-a81b-e1097fd26500.gif",
    source_code_link: "https://github.com/diebraga/is_dog_machine_learning",
  },
  {
    name: "Tour View",
    description:
      "Starter NextJs app that simulates Google Street View functionalities with NextJS React-Three-Fiber and Drei.",
    tags: [
      {
        name: "nextjs",
        color: "text-gray-300",
      },
      {
        name: "threejs",
        color: "text-green-500",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/52054459/224830831-78c14202-3f59-4d2e-bd11-b0a0abab0d05.gif",
    source_code_link: "https://github.com/diebraga/tour_view",
  },
  {
    name: "Babylon NextJS Starter",
    description:
      "A Starter NextJS App that renders a scene with a thrird person camera using BabylonJs framework.",
    tags: [
      {
        name: "nextjs",
        color: "text-gray-300",
      },
      {
        name: "babylonJs",
        color: "text-orange-500",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/52054459/224835610-f1f17da5-bb4d-494e-8d91-fa898e615fc0.gif",
    source_code_link: "https://github.com/diebraga/next_js_babylonjs_demo",
  },
  {
    name: "Realtime Chat Room",
    description:
      "A Simple realtime chat room with nextJs in the frontend Nodejs Express and SocketIo framework.",
    tags: [
      {
        name: "nextjs",
        color: "text-gray-300",
      },
      {
        name: "nodejs",
        color: "text-green-600",
      },
      {
        name: "socketIo",
        color: "text-yellow-300",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/52054459/224837848-912a5bd1-2fa0-47bd-8d59-78437d3eea98.gif",
    source_code_link: "https://github.com/diebraga/simple_chatroom_app",
  },
  {
    name: "GuessGeoWorld",
    description:
      "A Greagraphy game with two modalityes guess countries or guess countries flags divided by continent, Using nextjs and chacraUI.",
    tags: [
      {
        name: "nextjs",
        color: "text-gray-300",
      },
      {
        name: "chackraui",
        color: "text-blue-400",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/52054459/224839866-2b382fd5-fe92-4c30-a8d0-f656de87e3ba.gif",
    source_code_link: "https://github.com/diebraga/GuessGeoWorld",
  },
  {
    name: "Stripe Shop",
    description:
      "A Shopping cart built with nextjs, stitches and a serverless api route that creates a stripe checkout.",
    tags: [
      {
        name: "nextjs",
        color: "text-gray-300",
      },
      {
        name: "stitches",
        color: "text-red-400",
      },
      {
        name: "stripe",
        color: "text-blue-600",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/52054459/200176756-f34c8511-841b-42aa-b1b7-0d2829a9bdd5.png",
    source_code_link: "https://github.com/diebraga/ignite_shop_2022",
  },
  {
    name: "Minecraft Clone",
    description:
      "A Minecraft clone with react, react-three-fiber and threejs.",
    tags: [
      {
        name: "react",
        color: "text-blue-300",
      },
      {
        name: "threejs",
        color: "text-green-500",
      },
      {
        name: "chackraui",
        color: "text-blue-400",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/52054459/225892189-affbd469-5e98-4d18-be76-c9d2a7803ca4.png",
    source_code_link: "https://github.com/diebraga/mine-craft-react",
  },
  {
    name: "Facial Recognition",
    description:
      "A Minecraft clone with react, react-three-fiber and threejs.",
    tags: [
      {
        name: "opencv",
        color: "text-red-500",
      },
      {
        name: "python",
        color: "text-yellow-500",
      },
      {
        name: "react",
        color: "text-blue-300",
      },
    ],
    image:
      "https://user-images.githubusercontent.com/52054459/225896553-f9cef9b9-26ff-43d6-affc-8448e812eac1.png",
    source_code_link: "https://github.com/diebraga/facial_recognition",
  },
];

export { services, technologies, experiences, testimonials, projects };
