export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Olivia Brown',
      position: 'Entrepreneur',
      img: 'assets/review1.png',
      review:
        'Collaborating with Alfredo was an incredible experience. He took our outdated website and turned it into a modern, intuitive platform. His attention to detail and dedication to excellence is unparalleled. I highly recommend him for any web development projects.',
    },
    {
      id: 2,
      name: 'Pablo P',
      position: 'Entrepreneur',
      img: 'assets/review2.png',
      review:
        'Alfredo’s skill set in web development is truly remarkable. He provided us with a solid and scalable solution for our e-commerce platform, and since the launch, our online sales have seen a noticeable boost. He’s a consummate professional and delivered outstanding work.',
    },
    {
      id: 3,
      name: 'Ruben Jaen',
      position: 'Entrepreneur',
      img: 'assets/client-3.png',
      review:
        'I can’t praise Alfredo enough. He successfully turned our intricate project needs into a smooth and functional website. His ability to solve problems is exceptional.',
    },
    {
      id: 4,
      name: 'Lucas Jones',
      position: 'Entrepreneur',
      img: 'assets/review4.png',
      review:
        'It was a joy working with Alfredo. He grasped our requirements flawlessly and delivered a website that went above and beyond our expectations. His expertise in both frontend and backend development is exceptional.',
    },
  ];  
  
  export const myProjects = [
    {
      title: 'Respace - AI Redesign Platform',
      desc: 'Respace is an innovative SaaS platform that uses artificial intelligence to transform and redesign spaces. It allows users to generate multiple design options from an image or blueprint, offering creative and efficient solutions for each project.',
      subdesc:
        'Built as a unique Software-as-a-Service app with React, Tailwind CSS, JavaScript, Firebase. Respace is designed for optimal performance and scalability.',
      href: 'https://respace-ai.com/',
      texture: '/textures/project/respace.mp4',
      logo: '/assets/respace-logo.png',
      logoStyle: {
        backgroundColor: '#c4c2c2',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/logo-javascript.svg',
        },
        {
          id: 4,
          name: 'Firebase',
          path: '/assets/logo-firebase.svg',
        },
      ],
    },
    {
      title: 'Apple Clone Website',
      desc: 'Apple Clone Website is an interactive web experience that showcases the features of the iPhone 15 through mouse-scroll-controlled videos, smooth animations powered by GSAP, and a 3D model of the device in its standard, Pro, and Pro Max versions.',
      subdesc:
        'Developed with modern technologies such as React, JavaScript, Tailwind CSS, GSAP, and React Three Fiber, this application provides an immersive and fully responsive experience.',
      href: 'https://lucky-horse-88708e.netlify.app/',
      texture: '/textures/project/apple-clone.mp4',
      logo: '/assets/logo-apple.svg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'GSAP',
          path: '/assets/logo-gsap.svg',
        },
        {
          id: 4,
          name: 'React Three Fiber',
          path: '/assets/logo-threejs.svg',
        },
      ],
    },
    {
      title: 'BG Removal - AI Background Remover',
      desc: 'BG Removal simplifies image background removal, offering 5 free credits upon registration. It allows users to process images quickly with a focus on accessibility and professional results. It is an intuitive and efficient tool.',
      subdesc:
        'Developed with modern technologies such as React, JavaScript, Tailwind CSS, Node.js, Express, Firebase, Stripe, and Clerk. BG Removal ensures a secure, efficient, and responsive experience.',
      href: 'https://prismatic-torrone-638c7c.netlify.app/',
      texture: '/textures/project/bg-removal.mp4',
      logo: '/assets/bg-removal-logo.svg',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Javascript',
          path: '/assets/logo-javascript.svg',
        },
        {
          id: 4,
          name: 'Firebase',
          path: '/assets/logo-firebase.svg',
        },
      ],
    },
    {
      title: 'Gemini Clone',
      desc: "This Gemini clone allows the creation of a chat using the Gemini API with features such as creating and navigating between different chats, and the animation of gradients when receiving the LLM's response. The project aimed to optimize load times by making it lightweight and with a responsive design.",
      subdesc:
        'Built with Javascript, React, CSS, Vite, simple technologies that make the project fast and efficient.',
      href: 'https://gemini-clone-alfredo.netlify.app/',
      texture: '/textures/project/gemini-clone.mp4',
      logo: '/assets/gemini-logo.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'JavaScript',
          path: '/assets/logo-javascript.svg',
        },
        {
          id: 2,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 3,
          name: 'CSS',
          path: '/assets/logo-css.svg',
        },
        {
          id: 4,
          name: 'Vite',
          path: '/assets/vitejs.svg',
        },
      ],
    },
    {
      title: 'Archeoexplorer',
      desc: 'Archeoexplorer is a mobile and web app for exploring global archaeological sites with detailed information and photographs. It supports over 10 languages, providing an intuitive experience for enthusiasts and travelers.',
      subdesc:
        'Developed with Flutter and Firebase, Archeoexplorer leverages advanced features like image recognition, real-time chat, and in-app purchases to provide a seamless and engaging user experience.',
      href: 'https://archeoexplorer.org/',
      texture: '/textures/project/archeoexplorer.mp4',
      logo: '/assets/archeoexplorer-logo.png',
      logoStyle: {
        backgroundColor: '#fc9803',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 3,
          name: 'Flutter',
          path: '/assets/logo-flutter.svg',
        },
        {
          id: 4,
          name: 'Firebase',
          path: '/assets/logo-firebase.svg',
        },
      ],
    },
    {
      title: 'Blackjack - Online Game',
      desc: 'Blackjack is an interactive web application that offers users the opportunity to enjoy the popular card game with standard rules, an attractive design, and a smooth experience. Ideal for those looking for a fun and dynamic way to play Blackjack in their browser.',
      subdesc:
        'Developed using JavaScript, HTML, and CSS, Blackjack ensures smooth performance and responsiveness across modern web browsers.',
      href: 'https://melodic-genie-1f4e00.netlify.app/',
      texture: '/textures/project/blackjack.mp4',
      logo: '/assets/AS.png',
      logoStyle: {
        backgroundColor: '#0d9106',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/logo-html.svg',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/logo-css.svg',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/logo-javascript.svg',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Fiverr',
      position: 'Freelancer',
      duration: '2024 - Present',
      title: "I have learned Backend with Node.js and Express, creating robust APIs and managing server logic. I have also improved my Frontend skills with GSAP for animations and Three.js for 3D graphics. This has allowed me to create interactive web experiences.",
      icon: '/assets/logo-fiverr.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Fiverr',
      position: 'Freelancer',
      duration: '2023 - 2024',
      title: "I developed web applications with React.js, using React Router, Redux for routing, state management, and server-side rendering. I used Tailwind CSS for styling and Axios for API requests, ensuring dynamic and responsive user experiences.",
      icon: '/assets/logo-fiverr.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Fiverr',
      position: 'Freelancer',
      duration: '2022 - 2023',
      title: "I developed mobile applications with Flutter, focusing on creating high-performance and visually appealing apps. I managed the entire development process, from design to deployment, ensuring seamless user experiences on both iOS and Android.",
      icon: '/assets/logo-fiverr.svg',
      animation: 'salute',
    }    
  ];