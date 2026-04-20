export type Locale = "es" | "en";

type ContactItem = {
  platform: string;
  href: string;
  image: string;
  visible: string;
  isEmail?: boolean;
};

type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  images: string;
  url: string;
};

type TechnologyItem = {
  name: string;
  image: string;
};

export const siteCopy = {
  es: {
    nav: {
      links: [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Perfil" },
        { href: "/proyectos", label: "Proyectos" },
        { href: "/contacto", label: "Contacto" },
      ],
      role: "Full Stack Developer",
      toggleTheme: {
        dark: "Cambiar a tema oscuro",
        light: "Cambiar a tema claro",
      },
      toggleLanguage: "Traducir todo al ingles",
      languageBadge: "EN",
    },
    footer: {
      brand: "Joaquin Delgado | Full Stack Developer",
      text: "Portafolio 2026 diseñado para mostrar criterio, ejecucion y claridad tecnica.",
    },
    home: {
      heroStats: [
        { value: "10+", label: "proyectos publicados" },
        { value: "Full Stack", label: "perfil tecnico" },
        { value: "Frontend + backend", label: "criterio end to end" },
      ],
      eyebrow: "Portfolio 2026",
      title:
        "Desarrollo experiencias web que se ven solidas y se sienten bien desde el primer scroll.",
      lead: "Soy Joaquin Delgado, desarrollador full stack. Me enfoco en construir productos con interfaces limpias, animaciones cuidadas y una base tecnica que ayude a convertir una buena idea en una experiencia confiable.",
      primaryAction: "Ver proyectos destacados",
      secondaryAction: "Contactar ahora",
      thirdAction: "Ver CV completo",
      floatingNoteLabel: "Disponible para nuevos desafios",
      floatingNoteTitle: "Frontend, backend y producto",
      storyEyebrow: "Lo que aporto",
      storyTitle: "Una presentacion tecnica que tambien transmite criterio.",
      featuredEyebrow: "Proyectos clave",
      featuredTitle: "Trabajo pensado para demostrar capacidad real.",
      featuredLink: "Ver todos los proyectos",
      openProject: "Abrir demo o repositorio",
      stackEyebrow: "Stack",
      stackTitle: "Tecnologias con las que puedo sumar valor rapido.",
      stackLead:
        "Organice el stack por categoria para que un reclutador pueda leerlo rapido y entender en que entornos me muevo con mayor comodidad.",
      presentation: [
        {
          title: "Construyo productos claros y usables",
          description:
            "Desarrollo interfaces y APIs que priorizan una experiencia intuitiva, buena estructura tecnica y resultados que se pueden mostrar con confianza.",
        },
        {
          title: "Full stack con foco en ejecucion",
          description:
            "Trabajo con React, Next.js, TypeScript, NestJS, FastAPI y PostgreSQL para resolver flujos completos, desde la interfaz hasta la logica del negocio.",
        },
        {
          title: "Aprendizaje constante y criterio practico",
          description:
            "Vengo formandome de manera autodidacta, con estudios complementarios, y busco crecer construyendo proyectos que tengan impacto real y una base tecnica solida.",
        },
      ],
    },
    about: {
      eyebrow: "Perfil profesional",
      title: "Tecnologia, criterio visual y ganas reales de construir bien.",
      lead: "Me interesa desarrollar productos web que se vean solidos, funcionen con claridad y resuelvan necesidades concretas. Mi foco esta en el trabajo full stack, sin perder de vista la experiencia del usuario ni el impacto de negocio.",
      summaryLabel: "En una mirada",
      summaryTitle: "Desarrollador full stack orientado a producto",
      summaryText:
        "Priorizo codigo mantenible, interfaces cuidadas y una comunicacion tecnica clara para que el trabajo se entienda rapido.",
      strengthsEyebrow: "Fortalezas",
      strengths: [
        "Interfaces responsive con buena jerarquia visual",
        "Backends con autenticacion, CRUD y estructura clara",
        "Integracion entre frontend, API y base de datos",
        "Pensamiento orientado a producto y experiencia final",
      ],
      workEyebrow: "Como trabajo",
      workText:
        "Me gusta ordenar bien la informacion, detectar donde una interfaz puede mejorar y conectar eso con una implementacion tecnica prolija. Disfruto mucho cuando el resultado final se siente simple para la persona usuaria, incluso si por detras hubo bastante trabajo.",
      journeyEyebrow: "Recorrido",
      journeyTitle: "Aprendizaje continuo con foco practico.",
      journey: [
        {
          title: "Base autodidacta",
          text: "Construyo mi carrera aprendiendo con practica constante, documentacion y proyectos que me obligan a resolver problemas reales.",
        },
        {
          title: "Formacion complementaria",
          text: "Sume bootcamp y estudios tecnicos para reforzar fundamentos, mejorar criterio y consolidar una forma de trabajo mas profesional.",
        },
        {
          title: "Perfil en crecimiento",
          text: "Busco seguir evolucionando dentro de equipos donde pueda aportar ejecucion, aprender rapido y participar en productos que importen.",
        },
      ],
    },
    projectsPage: {
      eyebrow: "Portfolio de proyectos",
      title: "Casos donde combine frontend, backend y resolucion real.",
      lead: "Esta seleccion muestra variedad tecnica, desde CRUDs completos y autenticacion hasta integraciones con APIs, dashboards y experiencias responsive. La idea es que cada pieza deje ver como pienso, implemento y presento el trabajo.",
      viewProject: "Ver proyecto",
      comingSoon: "Proximamente",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Canales directos para avanzar rapido.",
      lead: "Si queres conversar sobre una vacante, una colaboracion o simplemente ver algun proyecto con mas detalle, aca estan mis canales principales.",
      directEmail: "Enviar correo directo",
      openChannel: "Abrir canal de contacto",
      items: [
        {
          platform: "Email",
          href: "mailto:joaquinDamian.dev@gmail.com",
          image: "/image/contacto/email.png",
          visible: "JoaquinDamian.dev@gmail.com",
          isEmail: true,
        },
        {
          platform: "LinkedIn",
          href: "https://www.linkedin.com/in/joaquin-damian-delgado-1643a3373/",
          image: "/image/contacto/linkedin.png",
          visible: "Joaquin Damian Delgado",
        },
        {
          platform: "GitHub",
          href: "https://github.com/JDamianDelgado",
          image: "/image/contacto/github.png",
          visible: "JDamianDelgado",
        },
        {
          platform: "WhatsApp",
          href: "https://wa.me/5493875768371?text=Hola%20Joaqu%C3%ADn,%20vi%20tu%20portfolio%20y%20quer%C3%ADa%20contactarte.",
          image: "/image/contacto/whatsapp.png",
          visible: "+543875768371",
        },
      ] satisfies ContactItem[],
    },
    categories: {
      lenguajes: "Lenguajes",
      frontend: "Frontend",
      backend: "Backend",
      basesDeDatos: "Bases de datos",
      herramientas: "Herramientas",
    },
    projects: [
      {
        slug: "portafolio-react",
        title: "Portafolio personal en React",
        description:
          "Desarrollo de un portafolio personal utilizando React, con diseño responsive y animaciones. El proyecto incluye secciones de presentación, habilidades, proyectos destacados y contacto, con un enfoque en la experiencia del usuario y la estética visual.",
        technologies: ["React", "CSS", "JavaScript", "Vite", "Framer Motion"],
        images: "/image/proyectos/Portafolio/image.png",
        url: "https://portafolio-20-eta.vercel.app/",
      },
      {
        slug: "gestor-tareas-app",
        title: "Gestor de tareas con CRUD y estado",
        description:
          "Aplicacion de gestion de tareas con listado, creacion, edicion y eliminacion. El frontend esta hecho con Next.js y TypeScript, con estilos en Tailwind CSS. El backend es una API en FastAPI que expone endpoints REST y persiste datos en Supabase y PostgreSQL.",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Python",
          "FastAPI",
          "Supabase",
          "PostgreSQL",
        ],
        images: "/image/proyectos/GestorTareas/image.png",
        url: "https://gestor-tareas-nine.vercel.app/",
      },
      {
        slug: "agenda-turnos-app",
        title: "Agenda de turnos con gestion completa",
        description:
          "Aplicacion de agenda de turnos que permite a usuarios registrarse y reservar, a profesionales crear y administrar horarios de atencion, y a administradores gestionar usuarios y turnos. Incluye autenticacion JWT, Redux, TypeScript y notificaciones por correo electronico.",
        technologies: [
          "React",
          "Redux",
          "NodeJS",
          "PostgreSQL",
          "NestJS",
          "JWT",
          "TypeScript",
        ],
        images: "/image/proyectos/AgendaTurnos/agenda.png",
        url: "https://pagina-elizabeth.vercel.app/",
      },
      {
        slug: "analisis-de-datos-con-python",
        title: "Analisis de datos con Python",
        description:
          "Aplicacion para analisis de datos utilizando Python y bibliotecas como Pandas y NumPy. Permite manipulacion y visualizacion de datos, incluyendo graficos y estadisticas descriptivas.",
        technologies: [
          "Dataset (Kaggle)",
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Streamlit",
        ],
        images: "/image/proyectos/AnalisisDatos/image.png",
        url: "https://xznaf8p5ea7utwdm6som6t.streamlit.app/",
      },
      {
        slug: "clon-de-chat",
        title: "Clon de chat con respuesta automatica",
        description:
          "Clon de un sistema de mensajeria donde los usuarios pueden agregar contactos, enviar y recibir mensajes en tiempo real y ver respuestas automaticas. Desarrollado en React con hooks y estados, simulando un backend con mock.",
        technologies: ["React", "Hooks"],
        images: "/image/proyectos/ClonChat/image.png",
        url: "https://clone-chat-react.vercel.app/",
      },
      {
        slug: "simulador-chat-angular",
        title: "Clon de chat con Angular",
        description:
          "Simulador de chat desarrollado con arquitectura basada en componentes, servicios y pipes. Permite crear y buscar chats por nombre, asignar imagenes y mostrar la ultima conexion y fecha de mensajes en una interfaz clara.",
        technologies: [
          "Angular",
          "Routes",
          "Pipes",
          "Servicios",
          "Componentes",
        ],
        images: "/image/proyectos/ClonChatAngular/image.png",
        url: "https://angular-trabajo-final-chat-utn.vercel.app/chats/19",
      },
      {
        slug: "manejo-de-api",
        title: "Manejo de APIs con React",
        description:
          "Implementacion y consumo de una API RESTful desarrollada con FastAPI, permitiendo manipulacion eficiente de datos desde React, enrutamiento dinamico y diseno responsive utilizando Tailwind CSS.",
        technologies: ["React", "FastAPI", "Tailwind"],
        images: "/image/proyectos/Apis/img1.png",
        url: "https://github.com/JDamianDelgado/ApiRestFul-Practice",
      },
      {
        slug: "dragon-ball-z-react",
        title: "Dragon Ball Z - Explorador de personajes",
        description:
          "Aplicacion interactiva desarrollada con React que permite explorar personajes del universo Dragon Ball Z. Incluye cards con zoom, vista detallada, responsive design y consumo de APIs externas.",
        technologies: ["React", "Axios", "Redux Toolkit", "CSS", "Vite"],
        images: "/image/proyectos/ReactApiExterna/captura1.png",
        url: "https://react-vite-consumiendo-una-api-exte-five.vercel.app/",
      },
      {
        slug: "ecommerce",
        title: "E-commerce para petshop",
        description:
          "Desarrollo de una plataforma de comercio electronico utilizando NestJS con base de datos PostgreSQL alojada en Supabase, implementando autenticacion JWT y pagos. El frontend fue construido con React y desplegado en Vercel.",
        technologies: [
          "React",
          "NestJS",
          "PostgreSQL",
          "Supabase",
          "Vercel",
          "JWT",
        ],
        images: "/image/proyectos/petshop/img2.png",
        url: "https://eccommerce-pet-shop-w8px.vercel.app/",
      },
      {
        slug: "gestor-de-turnos",
        title: "Gestor de turnos con PostgreSQL",
        description:
          "Desarrollo de un sistema de gestion de turnos medicos utilizando NestJS con base de datos PostgreSQL y autenticacion JWT, alojado en Supabase. El frontend fue implementado con React y alojado en Vercel.",
        technologies: [
          "React",
          "NestJS",
          "PostgreSQL",
          "Supabase",
          "Vercel",
          "JWT",
        ],
        images: "/image/proyectos/gestorTurnos/image.png",
        url: "https://github.com/JDamianDelgado/GestionDeTurnos",
      },
      {
        slug: "backend-sitio-web",
        title: "Backend para plataforma de cementerio",
        description:
          "Forme parte del equipo de backend en el desarrollo de una plataforma de gestion de cementerios, permitiendo la administracion de sepulturas, mantenimiento y organizacion de eventos conmemorativos de forma digital.",
        technologies: [
          "NestJS",
          "PostgreSQL",
          "Supabase",
          "JWT",
          "Nodemailer",
          "Mercado Pago",
          "Autenticacion con Google",
          "POO",
        ],
        images: "/image/proyectos/valle de paz/image.png",
        url: "https://github.com/JDamianDelgado/ValleDePaz",
      },
      {
        slug: "registro-react",
        title: "Formulario de registro en React",
        description:
          "Proyecto practico enfocado en formularios interactivos con validacion, manejo de estados y responsive design. Permite mejorar la experiencia del usuario y afianzar el uso de hooks y componentes controlados.",
        technologies: ["React", "React Router", "React DOM", "CSS"],
        images: "/image/proyectos/React/image.png",
        url: "https://github.com/JDamianDelgado/Registro-React",
      },
      {
        slug: "proximamente",
        title: "",
        description: "Proximamente nuevos proyectos con nuevas tecnologias...",
        technologies: ["Python", "AWS", "Angular", "y muchos mas..."],
        images: "/image/proyectos/image.png",
        url: "https://github.com/JDamianDelgado",
      },
    ] satisfies Project[],
    technologies: {
      lenguajes: [
        { name: "JavaScript", image: "/image/tecnologias/javascript.png" },
        { name: "TypeScript", image: "/image/tecnologias/Typescript.png" },
        { name: "Python", image: "/image/tecnologias/python.png" },
        { name: "HTML5", image: "/image/tecnologias/html5.png" },
        { name: "CSS3", image: "/image/tecnologias/css.png" },
      ],
      frontend: [
        { name: "React", image: "/image/tecnologias/react.png" },
        { name: "Next.js", image: "/image/tecnologias/next.png" },
        {
          name: "Redux Toolkit",
          image: "/image/tecnologias/redux.toolkit.png",
        },
        { name: "React Query", image: "/image/tecnologias/react-query.png" },
        { name: "Tailwind CSS", image: "/image/tecnologias/tailwind.png" },
      ],
      backend: [
        { name: "Node.js", image: "/image/tecnologias/Node.js.png" },
        { name: "NestJS", image: "/image/tecnologias/nestjs.png" },
        { name: "Express", image: "/image/tecnologias/express.png" },
        { name: "TypeORM", image: "/image/tecnologias/type-orm.png" },
        { name: "JWT", image: "/image/tecnologias/jwt.png" },
        { name: "REST API", image: "/image/tecnologias/restApi.png" },
      ],
      basesDeDatos: [
        { name: "PostgreSQL", image: "/image/tecnologias/postgres.png" },
        { name: "MongoDB", image: "/image/tecnologias/mongoDb.png" },
        { name: "Supabase", image: "/image/tecnologias/supabase.png" },
      ],
      herramientas: [
        { name: "Git", image: "/image/tecnologias/git2.png" },
        { name: "GitHub", image: "/image/tecnologias/git.png" },
        { name: "Docker", image: "/image/tecnologias/docker.png" },
        { name: "Postman", image: "/image/tecnologias/postman.png" },
        { name: "Swagger", image: "/image/tecnologias/swagger.png" },
        { name: "VS Code", image: "/image/tecnologias/vscode.png" },
        { name: "Slack", image: "/image/tecnologias/Slack.png" },
        { name: "Discord", image: "/image/tecnologias/Discord.png" },
        { name: "Thunder Client", image: "/image/tecnologias/thunder.png" },
      ],
    } satisfies Record<string, TechnologyItem[]>,
  },
  en: {
    nav: {
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/proyectos", label: "Projects" },
        { href: "/contacto", label: "Contact" },
      ],
      role: "Full Stack Developer",
      toggleTheme: {
        dark: "Switch to dark theme",
        light: "Switch to light theme",
      },
      toggleLanguage: "Translate everything to Spanish",
      languageBadge: "ES",
    },
    footer: {
      brand: "Joaquin Delgado | Full Stack Developer",
      text: "Portfolio designed to show judgment, execution, and technical clarity.",
    },
    home: {
      heroStats: [
        { value: "10+", label: "published projects" },
        { value: "Full Stack", label: "technical profile" },
        { value: "UX + backend", label: "end-to-end mindset" },
      ],
      eyebrow: "Portfolio 2026",
      title:
        "I build web experiences that look solid and feel right from the very first scroll.",
      lead: "I am Joaquin Delgado, a full stack developer focused on building products with clean interfaces, thoughtful motion, and a technical foundation that turns a good idea into a reliable experience.",
      primaryAction: "See featured projects",
      secondaryAction: "Get in touch",
      thirdAction: "View full CV",
      floatingNoteLabel: "Available for new challenges",
      floatingNoteTitle: "Frontend, backend, and product",
      storyEyebrow: "What I bring",
      storyTitle: "A technical presentation that also communicates judgment.",
      featuredEyebrow: "Key projects",
      featuredTitle: "Work designed to demonstrate real capability.",
      featuredLink: "See all projects",
      openProject: "Open demo or repository",
      stackEyebrow: "Stack",
      stackTitle: "Technologies I can use to add value quickly.",
      stackLead:
        "I organized the stack by category so recruiters can scan it quickly and understand the environments where I am most comfortable.",
      presentation: [
        {
          title: "I build products that are clear and usable",
          description:
            "I create interfaces and APIs that prioritize intuitive experiences, sound technical structure, and results that can be presented with confidence.",
        },
        {
          title: "Full stack with an execution mindset",
          description:
            "I work with React, Next.js, TypeScript, NestJS, FastAPI, and PostgreSQL to solve complete flows, from interface to business logic.",
        },
        {
          title: "Continuous learning with practical judgment",
          description:
            "I have grown through self-directed learning and complementary studies, and I want to keep growing by building projects with real impact and a strong technical base.",
        },
      ],
    },
    about: {
      eyebrow: "Professional profile",
      title:
        "Technology, visual judgment, and a real drive to build things well.",
      lead: "I want to develop web products that look solid, work clearly, and solve concrete needs. My focus is full stack work without losing sight of user experience or business impact.",
      summaryLabel: "At a glance",
      summaryTitle: "Product-oriented full stack developer",
      summaryText:
        "I prioritize maintainable code, polished interfaces, and clear technical communication so the work is easy to understand quickly.",
      strengthsEyebrow: "Strengths",
      strengths: [
        "Responsive interfaces with strong visual hierarchy",
        "Backends with authentication, CRUD, and clear structure",
        "Integration across frontend, API, and database",
        "Product-oriented thinking with focus on the final experience",
      ],
      workEyebrow: "How I work",
      workText:
        "I like organizing information well, spotting where an interface can improve, and connecting that to a clean implementation. I enjoy when the final result feels simple for the user, even if there was a lot of work behind it.",
      journeyEyebrow: "Journey",
      journeyTitle: "Continuous learning with a practical focus.",
      journey: [
        {
          title: "Self-taught foundation",
          text: "I am building my career through constant practice, documentation, and projects that push me to solve real problems.",
        },
        {
          title: "Complementary training",
          text: "I added bootcamp experience and technical studies to strengthen fundamentals, improve judgment, and work in a more professional way.",
        },
        {
          title: "Growing profile",
          text: "I want to keep evolving within teams where I can contribute through execution, learn fast, and help build products that matter.",
        },
      ],
    },
    projectsPage: {
      eyebrow: "Project portfolio",
      title:
        "Cases where I combined frontend, backend, and real problem solving.",
      lead: "This selection shows technical range, from complete CRUD flows and authentication to API integrations, dashboards, and responsive experiences. The idea is for each piece to show how I think, implement, and present work.",
      viewProject: "View project",
      comingSoon: "Coming soon",
    },
    contact: {
      eyebrow: "Contact",
      title: "Direct channels to move things forward quickly.",
      lead: "If you want to talk about a role, a collaboration, or simply review a project in more detail, here are my main contact channels.",
      directEmail: "Send direct email",
      openChannel: "Open contact channel",
      items: [
        {
          platform: "Email",
          href: "mailto:joaquinDamian.dev@gmail.com",
          image: "/image/contacto/email.png",
          visible: "JoaquinDamian.dev@gmail.com",
          isEmail: true,
        },
        {
          platform: "LinkedIn",
          href: "https://www.linkedin.com/in/joaquin-damian-delgado-1643a3373/",
          image: "/image/contacto/linkedin.png",
          visible: "Joaquin Damian Delgado",
        },
        {
          platform: "GitHub",
          href: "https://github.com/JDamianDelgado",
          image: "/image/contacto/github.png",
          visible: "JDamianDelgado",
        },
        {
          platform: "WhatsApp",
          href: "https://wa.me/5493875768371?text=Hello%20Joaquin,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out.",
          image: "/image/contacto/whatsapp.png",
          visible: "+543875768371",
        },
      ] satisfies ContactItem[],
    },
    categories: {
      lenguajes: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      basesDeDatos: "Databases",
      herramientas: "Tools",
    },
    projects: [
      {
        slug: "portafolio-react",
        title: "Personal Portfolio in React",
        description:
          "Development of a personal portfolio using React, with responsive design and animations. The project includes sections for introduction, skills, featured projects, and contact, with a focus on user experience and visual aesthetics.",
        technologies: ["React", "CSS", "JavaScript", "Vite", "Framer Motion"],
        images: "/image/proyectos/Portafolio/image.png",
        url: "https://portafolio-20-eta.vercel.app/",
      },
      {
        slug: "task-manager-app",
        title: "Task manager with CRUD and state",
        description:
          "Task management app with listing, creation, editing, and deletion. The frontend is built with Next.js and TypeScript using Tailwind CSS. The backend is a FastAPI service exposing REST endpoints and persisting data in Supabase and PostgreSQL.",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Python",
          "FastAPI",
          "Supabase",
          "PostgreSQL",
        ],
        images: "/image/proyectos/GestorTareas/image.png",
        url: "https://gestor-tareas-nine.vercel.app/",
      },
      {
        slug: "appointments-scheduler-app",
        title: "Appointment scheduler with full management",
        description:
          "Scheduling app that allows users to register and book, professionals to create and manage availability, and admins to manage users and appointments. It includes JWT authentication, Redux, TypeScript, and email notifications.",
        technologies: [
          "React",
          "Redux",
          "NodeJS",
          "PostgreSQL",
          "NestJS",
          "JWT",
          "TypeScript",
        ],
        images: "/image/proyectos/AgendaTurnos/agenda.png",
        url: "https://pagina-elizabeth.vercel.app/",
      },
      {
        slug: "data-analysis-with-python",
        title: "Data analysis with Python",
        description:
          "Application for data analysis using Python and libraries such as Pandas and NumPy. It supports data manipulation and visualization, including charts and descriptive statistics.",
        technologies: [
          "Dataset (Kaggle)",
          "Python",
          "Pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Streamlit",
        ],
        images: "/image/proyectos/AnalisisDatos/image.png",
        url: "https://xznaf8p5ea7utwdm6som6t.streamlit.app/",
      },
      {
        slug: "chat-clone",
        title: "Chat clone with automated replies",
        description:
          "Clone of a messaging system where users can add contacts, send and receive real-time messages, and see automated replies. Built in React with hooks and state, using a mocked backend.",
        technologies: ["React", "Hooks"],
        images: "/image/proyectos/ClonChat/image.png",
        url: "https://clone-chat-react.vercel.app/",
      },
      {
        slug: "angular-chat-simulator",
        title: "Chat clone with Angular",
        description:
          "Chat simulator built with a component-based architecture using services and pipes. It supports creating and searching chats by name, assigning images, and displaying last connection and message date in a clear interface.",
        technologies: ["Angular", "Routes", "Pipes", "Services", "Components"],
        images: "/image/proyectos/ClonChatAngular/image.png",
        url: "https://angular-trabajo-final-chat-utn.vercel.app/chats/19",
      },
      {
        slug: "api-handling",
        title: "API handling with React",
        description:
          "Implementation and consumption of a RESTful API built with FastAPI, enabling efficient data handling from React, dynamic routing, and responsive design with Tailwind CSS.",
        technologies: ["React", "FastAPI", "Tailwind"],
        images: "/image/proyectos/Apis/img1.png",
        url: "https://github.com/JDamianDelgado/ApiRestFul-Practice",
      },
      {
        slug: "dragon-ball-z-react",
        title: "Dragon Ball Z character explorer",
        description:
          "Interactive React app to explore Dragon Ball Z characters. It includes zoom cards, a detailed view for each character, responsive design, external API requests, state handling, and reusable components.",
        technologies: ["React", "Axios", "Redux Toolkit", "CSS", "Vite"],
        images: "/image/proyectos/ReactApiExterna/captura1.png",
        url: "https://react-vite-consumiendo-una-api-exte-five.vercel.app/",
      },
      {
        slug: "ecommerce",
        title: "Pet shop e-commerce",
        description:
          "Development of an e-commerce platform using NestJS with a PostgreSQL database hosted on Supabase, implementing JWT authentication and payments. The frontend was built with React and deployed on Vercel.",
        technologies: [
          "React",
          "NestJS",
          "PostgreSQL",
          "Supabase",
          "Vercel",
          "JWT",
        ],
        images: "/image/proyectos/petshop/img2.png",
        url: "https://eccommerce-pet-shop-w8px.vercel.app/",
      },
      {
        slug: "appointment-manager",
        title: "Appointment manager with PostgreSQL",
        description:
          "Development of a medical appointment management system using NestJS with a PostgreSQL database and JWT authentication, hosted on Supabase. The frontend was implemented with React and hosted on Vercel.",
        technologies: [
          "React",
          "NestJS",
          "PostgreSQL",
          "Supabase",
          "Vercel",
          "JWT",
        ],
        images: "/image/proyectos/gestorTurnos/image.png",
        url: "https://github.com/JDamianDelgado/GestionDeTurnos",
      },
      {
        slug: "backend-web-platform",
        title: "Backend for cemetery platform",
        description:
          "I was part of the backend team building a cemetery management platform, enabling the administration of burial plots, maintenance, and commemorative events in a digital workflow.",
        technologies: [
          "NestJS",
          "PostgreSQL",
          "Supabase",
          "JWT",
          "Nodemailer",
          "Mercado Pago",
          "Google Authentication",
          "OOP",
        ],
        images: "/image/proyectos/valle de paz/image.png",
        url: "https://github.com/JDamianDelgado/ValleDePaz",
      },
      {
        slug: "react-registration-form",
        title: "Registration form in React",
        description:
          "Practice project focused on interactive forms with validation, state handling, and responsive design. It improves user experience and reinforces the use of hooks and controlled components in React.",
        technologies: ["React", "React Router", "React DOM", "CSS"],
        images: "/image/proyectos/React/image.png",
        url: "https://github.com/JDamianDelgado/Registro-React",
      },
      {
        slug: "coming-soon",
        title: "",
        description: "More projects and new technologies coming soon...",
        technologies: ["Python", "AWS", "Angular", "and many more..."],
        images: "/image/proyectos/image.png",
        url: "https://github.com/JDamianDelgado",
      },
    ] satisfies Project[],
    technologies: {
      lenguajes: [
        { name: "JavaScript", image: "/image/tecnologias/javascript.png" },
        { name: "TypeScript", image: "/image/tecnologias/Typescript.png" },
        { name: "Python", image: "/image/tecnologias/python.png" },
        { name: "HTML5", image: "/image/tecnologias/html5.png" },
        { name: "CSS3", image: "/image/tecnologias/css.png" },
      ],
      frontend: [
        { name: "React", image: "/image/tecnologias/react.png" },
        { name: "Next.js", image: "/image/tecnologias/next.png" },
        {
          name: "Redux Toolkit",
          image: "/image/tecnologias/redux.toolkit.png",
        },
        { name: "React Query", image: "/image/tecnologias/react-query.png" },
        { name: "Tailwind CSS", image: "/image/tecnologias/tailwind.png" },
      ],
      backend: [
        { name: "Node.js", image: "/image/tecnologias/Node.js.png" },
        { name: "NestJS", image: "/image/tecnologias/nestjs.png" },
        { name: "Express", image: "/image/tecnologias/express.png" },
        { name: "TypeORM", image: "/image/tecnologias/type-orm.png" },
        { name: "JWT", image: "/image/tecnologias/jwt.png" },
        { name: "REST API", image: "/image/tecnologias/restApi.png" },
      ],
      basesDeDatos: [
        { name: "PostgreSQL", image: "/image/tecnologias/postgres.png" },
        { name: "MongoDB", image: "/image/tecnologias/mongoDb.png" },
        { name: "Supabase", image: "/image/tecnologias/supabase.png" },
      ],
      herramientas: [
        { name: "Git", image: "/image/tecnologias/git2.png" },
        { name: "GitHub", image: "/image/tecnologias/git.png" },
        { name: "Docker", image: "/image/tecnologias/docker.png" },
        { name: "Postman", image: "/image/tecnologias/postman.png" },
        { name: "Swagger", image: "/image/tecnologias/swagger.png" },
        { name: "VS Code", image: "/image/tecnologias/vscode.png" },
        { name: "Slack", image: "/image/tecnologias/Slack.png" },
        { name: "Discord", image: "/image/tecnologias/Discord.png" },
        { name: "Thunder Client", image: "/image/tecnologias/thunder.png" },
      ],
    } satisfies Record<string, TechnologyItem[]>,
  },
} as const;
