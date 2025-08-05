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

  export const myCertifications = [
    {
      title: "Legacy Flutter: Tu guía completa para iOS y Android",
      institution: "Udemy",
      date: "24 de Abril del 2023",
      summary: "Aprendí a desarrollar aplicaciones móviles funcionales y visualmente atractivas con Flutter y Dart, aplicando gestión de estado, uso de APIs REST, Firebase, SQLite, notificaciones, cámara, mapas, formularios, almacenamiento local y despliegue en App Store y Play Store.",
      texture: "/textures/project/images/udemy-flutter-1.jpg",
      logo: "/assets/udemy-logo.png",
      logoBg: "bg-white",
    },
    {
      title: "Flutter - Móvil: De cero a experto",
      institution: "Udemy",
      date: "8 de Junio del 2023",
      summary: "Desarrollé aplicaciones móviles profesionales usando Flutter y Dart, aplicando buenas prácticas como Clean Code. Dominié el manejo de estado con Riverpod, Bloc y Provider, integración con APIs REST, base de datos local, notificaciones push y publicación en App Store y Play Store.",
      texture: "/textures/project/images/udemy-flutter-2.jpg",
      logo: "/assets/udemy-logo.png",
      logoBg: "bg-white",
    },
    {
      title: "Flutter móvil: Recursos Nativos - Nivel intermedio",
      institution: "Udemy",
      date: "15 de Agosto del 2023",
      summary: "Amplié mi manejo de Flutter y Dart usando recursos físicos del dispositivo: sensores, giroscopio, magnetómetro, biométricos, y permisos. Implementé streams, deep-linking, tareas en segundo plano, bases locales con Isar, AdMob, autenticación local, mapas, y optimicé proyectos con Go Router.",
      texture: "/textures/project/images/udemy-flutter-3.jpg",
      logo: "/assets/udemy-logo.png",
      logoBg: "bg-white",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      institution: "Udemy",
      date: "5 de Septiembre del 2024",
      summary: "Completé el bootcamp Python Pro con 100 proyectos en 100 días, dominando Python 3, automatización, desarrollo web (Flask, REST, APIs), ciencia de datos, bases de datos SQL, despliegue y control de versiones. Usé librerías como Pandas, NumPy, Matplotlib, Selenium y Flask.",
      texture: "/textures/project/images/udemy-python.jpg",
      logo: "/assets/udemy-logo.png",
      logoBg: "bg-white",
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      institution: "Udemy",
      date: "22 de Septiembre del 2024",
      summary: "Aprendí desarrollo web desde cero hasta nivel profesional, creando proyectos con HTML, CSS, JavaScript, React, Node.js, Express y PostgreSQL. Dominié APIs REST, control de versiones con Git, despliegue, diseño responsivo y exploré tecnologías modernas como Web3, blockchain y contratos inteligentes.",
      texture: "/textures/project/images/udemy-js.jpg",
      logo: "/assets/udemy-logo.png",
      logoBg: "bg-white",
    },
    {
      title: "JavaScript Moderno: Guía para dominar el lenguaje",
      institution: "DevTalles",
      date: "1 de Noviembre del 2024",
      summary: "Aprendí JavaScript moderno trabajando con clases, módulos, propiedades privadas, promesas, funciones generadoras, fetch, manipulación del DOM, Vite, NPM y Git. Desarrollé proyectos como un juego de Blackjack, una app CRUD sin frameworks y una lista de tareas desplegada con GitHub Pages.",
      texture: "/textures/project/images/devtalles-js.jpg",
      logo: "/assets/devtalles-logo.png",
      logoBg: "bg-purple-700",
    },
    {
      title: "React: De cero a experto ( Hooks y MERN )",
      institution: "DevTalles",
      date: "24 de Noviembre del 2024",
      summary: "Aprendí a construir aplicaciones con React utilizando hooks, context y Redux. Implementé pruebas unitarias con Jest Testing Library. Desarrollé proyectos fullstack con MERN, autentificación con JWT y Google Sign-In, despliegues en producción y manejo de bases de datos como MongoDB y Firestore.",
      texture: "/textures/project/images/devtalles-react.jpg",
      logo: "/assets/devtalles-logo.png",
      logoBg: "bg-purple-700",
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
      name: 'ClinikIA',
      position: 'Database Architect',
      duration: '2025 - Present',
      title: "Led the end-to-end design, implementation, and management of a mission-critical PostgreSQL database, handling architecture, schema design, data integrity, and performance optimization to support rapid startup growth.",
      icon: '/assets/clinikia-logo.png',
    },
    {
      id: 2,
      name: 'Nutrimind',
      position: 'Full Stack Developer',
      duration: '2025',
      title: "Designed and implemented a full-stack system for Nutrimind with a responsive frontend and custom backend services. Built a Retrieval-Augmented Generation (RAG) system using vector databases and LLMs to identify food items and generate barcodes, improving data processing efficiency.",
      icon: '/assets/nutrimind-logo.png',
    },
    {
      id: 3,
      name: 'Fiverr',
      position: 'Freelancer',
      duration: '2022 - 2024',
      title: "I built responsive websites with fast load times, CSS animations, authentication systems, and payment gateways. On the backend, I used Node.js and Express to handle requests with proper validations and implemented webhooks for events like logins and payments. Additionally, I developed cross-platform mobile apps using Flutter, integrating native device features such as the camera and geolocation. I also incorporated AI APIs for image recognition and text analysis, and implemented in-app purchase systems.",
      icon: '/assets/logo-fiverr.svg',
    }    
  ];