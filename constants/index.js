
//logos
import js from '@/public/images/logos/js.png'
import next from '@/public/images/logos/next.jpeg'
import react from '@/public/images/logos/react.png'
import tailwind from '@/public/images/logos/tailwind.jpeg'
import typescript from '@/public/images/logos/typescript.png'
import html from '@/public/images/logos/html.jpeg'
import css from '@/public/images/logos/css.jpeg'
import motion from '@/public/images/logos/motion.jpeg'
import mongo from '@/public/images/logos/mongo.jpeg'
import express from '@/public/images/logos/express.jpeg'
import socket from '@/public/images/logos/socket.jpeg'
import node from '@/public/images/logos/node.png'


//project thumbnail
import Anime from '@/public/images/projects/otaku.jpeg'
import cllimateClues from '@/public/images/projects/cllimateClues.jpeg'
import Calculator from '@/public/images/projects/calculator.jpeg'
import SnakeGame from '@/public/images/projects/snakeGame.jpeg'
import SimonGame from '@/public/images/projects/simonGame.jpeg'
import game_2048 from '@/public/images/projects/2048.jpeg'
import University from '@/public/images/projects/university.jpeg'
import imageAlchemy from '@/public/images/projects/image-alchemy.jpeg'
import instagram from '@/public/images/projects/instagram.jpeg'
import fitTracker from '@/public/images/projects/fittracker.jpeg'

export const educationData = [
    {
        course: "Online Learning",
        duration: "2022-Present",
        college: "YouTube, Udemy etc",
        learnings: "After completing my diploma, I embarked on a journey to learn web development. The online world offers an ocean of affordable opportunities to explore and seize."
    },
    {
        course: "B.Tech In Computer Science",
        duration: "2022-Present",
        college: "SVERI's College of Engineering, Pandharpur",
        learnings: "Transforming Dreams into Reality: Embracing my passion for computer science, I made the brave switch from civil engineering. On a relentless pursuit to seize my first opportunity and create a fulfilling future."
    },
    {
        course: "Diploma In Civil Engineering",
        duration: "2019-2022",
        college: "Government Polytechnic, Solapur",
        learnings: "A passionate programmer with a civil engineering background, I embarked on a journey studying civil engineering during my diploma. However, it was during my 3rd year that programming captivated me, leading me to discover my true passion for web development."
    }
];


export const lovedSkills = [
    {
        title: "Next.js",
        description: "My complete tool! Helping me build awesome sites with ease."
    },
    {
        title: "ReactJS",
        description: "My Web Buddy! Making websites come alive with cool features."
    },
    {
        title: "JavaScript",
        description: "The brain of Web! Doing all the heavy lifting to make things work."
    },
    {
        title: "Framer Motion",
        description: "My Animation Champ! Adding fun and flair to web pages."
    },
    {
        title: "Tailwind CSS",
        description: "My styling choice! Making designs look sleek and snazzy effortlessly."
    },
    {
        title: "MongoDB",
        description: "The Data Rockstar! Storing and organizing information like a pro."
    },
];


export const skills = [
    {
        id: 1,
        name: "HTML",
        designation: "Markup Language",
        image: html,
    },
    {
        id: 2,
        name: "CSS",
        designation: "Styling Language",
        image: css,
    },
    {
        id: 3,
        name: "JavaScript",
        designation: "Web Language Core",
        image: js,
    },
    {
        id: 4,
        name: "Tailwind CSS",
        designation: "Utility-First Styling",
        image: tailwind,
    },
    {
        id: 5,
        name: "MongoDB",
        designation: "NoSQL Database",
        image: mongo,
    },
    {
        id: 6,
        name: "Express",
        designation: "Minimalist Web Framework",
        image: express,
    },
    {
        id: 7,
        name: "Node.js",
        designation: "JavaScript Runtime",
        image: node,
    },

    {
        id: 8,
        name: "ReactJS",
        designation: "UI Building Library",
        image: react,
    },
    {
        id: 9,
        name: "NextJS",
        designation: "Future Web Dev",
        image: next,
    },
    {
        id: 10,
        name: "Framer Motion",
        designation: "Motion for React",
        image: motion,
    },
    {
        id: 11,
        name: "Socket.IO",
        designation: "Real-Time Communication",
        image: socket,
    },
    {
        id: 12,
        name: "Typescript",
        designation: "Types javascript",
        image: typescript,
    }
];


export const projects = [
    {
        image: imageAlchemy,
        title: "Image Alchemy AI SASS application.",
        websiteLink: "https://image-enchanters.vercel.app/",
        gitHub: "https://github.com/DarkRajeshow/image-enchanters",
        description: "Developed an ImageAI web app with features including image restoration, generative fill, object removal, and object recolor.",
        featured: true,
        impacts: [
            "Users captivated by ImageAI's powerful image processing.",
            "Actively using features like restoration and object removal.",
            "Praised for intuitive interface and efficient performance."
        ],
        technologyUsed: ["NextJS", "Typescript", "MongoDB", "Tailwind CSS"],
        features: [
            "Image restoration",
            "Generative fill",
            "Object removal",
            "Object recolor",
            "Background removal",
            "User authentication",
            "Progressive Web App",
        ]
    },
    {
        image: instagram,
        title: "Instagram Clone",
        websiteLink: "https://insta-clone-v6nq.onrender.com/",
        gitHub: "https://github.com/DarkRajeshow/insta_clone",
        description: "Developed a full-fledged Instagram clone with features including authentication, messaging, notifications, following, followers, posts, likes, and comments.",
        technologyUsed: ["ReactJS", "Node.js", "MongoDB", "Express", "Socket.IO", "Tailwind CSS"],
        featured: true,
        features: [
            "User authentication",
            "Real-time messaging",
            "Notifications",
            "Following/followers system",
            "Posts creation and sharing",
            "Likes and comments functionality"
        ],
        impacts: [
            "Instagram clone popular among college friends.",
            "Engaged dozens of users with real-time messaging and notifications.",
            "Praised for familiar interface and smooth performance."
        ]
    },
    {
        image: Anime,
        websiteLink: "https://epicuniverse.vercel.app/",
        gitHub: "https://github.com/DarkRajeshow/Otaku_in_nextJS",
        technologyUsed: ["NextJS", "Tailwind CSS", "Framer Motion"],
        title: "Show time",
        featured: true,
        impacts: [
            "Engaged users with unique animations and advanced search filters.",
            "Ensured detailed overviews for immersive experiences.",
            "Showcased commitment to innovation and user-centric design."
        ],
        description: "Discover your favorite movies on my website! Find recommendations based on genre, year, and age rating.",
        features: ["Detailed movie recommendations", "Personalized suggestions", "Genre-based search"],
    },
    {
        image: fitTracker,
        title: "Fitness Tracker App",
        websiteLink: "https://fittracker-app.netlify.app/",
        gitHub: "https://github.com/DarkRajeshow/Fitness-tracker",
        description: "Designed a progressive web application (PWA) to help users track their fitness progress with features including user authentication, statistics, history, and offline capability.",
        featured: true,
        technologyUsed: ["ReactJS", "Node.js", "MongoDB", "Express"],
        features: [
            "User authentication for personalized experience",
            "Interactive statistics and progress tracking",
            "Comprehensive exercise history for insights",
            "PWA capabilities for seamless offline access"
        ],
        impacts: [
            "Empowering users to achieve their health goals.",
            "Captivating users with interactive stats and progress tracking.",
            "Garnered praise for intuitive design and useful features."
        ]
    },
    {
        image: cllimateClues,
        websiteLink: "https://darkrajeshow.github.io/ClimateClues/",
        gitHub: "https://github.com/DarkRajeshow/ClimateClues",
        technologyUsed: ["ReactJS", "Tailwind CSS"],
        featured: true,
        title: "ClimateClues",
        description: "Get future forecasts, rain chances, current temperature, and humidity for any city.",
        features: ["Weather forecasts", "Powerful weather analysis", "City-based search"],
        impacts: [
            "Accurate weather predictions for cities worldwide",
            "User-friendly interface for easy weather analysis",
            "Informed decision-making for weather-dependent activities"
        ]
    },
    {
        image: game_2048,
        websiteLink: "https://darkrajeshow.github.io/2048/",
        gitHub: "https://github.com/DarkRajeshow/2048",
        technologyUsed: ["ReactJS", "Tailwind CSS"],
        featured: true,
        title: "2048 Game",
        description: "Experience 2048-Game, with animations from the talented motion graphic designer, romaincousin!",
        features: ["Interactive animations", "Merge numbers gameplay", "Engaging user experience"],
        impacts: [
            "Addictive gameplay keeps users entertained for hours",
            "Challenging puzzles stimulate cognitive skills",
            "Sleek design enhances overall gaming experience"
        ]
    },
    {
        image: Calculator,
        websiteLink: "https://darkrajeshow.github.io/My-Calculator-Version-2.0/",
        gitHub: "https://github.com/DarkRajeshow/My-Calculator-Version-2.0",
        technologyUsed: ["HTML", "CSS", "JavaScript"],
        title: "Basic Calculator",
        description: "My website project showcases a unique and user-friendly calculator I crafted from scratch.",
        features: ["User-friendly interface", "Arithmetic operations", "Square roots calculation"],
    },
    {
        image: SnakeGame,
        websiteLink: "https://darkrajeshow.github.io/SnakeGunWater_Game/",
        gitHub: "https://github.com/DarkRajeshow/SnakeGunWater_Game",
        technologyUsed: ["HTML", "CSS", "JavaScript"],
        title: "Snake Gun & Water Game",
        description: "Step into the world of Snake, Gun & Water! Test your luck against the computer in this thrilling game of chance.",
        features: ["Luck-driven gameplay", "Multiple game choices", "Computer opponent"],
    },
    {
        image: SimonGame,
        websiteLink: "https://darkrajeshow.github.io/Simon-Game-Updated/",
        gitHub: "https://github.com/DarkRajeshow/Simon-Game-Updated",
        technologyUsed: ["HTML", "CSS", "JavaScript"],
        title: "Simon Game",
        description: "Welcome to Simon, the ultimate memory challenge! Test and enhance your memory skills with this captivating game.",
        features: ["Memory challenge", "Pattern memorization", "High score tracking"],
    },
    {
        image: University,
        websiteLink: "https://darkrajeshow.github.io/University-Website/",
        gitHub: "https://github.com/DarkRajeshow/University-Website",
        technologyUsed: ["HTML", "CSS"],
        title: "University Landing Page",
        description: "Welcome to our virtual university! Explore this landing page, a testament to my web development journey and progress.",
        features: ["Educational content", "Interactive elements", "Progress demonstration"],
    },
];
