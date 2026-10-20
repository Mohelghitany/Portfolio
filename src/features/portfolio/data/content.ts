import type { PortfolioContent } from "../types/portfolio.types";

export const portfolioContent: PortfolioContent = {
  name: "Mohamed Elghitany",
  monogram: "ME",
  role: "Frontend-focused Software Engineer",
  summary:
    "Delivering scalable, high-performance React and Next.js applications — modernizing legacy code, migrating to TypeScript, and shipping clean, user-centered interfaces.",
  location: "New Cairo, Egypt",
  email: "melghitany2@gmail.com",
  phone: "(+20) 101 836 1232",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/Mohelghitany",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohamed-elghitany-bb5078234",
    },
  ],
  cv: {
    label: "Download CV",
    href: "https://drive.google.com/uc?export=download&id=1HDANM8hhRIJcamlzGvBQDlzGp5xY72N7",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Courses", href: "#courses" },
    { label: "Contact", href: "#contact" },
  ],
  experience: [
    {
      id: "dayra",
      company: "Dayra",
      role: "Frontend Developer",
      period: "Jul 2025 – Present",
      location: "Cairo",
      bullets: [
        "Built and maintained Dayra’s React web application and React Native mobile app with TypeScript and JavaScript, improving stability and user experience.",
        "Refactored legacy UI components and migrated key modules to TypeScript, reducing runtime type errors and simplifying maintenance.",
        "Optimized client-side performance with code-splitting and lazy loading; improved data fetching with React Query and Redux Toolkit.",
        "Mentored interns through onboarding, code reviews, pair-programming, and workshops on React best practices and TypeScript.",
      ],
    },
    {
      id: "webmasters",
      company: "Webmasters",
      role: "Intern — Full Stack Developer",
      period: "Aug 2024 – Oct 2024",
      location: "Remote",
      bullets: [
        "Implemented responsive, accessible UI components in React and TypeScript from Figma designs with cross-browser and mobile support.",
        "Collaborated with designers to iterate on UI details and improve accessibility and user experience.",
      ],
    },
    {
      id: "depi",
      company: "DEPI",
      role: "Web Development with MERN",
      period: "Apr 2024 – Oct 2024",
      location: "Cairo",
      bullets: [
        "Developed scalable React components focused on performance and reusability.",
        "Migrated and optimized components to TypeScript for stronger type safety and improved rendering architecture.",
      ],
    },
  ],
  projectFilters: [
    { id: "all", label: "All" },
    { id: "graduation", label: "Graduation Project" },
    { id: "web", label: "Web" },
    { id: "image-processing", label: "Image Processing" },
    { id: "signal-processing", label: "Signal Processing" },
    { id: "computer-graphics", label: "Computer Graphics" },
    { id: "data-structure", label: "Data Structure" },
    { id: "oop", label: "OOP" },
  ],
  projects: [
    {
      id: "diacord",
      title: "Diacord",
      description:
        "Flutter app analyzing cardiovascular–diabetes links using multitask learning, Bayesian networks, LangChain AI, and NLP, with a Node.js backend on Render.",
      categories: ["graduation"],
      tech: ["Flutter", "Node.js", "LangChain", "NLP", "Bayesian Networks"],
      href: "https://github.com/Digital-Twin-Patient-CVD-Via-Diabetes/Diacord",
    },
    {
      id: "productivity",
      title: "Productivity Web App",
      description:
        "A Next.js tracking app for performance and tasks with timers and notes for focused work sessions.",
      categories: ["web"],
      tech: ["React", "Next.js"],
      href: "https://github.com/Mohelghitany/ProductivityWebApp",
    },
    {
      id: "fox",
      title: "Fox Reddit Clone",
      description:
        "Full-stack social platform with posts on profiles or groups, chat, and customizable settings — built across Flutter, React, and MongoDB.",
      categories: ["web"],
      tech: ["Flutter", "React", "MongoDB"],
      href: "https://github.com/Mohelghitany/Fox-Reddit-Clone",
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description:
        "Full e-commerce experience powered by a fake store API with local storage persistence through billing and user flows.",
      categories: ["web"],
      tech: ["React", "JavaScript"],
      href: "https://github.com/Mohelghitany/E-commerce",
    },
    {
      id: "bundle-builder",
      title: "Bundle Builder",
      description:
        "Full-stack bundle builder with a multi-step configuration flow, live review panel, variant management, and persistent saved configurations.",
      categories: ["web"],
      tech: ["React", "Express"],
      href: "https://github.com/Mohelghitany/bundle-builder",
    },
    {
      id: "atc",
      title: "Event Booking System",
      description:
        "Full-stack event booking platform for browsing and booking events, managing reservations, and administering events from a web panel.",
      categories: ["web"],
      tech: ["JavaScript", "React"],
      href: "https://github.com/Mohelghitany/ATC-01018361232",
    },
    {
      id: "signal-equalizer",
      title: "Signal Equalizer",
      description:
        "Web app with four modes — uniform, music, speech, and biomedical — letting users adjust signal frequencies with sliders and play results instantly.",
      categories: ["signal-processing", "web"],
      tech: ["Web", "Signal Processing"],
    },
    {
      id: "vtk-graphics",
      title: "Computer Graphics and Visualization",
      description:
        "Desktop application using C++, VTK, OpenGL, Qt, and CMake to create 2D/3D shapes from lines and apply transform operations.",
      categories: ["computer-graphics"],
      tech: ["C++", "VTK", "OpenGL", "Qt", "CMake"],
      href: "https://github.com/Zyadsowilam/Drawing-desktop-app",
    },
    {
      id: "cargo",
      title: "Cargo Delivery",
      description:
        "Efficient cargo management with C++ data structures and algorithms, optimizing loads for trucks and calculating averages.",
      categories: ["data-structure"],
      tech: ["C++", "Data Structures"],
      href: "https://github.com/Mohelghitany/shippingcompanyds",
    },
    {
      id: "internist",
      title: "Internist Web System",
      description:
        "Laravel, PHP, and MySQL system for patient records and medical appointments with scheduling and streamlined clinical workflows.",
      categories: ["web"],
      tech: ["Laravel", "PHP", "MySQL"],
    },
    {
      id: "face-detection",
      title: "Face Detection",
      description:
        "Python system using the Haar cascade classifier to detect and distinguish faces in imported media.",
      categories: ["image-processing"],
      tech: ["Python", "OpenCV"],
    },
    {
      id: "digital-filter",
      title: "Digital Filter Design",
      description:
        "Interactive site for designing digital filters via zero/pole placement on the z-plane, with magnitude and phase plots.",
      categories: ["signal-processing", "web"],
      tech: ["JavaScript", "Signal Processing"],
    },
    {
      id: "ecg",
      title: "ECG Analyser",
      description:
        "Electrocardiography input classified as normal or abnormal with machine learning and Fourier analysis — ~84% accuracy.",
      categories: ["signal-processing", "image-processing"],
      tech: ["Python", "Machine Learning", "Fourier Transform"],
    },
    {
      id: "snake-monopoly",
      title: "Snake-Monopoly Game",
      description:
        "C++ game combining classic Snake mechanics with Monopoly-inspired board play and custom game rules.",
      categories: ["oop"],
      tech: ["C++", "OOP"],
    },
  ],
  skills: [
    {
      id: "frontend",
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Redux Toolkit",
        "React Query",
        "Qt",
      ],
    },
    {
      id: "languages",
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "C++", "Dart", "PHP"],
    },
    {
      id: "backend",
      title: "Backend & Databases",
      skills: ["Node.js", "Laravel", "MySQL", "MongoDB"],
    },
    {
      id: "mobile",
      title: "Mobile",
      skills: ["React Native", "Flutter"],
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      skills: ["Pandas", "Scikit-learn", "Jupyter Notebook", "TensorFlow"],
    },
    {
      id: "other",
      title: "Other",
      skills: ["Git", "GitHub", "Matlab"],
    },
  ],
  courses: [
    {
      id: "ml-supervised",
      title: "Regression and Classification",
      subtitle: "Supervised Machine Learning — Coursera",
      description:
        "Build machine learning models in Python with NumPy and scikit-learn, including linear and logistic regression for prediction and binary classification.",
    },
    {
      id: "ml-advanced",
      title: "Advanced Learning Algorithms",
      subtitle: "Machine Learning Specialization — Coursera",
      description:
        "Train neural networks with TensorFlow for multi-class classification; apply decision trees, random forests, and boosted trees with generalization best practices.",
    },
    {
      id: "ml-unsupervised",
      title: "Unsupervised Learning",
      subtitle: "Coursera",
      description:
        "Apply clustering and anomaly detection, build deep reinforcement learning models, and create recommender systems with collaborative filtering and content-based deep learning.",
    },
    {
      id: "depi-react",
      title: "Web Development React — DEPI",
      description:
        "Build interactive web applications with components, state, props, JSX, hooks, and efficient rendering techniques.",
    },
  ],
  education: [
    {
      id: "cairo-uni",
      degree: "Software and Biomedical Engineering",
      institution: "Cairo University",
      period: "Oct 2020 – Jun 2025",
      location: "Giza, Egypt",
    },
  ],
};
