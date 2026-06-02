import { useState, useEffect } from 'react'
import './App.css'
import { X, Github, Calendar, Code, Mail, Linkedin, Briefcase, GraduationCap, Award, User, ExternalLink, ChevronRight, Moon, Sun } from 'lucide-react';

// Projects data structure
const projectsData = {
  projects: [
    {
      id: 1,
      title: "Hierarchical Galaxy Morphology Classification System (In progress)",
      category: "Machine Learning & AI",
      technologies: ["Python", "Jupyter Notebook", "PyTorch", "Computer Vision", "CRISP-DM"],
      shortDescription: "Hierarchical deep learning system classifying galaxies into their morphological types, addressing data processing challenges in atronomy",
      fullDescription: "An advanced hierarchical classification system designed to automate galaxy morphology classification following the Hubble sequence taxonomy. Built using transfer learning with ResNet-18 for feature extraction and custom multi-level classifier heads, the system processes 4,458 professionally-labeled astronomical images from the EFIGI catalogue. Implements three architectural approaches: flat baseline, classifier-per-level, and classifier-per-node, with the hierarchical per-node architecture achieving superior performance particularly on severely underrepresented classes. The project demonstrates end-to-end ML pipeline development following modified CRISP-DM methodology, addressing real-world challenges of extreme class imbalance and enabling automated processing of millions of unlabeled galaxy images in modern astronomical surveys.",
      highlights: [
        "mplemented three model variants: flat baseline, classifier-per-level, and classifier-per-node",
        "75% macro F1 (fine-grained) 84% hierarchical macro F1, 96% accuracy (coarse-level) using classifier-per-node",
        "Improved rarest class from 46% to 75% F1 through hierarchical architecture",
        "ResNet-18 transfer learning with ImageNet pretraining, fine-tuned on EFIGI galaxy images",
        "Custom hierarchical loss with balanced class weights addressing <1% representation",
        "Data augmentation: 360° rotation, horizontal/vertical flips preserving morphology",
        "Train/val/test split: 3,120/445/891 images with stratified sampling"
      ],
      github: "https://github.com/DavidThorn03/Galaxy-Classifier",
      date: "2025 (In Progress)",
      impact: "Enables scalable processing of astronomical survey data with accuracy comparable to domain experts, supporting research into galactic evolution and universe composition. Demonstrates handling of hierarchical classification problems with extreme class imbalance applicable to other domains."
    },
    {
      id: 2,
      title: "Heart Disease Prediction Model",
      category: "Machine Learning",
      technologies: ["Python", "scikit-learn", "Random Forest", "R", "pandas", "NumPy"],
      shortDescription: "Random Forest classifier achieving 95% recall for heart disease diagnosis through optimized feature selection and data preparation.",
      fullDescription: "A comprehensive machine learning system for medical diagnosis using Random Forest classification on 1,080 patient records with 19 clinical features. The project demonstrates end-to-end ML pipeline development following CRISP-DM methodology, from exploratory data analysis in R through model deployment. Implemented rigorous data quality controls including outlier removal, missing value handling, and feature engineering. Applied statistical analysis to identify 8 key diagnostic indicators, reducing required patient tests by half while improving model recall by 6 percentage points over baseline.",
      highlights: [
        "95% positive recall (6% improvement over baseline) minimizing dangerous false negatives",
        "Comprehensive EDA in R with statistical analysis and visualization across 19 features",
        "Feature selection reduced required clinical tests from 16 to 8 based on information gain",
        "Hyperparameter optimization via GridSearchCV across 5 parameters with custom recall scoring",
        "50% model size reduction while maintaining performance through n_estimators tuning",
        "Identified age, gender, chest pain type, thalassemia, max heart rate, vessels coloured, peak ST depression and slope of ST values as strongest predictors"
      ],
      github: "https://github.com/DavidThorn03/Heart-Disease-Model",
      date: "2025",
      impact: "Demonstrates ability to build production-ready medical ML systems with explainable decisions and optimized patient experience through reduced testing requirements."
    },
    {
      id: 3,
      title: "ThreadUD - Academic Forum Platform",
      category: "Full-Stack Development",
      technologies: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io"],
      shortDescription: "Mobile forum application promoting academic conversation among TUD students with real-time updates and content moderation.",
      fullDescription: "ThreadUD is a comprehensive mobile forum platform built with React Native and Node.js, featuring real-time communication through Socket.io, robust content moderation using Google's Perspective API, and secure authentication with bcrypt and 2FA. The application demonstrates strong full-stack capabilities with a dedicated backend server, RESTful API design, and MongoDB database integration. Includes admin panels for content management, email verification systems, and extensive user testing.",
      highlights: [
        "Real-time post and comment updates using Socket.io",
        "AI-powered content moderation with Perspective API",
        "Secure authentication with bcrypt hashing and 2FA",
        "RESTful API with Express.js and MongoDB",
        "Comprehensive testing including stress testing with Locust",
        "Admin moderation system for flagged content"
      ],
      github: "https://github.com/DavidThorn03/Major-Group-Project",
      date: "2025",
      impact: "Provides students with a platform for peer learning and academic discussion, with robust safety features ensuring appropriate content."
    },
    {
      id: 4,
      title: "Zombie Apocalypse Simulation - HPC Project",
      category: "High-Performance Computing",
      technologies: ["C", "Pthreads", "Parallel Computing", "Mathematical Modeling"],
      shortDescription: "Cellular automata simulation modeling disease spread with serial and parallel implementations, demonstrating HPC optimization techniques.",
      fullDescription: "A sophisticated cellular automata simulation implementing the SIZRD (Susceptible-Infected-Zombie-Removed-Dead) model to simulate zombie outbreak scenarios. The project features both serial and parallel implementations using Pthreads, demonstrating significant performance improvements through parallelization. Includes comprehensive data output, visualization capabilities, and configurable parameters for infection rates, incubation periods, and recovery scenarios.",
      highlights: [
        "Implemented parallel computing with Pthreads for performance optimization",
        "Cellular automata with complex state transitions and neighbor interactions",
        "Configurable parameters for infection probabilities and time periods",
        "Data visualization using gnuplot for epidemic progression analysis",
        "Comparative performance analysis between serial and parallel implementations",
        "Mathematical modeling of disease spread dynamics"
      ],
      github: "https://github.com/DavidThorn03/Parallel-Zombie-Simulation",
      date: "2025",
      impact: "Demonstrates practical application of parallel computing techniques to improve computational performance in simulation-based modeling."
    },
    {
      id: 5,
      title: "Natural Language Parser",
      category: "Computational Linguistics",
      technologies: ["Java", "Recursive Algorithms", "Tree Data Structures", "OOP"],
      shortDescription: "Recursive descent parser implementing context-free grammar validation and morphological agreement checking for English sentences.",
      fullDescription: "A Java-based natural language parser that validates sentence structure using context-free grammar rules and enforces subject-verb number agreement through two-stage validation. The system implements a depth-first search algorithm to recursively construct syntactic parse trees, matching input tokens against hierarchical grammar rules (S → NP VP, VP → VB NP). Distinguishes between person nouns (subject position) and object nouns (object position) while enforcing determiner-noun and subject-verb agreement. The parser successfully processes 16 grammatical sentence variations following the pattern 'The/A king(s) like(s)/dislike(s) the new cat' while correctly rejecting violations such as wrong noun types, number disagreement, and structural errors.",
      highlights: [
        "Recursive descent parser using depth-first tree search for grammar validation",
        "Two-stage validation: syntactic structure checking + morphological agreement verification",
        "Hierarchical grammar system with 5 phrase structure rules and 6 POS categories",
        "Custom TreeNode implementation generating bracketed phrase notation and visual trees",
        "Modular OOP design with external configuration files (lexicon.txt, rules.txt)",
        "100% accuracy on 16 valid sentences, correctly rejecting all invalid constructions"
      ],
      github: "https://github.com/DavidThorn03/Natural-Language-Parser",
      date: "2025",
      impact: "Demonstrates foundational NLP concepts and compiler design principles applicable to language processing systems, syntax checkers, and automated grammar correction tools."
    },
    {
      id: 6,
      title: "Huffman Encoding System",
      category: "Algorithms & Data Structures",
      technologies: ["Java", "Swing", "Data Structures", "Algorithm Design"],
      shortDescription: "Complete Huffman encoding/decoding implementation with GUI, demonstrating advanced algorithm design and data structure knowledge.",
      fullDescription: "A comprehensive implementation of Huffman encoding algorithm featuring a user-friendly Java Swing GUI for encoding and decoding messages. The project showcases advanced understanding of tree data structures, optimal algorithm design, and compression techniques. Includes detailed compression ratio calculations and demonstrates the practical application of greedy algorithms in data compression.",
      highlights: [
        "Custom binary tree implementation for Huffman encoding",
        "Efficient encoding using pre-computed code arrays",
        "Depth-first search for code generation",
        "Interactive GUI built with Java Swing",
        "Real-time compression ratio calculations",
        "Support for text encoding and binary code decoding"
      ],
      github: "https://github.com/DavidThorn03/Huffman-Encoding-Program",
      date: "2025",
      impact: "Demonstrates understanding of fundamental computer science concepts including data compression, tree structures, and algorithm optimization."
    },
    {
      id: 7,
      title: "Distributed Server Network",
      category: "Distributed Systems",
      technologies: ["Python", "JSON-RPC", "Network Programming", "System Design"],
      shortDescription: "JSON-RPC based distributed server system with dynamic startup/shutdown, heartbeat monitoring, and message passing between nodes.",
      fullDescription: "A distributed computing system implementing multiple server nodes that can communicate using JSON-RPC protocol. Features include dynamic server startup and shutdown, friend list management for server discovery, heartbeat monitoring for fault detection, and message passing across the network. The system demonstrates understanding of distributed systems concepts including service discovery, fault tolerance, and inter-process communication.",
      highlights: [
        "JSON-RPC implementation for remote procedure calls",
        "Dynamic server discovery and friend list management",
        "Heartbeat mechanism for monitoring server health",
        "Message passing system across distributed nodes",
        "Remote file operations and version checking",
        "Comprehensive test suite with automated testing"
      ],
      github: "https://github.com/DavidThorn03/JSON-RPC-Project",
      date: "2025",
      impact: "Demonstrates practical knowledge of distributed systems design, network protocols, and building resilient, fault-tolerant systems."
    }
  ]
};

// Experience data structure
const experienceData = {
  experiences: [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Binary Worrier Ltd.",
      period: "Summer 2025",
      location: "Dublin, Ireland",
      type: "Internship",
      shortDescription: "Developed .NET WPF desktop application for Type 1 Diabetes monitoring with real-time glucose data integration.",
      fullDescription: "Worked as a software development intern at Binary Worrier Ltd., focusing on healthcare technology solutions. Developed a comprehensive desktop application using .NET WPF framework to help parents monitor their children's glucose levels in real-time. The application integrated with Dexcom CGM devices through secure OAuth2 authentication and displayed critical health data directly on the Windows 11 taskbar for easy access.",
      responsibilities: [
        "Engineered a .NET WPF desktop application for parents of children with Type 1 Diabetes to monitor real-time glucose data from Dexcom CGM devices",
        "Implemented OAuth2 integration with Dexcom APIs for secure data retrieval and authentication",
        "Evaluated multiple frontend frameworks and designed a WPF-based interface displaying glucose readings on Windows 11 taskbar with 48-hour historical data visualization",
        "Utilized Azure DevOps for project management, documentation, and progress tracking through structured ticket systems",
        "Collaborated with healthcare professionals to ensure the application met medical monitoring standards"
      ],
      technologies: [".NET MAUI", "WPF", "C#", "OAuth2", "Dexcom API", "Azure DevOps"],
      achievements: [
        "Successfully delivered a functional prototype that improved parental awareness of glucose levels",
        "Implemented secure authentication flow compliant with healthcare data standards",
        "Created an intuitive UI that minimized user interaction while maximizing information accessibility"
      ],
      skills: ["Desktop Application Development", "API Integration", "Healthcare Technology", "Agile Development"]
    },
    {
      id: 2,
      title: "Student Tutor",
      company: "TU Dublin",
      period: "2024",
      location: "Dublin, Ireland",
      type: "Full-Time",
      shortDescription: "Provided one-on-one programming tutoring and created educational content for Java programming students.",
      fullDescription: "Served as a student tutor at TU Dublin, helping fellow students improve their programming skills and prepare for examinations. Created educational content including video tutorials on complex programming concepts, with a focus on Java error handling and exception management. Mentored students individually, helping them develop strong problem-solving approaches and debugging techniques essential for software development.",
      responsibilities: [
        "Conducted one-on-one programming tutoring sessions for students preparing for examinations",
        "Created comprehensive video tutorial on Java error and exception handling using IDE demonstrations",
        "Mentored students to improve algorithmic problem-solving and debugging skills",
        "Developed customized learning materials based on individual student needs",
        "Provided feedback on code quality, structure, and best practices"
      ],
      technologies: ["Java", "IntelliJ IDEA", "Eclipse", "Git", "Video Production"],
      achievements: [
        "Helped multiple students improve their grades through targeted tutoring sessions",
        "Developed effective teaching methods that simplified complex programming concepts"
      ],
      skills: ["Teaching", "Communication", "Java Programming", "Mentoring", "Content Creation"]
    },
    {
      id: 3,
      title: "LC Grinds Tutor",
      company: "Self-Employed",
      period: "2025",
      location: "Newbridge, Kildare, Ireland",
      type: "Part-Time",
      shortDescription: "Provided tutoring for secondary school students in mathematics.",
      fullDescription: "As an LC Grinds Tutor, I offered personalized tutoring sessions for Leaving Cert students in mathematics. I developed tailored lesson plans to address individual student needs and learning styles, helping them build confidence and improve their academic performance.",
      responsibilities: [
        "Conducted tutoring sessions for students in mathematics",
        "Created customized lesson plans based on individual student needs",
        "Monitored student progress and provided constructive feedback",
        "Assisted students in exam preparation and study techniques",
        "Fostered a positive and engaging learning environment"
      ],
      technologies: ["Teams", "Kahoot", "Quizlet"],
      achievements: [
        "Helped students achieve significant improvements in their grades",
        "Received positive feedback from students and parents for effective teaching methods"
      ],
      skills: ["Mathematics", "Communication", "Adaptability"]
    }
  ]
};

const Navigation = ({ currentView, setCurrentView, darkMode, toggleDarkMode }) => (
  <nav className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md z-40 border-b ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          David Thornton
        </h1>
        <div className="flex gap-6 items-center">
          <button
            onClick={() => setCurrentView('about')}
            className={`text-sm font-medium transition-colors ${currentView === 'about'
              ? 'text-blue-600'
              : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentView('projects')}
            className={`text-sm font-medium transition-colors ${currentView === 'projects'
              ? 'text-blue-600'
              : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => setCurrentView('experience')}
            className={`text-sm font-medium transition-colors ${currentView === 'experience'
              ? 'text-blue-600'
              : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Experience
          </button>
          <button
            onClick={() => setCurrentView('contact')}
            className={`text-sm font-medium transition-colors ${currentView === 'contact'
              ? 'text-blue-600'
              : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Contact
          </button>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = ({ darkMode, setCurrentView }) => (
  <section className="min-h-screen flex items-center justify-center px-6 pt-20">
    <div className="max-w-4xl text-center">
      <div className="mb-6">
        <span className={`inline-block px-4 py-2 ${darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-600'} rounded-full text-sm font-medium mb-4`}>
          👋 Welcome to my portfolio
        </span>
      </div>
      <h1 className={`text-6xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : ''}`}>
        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">David Thornton</span>
      </h1>
      <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto leading-relaxed`}>
        Fourth-year Computing student passionate about data science, machine learning, and AI.
        Building intelligent, scalable systems through full-stack development and distributed computing.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="mailto:davythornton@gmail.com"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
        >
          Get In Touch
        </a>
        <button
          onClick={() => setCurrentView('projects')}
          className={`px-8 py-4 border-2 ${darkMode ? 'border-slate-600 text-gray-300 hover:border-blue-500 hover:text-blue-400' : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'} rounded-full font-medium transition-all`}
        >
          View Projects
        </button>
      </div>
    </div>
  </section>
);

const AboutSection = ({ darkMode }) => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>About Me</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
            Fourth-year Computing student with a passion for data science, machine learning, and artificial intelligence.
            Experienced in data analytics, computer vision systems, full-stack development, distributed computing, and high-performance computing through academic
            projects, professional internships, and tutoring roles.
          </p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            Seeking a graduate program in data science and AI to further develop expertise in building intelligent,
            scalable systems that solve real-world problems.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-slate-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'} p-8 rounded-2xl`}>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Quick Facts</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>TU Dublin</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>BSc Computing (IT) | GPA: 3.96</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>Binary Worrier Ltd.</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Software Development Intern</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-blue-600" />
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>Kaggle Certified</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>ML & Computer Vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : ''}`}>Technical Skills</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl border hover:shadow-lg transition-shadow`}>
            <Code className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>Languages</h4>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Python, Java, C, R, Node.js, SQL, MongoDB, C#</p>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl border hover:shadow-lg transition-shadow`}>
            <Code className="w-8 h-8 text-purple-600 mb-4" />
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>Frameworks</h4>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>PyTorch, TensorFlow, Scikit-Learn, React Native, Express.js, .NET, .NET MAUI</p>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl border hover:shadow-lg transition-shadow`}>
            <Code className="w-8 h-8 text-pink-600 mb-4" />
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>Specializations</h4>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>ML, Computer Vision, HPC, Distributed Systems, Full-Stack Development</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, onClick, darkMode }) => (
  <div
    onClick={onClick}
    className={`group ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl border overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer`}
  >
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50' : 'bg-gradient-to-br from-blue-100 to-purple-100'} rounded-xl flex items-center justify-center`}>
          <Code className="w-6 h-6 text-blue-600" />
        </div>
        <span className={`text-xs font-medium px-3 py-1 ${darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-600'} rounded-full`}>
          {project.category}
        </span>
      </div>

      <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${darkMode ? 'text-white' : ''}`}>
        {project.title}
      </h3>

      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-6 line-clamp-2`}>
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className={`text-xs px-2 py-1 ${darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-50 text-gray-600'} rounded`}>
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{project.date}</span>
        <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const ProjectsSection = ({ setSelectedProject, darkMode }) => (
  <section className={`py-20 px-6 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Featured Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  </section>
);

const ExperienceCard = ({ experience, onClick, darkMode }) => (
  <div
    onClick={onClick}
    className={`group ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl border overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer`}
  >
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 ${darkMode ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50' : 'bg-gradient-to-br from-blue-100 to-purple-100'} rounded-xl flex items-center justify-center`}>
          <Briefcase className="w-6 h-6 text-blue-600" />
        </div>
        <span className={`text-xs font-medium px-3 py-1 ${darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-600'} rounded-full`}>
          {experience.type}
        </span>
      </div>

      <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors ${darkMode ? 'text-white' : ''}`}>
        {experience.title}
      </h3>

      <p className="font-medium mb-3 text-blue-600">
        {experience.company}
      </p>

      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-6 line-clamp-2`}>
        {experience.shortDescription}
      </p>

      <div className="flex items-center justify-between text-sm">
        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{experience.period}</span>
        <ChevronRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

const ExperienceSection = ({ darkMode, setSelectedExperience }) => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Work Experience</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {experienceData.experiences.map(experience => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            onClick={() => setSelectedExperience(experience)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = ({ darkMode }) => (
  <section className={`py-20 px-6 ${darkMode ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Let's Connect</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
      </div>

      <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12`}>
        Interested in working together or have a question? Feel free to reach out!
      </p>

      <div className="flex gap-6 justify-center mb-8">
        <a
          href="mailto:davythornton@gmail.com"
          className={`flex items-center gap-3 px-6 py-3 ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white'} rounded-full hover:shadow-lg transition-all`}
        >
          <Mail className="w-5 h-5 text-blue-600" />
          <span className={`font-medium ${darkMode ? 'text-white' : ''}`}>Email</span>
        </a>
        <a
          href="https://github.com/DavidThorn03"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-6 py-3 ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white'} rounded-full hover:shadow-lg transition-all`}
        >
          <Github className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
          <span className={`font-medium ${darkMode ? 'text-white' : ''}`}>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/david-thornton-it"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-6 py-3 ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white'} rounded-full hover:shadow-lg transition-all`}
        >
          <Linkedin className="w-5 h-5 text-blue-600" />
          <span className={`font-medium ${darkMode ? 'text-white' : ''}`}>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);

const ProjectModal = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
        <div className={`sticky top-0 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'} border-b p-8 flex justify-between items-start`}>
          <div>
            <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>{project.title}</h2>
            <span className={`text-sm font-medium px-3 py-1 ${darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-50 text-blue-600'} rounded-full`}>
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : ''}`}>
              <Code className="w-5 h-5 text-blue-600" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={`px-4 py-2 ${darkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-50 text-gray-700'} rounded-lg text-sm font-medium`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Overview</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{project.fullDescription}</p>
          </div>

          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Key Features</h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start gap-3`}>
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Impact</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{project.impact}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <span className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
              <Calendar className="w-4 h-4" />
              {project.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceModal = ({ experience, onClose, darkMode }) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className={`${darkMode ? 'bg-slate-900' : 'bg-white'} rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
        <div className={`sticky top-0 ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'} border-b p-8 flex justify-between items-start`}>
          <div>
            <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>{experience.title}</h2>
            <p className="text-lg font-medium text-blue-600 mb-2">{experience.company}</p>
            <div className="flex gap-4 text-sm">
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{experience.period}</span>
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>• {experience.location}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Overview</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{experience.fullDescription}</p>
          </div>

          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : ''}`}>
              <Code className="w-5 h-5 text-blue-600" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span key={idx} className={`px-4 py-2 ${darkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-50 text-gray-700'} rounded-lg text-sm font-medium`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Key Responsibilities</h3>
            <ul className="space-y-3">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start gap-3`}>
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Key Achievements</h3>
            <ul className="space-y-3">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-start gap-3`}>
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Skills Developed</h3>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, idx) => (
                <span key={idx} className={`px-4 py-2 ${darkMode ? 'bg-slate-800 text-gray-300 border border-slate-700' : 'bg-white text-gray-700 border border-gray-200'} rounded-lg text-sm font-medium`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [currentView, setCurrentView] = useState('about');
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from system preference
  useEffect(() => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950' : 'bg-white'}`}>
      <Navigation
        currentView={currentView}
        setCurrentView={setCurrentView}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {currentView === 'about' && (
        <>
          <HeroSection darkMode={darkMode} setCurrentView={setCurrentView} />
          <AboutSection darkMode={darkMode} />
        </>
      )}

      {currentView === 'projects' && (
        <div className="pt-20">
          <ProjectsSection setSelectedProject={setSelectedProject} darkMode={darkMode} />
        </div>
      )}

      {currentView === 'experience' && (
        <div className="pt-20">
          <ExperienceSection darkMode={darkMode} setSelectedExperience={setSelectedExperience} />
        </div>
      )}

      {currentView === 'contact' && (
        <div className="pt-20">
          <ContactSection darkMode={darkMode} />
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          darkMode={darkMode}
        />
      )}

      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}
export default App;