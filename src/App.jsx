import { useState, useEffect } from 'react'
import './App.css'
import { X, Github, Calendar, Code, Mail, Linkedin, Briefcase, GraduationCap, Award, User, ExternalLink, ChevronRight, Moon, Sun } from 'lucide-react';

// Projects data structure
const projectsData = {
  projects: [
    {
      id: 1,
      title: "Hierarchical Galaxy Classifier with Explainability",
      category: "Deep Learning / Computer Vision / Explainable AI",
      technologies: ["Python", "PyTorch", "timm", "torchvision", "scikit-learn", "NumPy", "pandas", "matplotlib", "seaborn", "OpenCV", "SEP", "UMAP", "Grad-CAM", "ConvNeXtV2 Nano", "ResNet18", "Random Forest", "Decision Trees", "Support Vector Classifiers"],
      shortDescription: "Final-year thesis project building a hierarchical deep learning system for galaxy morphology classification, improving fine macro F1 from 0.6893 to 0.7695 with explainability analysis.",
      fullDescription: "A final-year thesis project focused on classifying galaxy morphology using deep learning, hierarchical classification, and explainable AI. The system classifies galaxies into broad morphology groups and finer Hubble-sequence subtypes using the professionally labelled EFIGI dataset. The project compared flat and hierarchical classification architectures, evaluated multiple image preprocessing methods, tested pretrained CNN backbones through timm, and implemented class imbalance strategies including class weights, focal loss, weighted random sampling, and balanced batch sampling. The final model used a ConvNeXtV2 Nano backbone, object extraction, advanced augmentation, balanced batch sampling, and hierarchical classifier heads combined through joint probabilities. Explainability analysis was carried out using confidence thresholds, model disagreement analysis, UMAP feature-space visualisation, and Grad-CAM heatmaps to assess model trustworthiness and understand difficult classifications.",
      highlights: [
        "Developed a full deep learning research pipeline for galaxy morphology classification as a final-year thesis project",
        "Selected the EFIGI dataset for its professional labelling, detailed morphology classes, and suitability for hierarchical classification",
        "Improved fine macro F1 from a 0.6893 flat ResNet18 baseline to 0.7695 using a hierarchical ConvNeXtV2 Nano model",
        "Achieved 0.8521 coarse macro F1 for broad galaxy morphology classification",
        "Demonstrated that hierarchical classification outperformed flat classification by 0.0381 fine macro F1",
        "Used object extraction with SEP to isolate galaxy structures and improve macro F1 by 0.025 over no preprocessing",
        "Tested preprocessing strategies including raw RGB images, greyscale conversion, object extraction, morphological operations, and colour-preserving augmentation",
        "Found that colour information was important for classification, with greyscale and colour-altering methods reducing performance",
        "Compared pretrained ResNet18 and ConvNeXtV2 Nano backbones loaded through timm",
        "Tested neural network classifier heads, Random Forests, Decision Trees, Support Vector Classifiers, regression-based subclass prediction, and hierarchical classifier-per-parent-node designs",
        "Used balanced batch sampling to improve class imbalance handling, particularly for underrepresented galaxy classes",
        "Applied confidence thresholding, model disagreement analysis, UMAP, and Grad-CAM to evaluate model trustworthiness and interpretability",
        "Showed that higher model confidence generally correlated with stronger accuracy and F1 performance, with confidence thresholds helping identify more reliable predictions"
      ],
      github: "https://github.com/DavidThorn03/Hierarchical-Galaxy-Classifier.git",
      date: "2025–2026",
      impact: "Demonstrates advanced applied machine learning research across computer vision, scientific data, hierarchical modelling, class imbalance handling, pretrained deep learning, and explainable AI. This is the strongest portfolio project for ML engineering, data science, and applied AI roles."
    },
    {
      id: 2,

      title: "Regulatory Data Validation & Automation Engine",

      category: "Data Automation / Data Quality / Enterprise IT",

      technologies: [
        "Excel",
        "Office Scripts",
        "Power Automate",
        "Power BI"
      ],

      shortDescription: "Developed a metadata-driven data validation and automation framework using Excel, Office Scripts and Power Automate to perform reusable reporting and data-quality checks.",

      fullDescription: "A data-quality and automation project developed during my IT internship at Mediolanum. The solution used Excel as the configuration and results interface, Office Scripts as the execution layer, and Power Automate to orchestrate file processing and validation. Rather than implementing each check as separate hard-coded logic, the framework used metadata to define validation rules, parameters, fields, filters, comparison settings and execution behaviour. This allowed reusable validation methods to be applied across different reporting scenarios while keeping configuration separate from implementation. I developed and refined validation methods, consolidated overlapping logic, improved parameter validation and debugging, and tested the framework against representative reporting files. The wider workflow handled file selection and processing through SharePoint and OneDrive, executed the required scripts and produced structured findings for review. I also created technical handover documentation, user guidance and metadata definitions to support future maintenance and extension of the solution.",

      highlights: [

        "Designed and developed a metadata-driven validation framework using Excel, Office Scripts and Power Automate",

        "Separated validation configuration and business rules from reusable implementation logic to improve maintainability and extensibility",

        "Implemented reusable validation methods covering conditional requirements, cross-column and cross-row comparisons, cross-template reconciliation, aggregation and reporting-period comparisons",

        "Supported tolerance-based numerical comparisons, key-based joins, scope filtering and applicability logic across different validation scenarios",

        "Refactored overlapping and specialised validation methods into more generalised reusable implementations",

        "Improved parameter validation and debugging so configuration errors were identified more accurately and unnecessary inputs were avoided",

        "Developed Power Automate workflows for file processing, script execution, configuration handling and structured findings generation",

        "Worked with SharePoint and OneDrive connectors and troubleshot file-access, path and permission issues within automated workflows",

        "Maintained structured metadata covering validation rules, parameters, templates, trigger conditions, comparison settings, filters and source and target fields",

        "Tested individual validation checks against representative reporting files and re-ran targeted and regression tests following changes",

        "Investigated unexpected validation findings by comparing generated results against intended business rules and expected outputs",

        "Worked with business and technical stakeholders to clarify requirements, resolve ambiguous validation logic and confirm expected results before implementation",

        "Produced detailed technical handover documentation, user guidance and metadata definitions to support future maintenance and development",

        "Created guidance for AI-assisted creation of future validation-rule metadata while maintaining structured requirements and validation processes"

      ],

      github: null,

      date: "2026",

      impact: "Demonstrates practical experience designing maintainable data-quality automation in an enterprise environment, combining software development, workflow automation, metadata-driven architecture, testing, debugging, requirements gathering and technical documentation."
    },
    {
      id: 3,

      title: "Enterprise AI & Snowflake Development",

      category: "Enterprise AI / Data / Snowflake",

      technologies: [
        "Snowflake",
        "Cortex",
        "SQL",
        "Python",
        "Prompt Engineering",
        "AI Workflows"
      ],

      shortDescription: "Developed and refined reusable enterprise AI skills and Snowflake workflows, gaining practical experience in AI development, data analysis, workflow design, testing and governance.",

      fullDescription: "A collection of enterprise AI and Snowflake development work completed during my IT internship at Mediolanum. I developed and refined reusable AI skills for a range of internal data and workflow use cases, including dataset profiling, data-quality rule generation, data-lineage analysis, technical ticket triage and document automation. This involved designing prompts and workflows, defining inputs and outputs, testing behaviour, handling exceptions and establishing appropriate validation and human-review requirements. I also gained practical experience with Snowflake and Cortex, including working with verified queries and scheduled notebooks, while developing standards and reusable guidance for notebook and reporting workflows. Alongside development, I investigated the packaging, deployment and publication of AI skills, including permissions, discoverability and versioning. This provided practical experience of treating enterprise AI as a governed and maintainable software capability rather than simply a standalone AI tool.",

      highlights: [

        "Developed and refined reusable enterprise AI skills for data, analysis, technical support and workflow automation use cases",

        "Worked with Snowflake and Cortex to explore practical enterprise AI and data workflows",

        "Developed skills for dataset profiling and structured business data-dictionary generation",

        "Created AI-assisted approaches for data-quality rule generation using mappings, schema information and reusable SQL patterns",

        "Developed data-lineage analysis workflows designed to remain grounded in explicit technical definitions",

        "Created an initial technical triage skill for development and bug-related tickets",

        "Developed workflows for source-file data-quality assessment and structured reporting",

        "Worked on AI-assisted document and email processing workflows, including input handling, matching, validation and controlled publication",

        "Designed explicit inputs, deterministic outputs, guardrails, validation steps, fallback behaviour and human-review requirements for enterprise AI skills",

        "Tested skill packaging, deployment and discoverability",

        "Investigated permissions, administration dependencies and differences between personal and centrally published AI skills",

        "Developed standards and reusable guidance for scheduled Snowflake notebooks and generated reports, including naming, ownership, scheduling, testing and output verification",

        "Documented common failure modes involving permissions, shared workspaces, commits, paths, ownership and non-interactive execution",

        "Gathered specialist feedback and incorporated it into AI skill definitions, Snowflake standards and supporting documentation"

      ],

      github: null,

      date: "2026",

      impact: "Demonstrates practical experience developing enterprise AI capabilities across data analysis, workflow automation and Snowflake, with additional experience in prompt and workflow design, testing, deployment, documentation and AI governance."
    },
    {
      id: 4,
      title: "Pneumonia X-Ray Classification",
      category: "Deep Learning / Computer Vision",
      technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "NumPy", "matplotlib", "seaborn", "CNNs", "Grad-CAM", "EfficientNetB0"],
      shortDescription: "CNN-based medical image classification system for detecting normal, bacterial pneumonia, and viral pneumonia cases from chest X-rays.",
      fullDescription: "A deep learning computer vision project focused on classifying chest X-ray images into normal, bacterial pneumonia, or viral pneumonia categories. The project explored the full CNN development process, including baseline modelling, image preprocessing, augmentation, class imbalance handling, architecture tuning, transfer learning comparison, and explainability. The final custom CNN used greyscale 128x128 images, data augmentation, class weights, three convolutional blocks, dropout, and early stopping to improve generalisation and sick-patient recall. EfficientNetB0 transfer learning was also tested but underperformed compared to the custom model. Grad-CAM heatmaps were used to analyse model attention and assess whether predictions were based on medically relevant image regions.",
      highlights: [
        "Improved test accuracy from 74.8% baseline to 82.6% with a custom CNN architecture",
        "Improved macro F1 from 0.737 to 0.829 through preprocessing, augmentation, class weighting, and architecture tuning",
        "Trained on 5,419 chest X-ray images and evaluated on 438 test images across normal, bacterial, and viral classes",
        "Used data augmentation including horizontal flips, small rotations, and zooming to reduce overfitting",
        "Converted X-rays to greyscale to reduce input complexity while maintaining performance",
        "Applied class weighting to improve viral pneumonia recall from 0.580 to 0.802 during experimentation",
        "Compared custom CNN architecture against EfficientNetB0 transfer learning, with the custom model performing better",
        "Used Grad-CAM visualisations to inspect model attention and improve interpretability"
      ],
      github: "https://github.com/DavidThorn03/Pneumonia-CV-Classificaition.git",
      date: "2026",
      impact: "Demonstrates deep learning, medical image classification, CNN experimentation, model evaluation, class imbalance handling, and explainable AI techniques for high-stakes healthcare-related computer vision tasks."
    },
    {
      id: 5,
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
      id: 6,

      title: "Enterprise AI Usage & Credit Allocation Model",

      category: "Data Analysis / AI Governance / Business Analytics",

      technologies: [
        "Cowork",
        "Excel",
        "Data Analysis"
      ],

      shortDescription: "Developed a repeatable data-driven model for allocating enterprise AI credits across departments and user groups based on observed usage patterns.",

      fullDescription: "A data analysis and modelling project completed during my IT internship at Mediolanum to support a more consistent approach to allocating enterprise AI capacity. I analysed exported usage information alongside departmental and team mappings, segmented users according to usage profiles, and developed a repeatable allocation approach based on observed consumption. The model incorporated a minimum baseline allocation before proportionally distributing remaining capacity, allowing allocations to reflect usage patterns while maintaining a practical minimum for lower-usage groups. I produced team- and department-level outputs for review, refined the model when organisational mappings changed, and presented the methodology to senior IT stakeholders, incorporating their feedback. I also created internal guidance explaining how users could monitor their Cowork consumption and available credits using the platform's built-in reporting capabilities.",

      highlights: [

        "Analysed enterprise AI usage data alongside departmental and team mappings to inform resource allocation",

        "Segmented users and teams according to observed usage profiles",

        "Developed a repeatable allocation approach based on usage patterns, departmental groupings and user profiles",

        "Introduced baseline allocations to prevent historically low usage from resulting in impractical limits",

        "Proportionally redistributed remaining capacity after applying baseline allocations",

        "Produced team and department level allocation outputs for review",

        "Refined organisational mappings and allocation calculations when team structures changed",

        "Presented the modelling approach and methodology to senior IT stakeholders",

        "Incorporated stakeholder and governance feedback into the allocation model",

        "Created guidance explaining how users could monitor completed Cowork consumption, remaining credits and team-level usage",

        "Presented a practical guide of how to efficiently use cowork to business and technical users",

        "Supported more transparent and structured management of enterprise AI resource usage"

      ],

      github: null,

      date: "2026",

      impact: "Demonstrates practical experience applying data analysis and modelling to a real enterprise resource-allocation problem, while also showing analytical reasoning, repeatable solution design, stakeholder communication and awareness of AI governance and responsible resource management."
    },
    {
      id: 7,

      title: "Snowflake Snowday & AI Hackathon",

      category: "AI / Snowflake / Project Coordination",

      technologies: [
        "Snowflake",
        "Cortex",
        "Semantic Views",
        "SQL",
        "AI Agents"
      ],

      shortDescription: "Helped organise and deliver a two-day Snowflake learning event and AI hackathon, supporting cross-functional teams from challenge design through development and final presentations.",

      fullDescription: "A two-day Snowflake learning event and AI hackathon organised to bring together business, data and technical teams to develop practical AI prototypes. I played a central coordination role across the planning, delivery and judging process, while also contributing to the technical design of the challenges. I reviewed existing AI use cases and converted suitable ideas into clearly scoped hackathon challenges, defining intended users, minimum viable prototypes, approved data sources, validation requirements, governance considerations and expected outcomes. During the event, I coordinated participants and cross-functional teams, managed meeting schedules and changes, supported mentors and judges, and helped teams throughout their development sessions. The event concluded with a final presentation and judging session, where teams demonstrated prototypes using technologies including Snowflake semantic views, natural-language interfaces, verified queries and AI-assisted workflows.",

      highlights: [

        "Helped organise and deliver a two-day Snowflake Snowday and AI Hackathon for mixed business, data and technical audiences",

        "Coordinated participants and cross-functional teams, including team assignments, meeting schedules, communications and late changes",

        "Supported the coordination of mentors, technical contacts, judges and final presentation logistics",

        "Reviewed existing AI use cases and transformed suitable ideas into practical, scoped hackathon challenges",

        "Created detailed challenge materials covering the business problem, intended users, minimum viable prototype, scope, approved sources and suggested build approach",

        "Defined validation evidence, governance constraints, expected presentation content and potential next steps within challenge documentation",

        "Supported teams throughout development sessions and helped coordinate the transition from implementation to judging and final presentations",

        "Developed a scoring framework covering business relevance, metric and mapping quality, usefulness, explanation, validation evidence, demonstration quality and governance",

        "Supported hybrid participation and live event changes across multiple parallel team sessions",

        "Worked across technical and business perspectives to help turn broad AI ideas into focused, testable prototype challenges"

      ],

      github: null,

      date: "2026",

      impact: "Demonstrates experience combining technical AI knowledge with project coordination, requirements definition, cross-functional communication and event delivery, while gaining practical exposure to Snowflake-based AI prototyping and enterprise use-case development."
    },
    {
      id: 8,
      title: "Chat Sentiment Analysis Classifier",
      category: "Machine Learning / NLP",
      technologies: ["Python", "scikit-learn", "pandas", "NumPy", "TF-IDF", "LinearSVC", "GridSearchCV", "KMeans", "NetworkX", "WordCloud", "matplotlib", "seaborn", "Jupyter Notebook"],
      shortDescription: "NLP sentiment classification pipeline for short chat messages, achieving 0.87 F1 through TF-IDF vectorisation, custom preprocessing, feature selection, and LinearSVC tuning.",
      fullDescription: "A supervised machine learning project for classifying short chat messages as positive, negative, or neutral. The project demonstrates an end-to-end applied NLP workflow, including dataset quality assessment, duplicate removal, exploratory text analysis, vectorisation comparison, custom stop-word selection, feature selection, and hyperparameter tuning. Compared Count, TF, and TF-IDF vectorisation methods before selecting TF-IDF as the strongest representation. Built a custom token informativeness metric using class occurrence ratios and token support to identify low-value stop words and sentiment-bearing terms. Tested unigram, bigram, and targeted phrase handling, retaining the key neutral phrase 'not sure' as a custom token without adding unnecessary feature complexity. Evaluated Chi2, ANOVA, and embedded LinearSVC feature selection, with embedded selection providing the strongest performance and reducing the feature space to 307 tokens.",
      highlights: [
        "Achieved 0.87 final F1 score, improving from a 0.84 TF-IDF baseline",
        "Built a full NLP classification workflow for 584 labelled chat messages across positive, negative, and neutral classes",
        "Removed 38 duplicate records and handled noisy short-text features including emojis, punctuation, URLs, special characters, and inconsistent casing",
        "Compared Count, TF, and TF-IDF vectorisation, with TF-IDF producing the strongest baseline performance",
        "Designed a custom stop-word scoring method based on token support and class occurrence ratios",
        "Tested full bigram vectorisation and selected a targeted custom phrase approach to avoid unnecessary feature expansion",
        "Reduced the feature space from 822 to 307 tokens using embedded LinearSVC feature selection",
        "Used GridSearchCV to tune LinearSVC hyperparameters including C, loss, and class weight",
        "Used word clouds, token frequency analysis, bigram networks, emoji analysis, and KMeans clustering to support data understanding"
      ],
      github: "https://github.com/DavidThorn03/Sentiment-Analysis.git",
      date: "2026",
      impact: "Demonstrates applied NLP, data science experimentation, and ML engineering pipeline development, with emphasis on preprocessing decisions, feature selection, model evaluation, and interpretable performance improvement."
    },
    {
      id: 9,
      title: "Jenkins CI/CD Pipeline for FastAPI",
      category: "DevOps / MLOps Foundations",
      technologies: ["Python", "FastAPI", "Jenkins", "Docker", "Postman", "Uvicorn", "Pytest", "REST APIs", "CI/CD"],
      shortDescription: "CI/CD project for a FastAPI application using Jenkins, Docker, Postman tests, build artifacts, and pipeline monitoring.",
      fullDescription: "A software engineering and DevOps project focused on building an automated CI/CD workflow for a FastAPI application. The project included developing product-based REST API endpoints, validating responses with unit and Postman tests, containerising the application with Docker, and automating the full workflow through a Jenkins pipeline. The pipeline cloned the repository, installed dependencies, created configuration files, built and ran the Docker container, executed tests, stopped the container, and archived a zipped build artifact. Jenkins monitoring plugins were also used to inspect build status, test results, stage-level execution, CPU usage, memory usage, and queued builds.",
      highlights: [
        "Built a FastAPI service with endpoints for product retrieval, filtering, pagination, creation, deletion, and currency conversion",
        "Created Postman tests to validate API status codes, response bodies, and JSON structures",
        "Containerised the application with Docker and served it through Uvicorn on port 8000",
        "Automated the workflow using Jenkins pipeline stages for cloning, dependency installation, Docker build, container execution, testing, cleanup, and artifact creation",
        "Generated zipped build artifacts from successful Jenkins runs",
        "Used Jenkins monitoring plugins to track build results, test statistics, system usage, and stage-level pipeline performance"
      ],
      github: "https://github.com/DavidThorn03/Web-Services-Jenkins-Postman.git",
      date: "2026",
      impact: "Demonstrates practical CI/CD, API testing, containerisation, and deployment workflow knowledge relevant to ML engineering and MLOps roles."
    },
    {
      id: 10,
      title: "O-Ring Fault Detection System",
      category: "Computer Vision",
      technologies: ["Python", "OpenCV", "NumPy", "matplotlib", "Jupyter Notebook"],
      shortDescription: "Classical computer vision pipeline for detecting faulty O-rings using manually implemented thresholding, morphology, segmentation, and geometric analysis.",
      fullDescription: "A computer vision inspection system designed to detect faults in O-rings without using CNNs or conventional machine learning classifiers. The project focuses on understanding core image processing algorithms by manually implementing key stages of the pipeline, including Otsu thresholding, binary morphology, connected component segmentation, object extraction, and rule-based geometric fault detection. The system identifies cut rings and malformed or missing sections by analysing ring continuity and local width variation.",
      highlights: [
        "Correctly classified all 15 O-ring images in the test set, including 8 faulty and 7 non-faulty examples",
        "Implemented a full classical computer vision pipeline without using trained ML or CNN-based classification",
        "Built manual Otsu thresholding, binary morphology, connected component segmentation, and ring extraction logic",
        "Detected multiple fault types, including cut rings and missing or malformed ring sections",
        "Used geometric analysis of ring width and radial continuity to identify visual defects",
        "Generated annotated output images showing pass/fail status and detected fault type"
      ],
      github: "https://github.com/DavidThorn03/Oring-fault-detection-CV.git",
      date: "2026",
      impact: "Demonstrates practical understanding of computer vision fundamentals, algorithm design, and interpretable rule-based image inspection without relying on black-box deep learning models."
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
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
    },
    {
      id: 14,
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
      id: 15,
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
    }
  ]
};

// Experience data structure
const experienceData = {
  experiences: [
    {
      id: 1,

      title: "IT Intern",

      company: "Mediolanum",

      period: "29 June 2026 – 28 August 2026",

      location: "Ireland",

      type: "Internship",

      shortDescription: "Worked within the IT team across automation, data and reporting, enterprise AI, Snowflake and technical project delivery.",

      fullDescription: "Worked as an IT intern within the IT team at Mediolanum, contributing to projects across automation, data and reporting, enterprise AI and Snowflake. My work involved developing technical solutions, analysing data, working with business and technical stakeholders, testing and refining workflows, and producing documentation and handover material. Alongside larger projects in data validation, enterprise AI, Snowflake and Cowork, I contributed to smaller workflow automation tasks, technical standards and internal guidance.",

      responsibilities: [

        "Developed automation and data-validation solutions using Excel, Office Scripts and Power Automate, focusing on reusable and maintainable workflows",

        "Worked with SharePoint and OneDrive file workflows, troubleshooting file processing, path and access issues within automated processes",

        "Developed and refined enterprise AI skills and workflows using Snowflake and Cortex, including data profiling, data-quality, data-lineage, technical triage and workflow automation use cases",

        "Designed and tested AI workflows with defined inputs, outputs, validation requirements, guardrails and human-review considerations",

        "Worked on AI skill packaging, deployment, permissions and catalogue publication, gaining experience with the practical governance of enterprise AI capabilities",

        "Developed standards and guidance for scheduled Snowflake notebooks and reporting workflows, including naming, ownership, scheduling, testing and output verification",

        "Developed a repeatable Cowork allocation approach based on usage patterns, departmental groupings and user profiles, and presented the methodology to senior IT stakeholders",

        "Contributed to the organisation and delivery of a two-day Snowflake Snowday and AI Hackathon, coordinating participants, teams, mentors, judges and event logistics",

        "Supported the development of technical challenge materials for AI use cases, helping translate broad ideas into clearly scoped and testable prototypes",

        "Worked with business users and technical stakeholders to gather requirements, clarify ambiguous requirements and validate expected outputs",

        "Tested solutions against representative data, investigated unexpected results and incorporated feedback into subsequent development",

        "Produced technical documentation, user guides, metadata definitions, internal wiki content and project handover materials to support future maintenance and knowledge sharing"

      ],

      technologies: [
        "Excel",
        "Office Scripts",
        "Power Automate",
        "Snowflake",
        "Cortex",
        "Cowork",
        "Power BI",
        "SQL",
        "Git Hub"
      ],

      achievements: [

        "Developed a substantial metadata-driven data validation and automation framework using Excel, Office Scripts and Power Automate",

        "Gained practical experience developing and governing reusable enterprise AI capabilities using Snowflake and Cortex",

        "Helped organise and deliver a two-day Snowflake Snowday and AI Hackathon involving cross-functional business and technical teams",

        "Developed a repeatable data-driven approach to enterprise AI credit allocation and presented the methodology to senior IT stakeholders",

        "Produced comprehensive technical and user documentation to support project handover, maintenance and future development"

      ],

      skills: [
        "Data Automation",
        "Data Quality",
        "Enterprise AI",
        "Snowflake & Cortex",
        "Power Automate",
        "Data Analysis",
        "Workflow Development",
        "Requirements Gathering",
        "Stakeholder Communication",
        "Testing & Debugging",
        "Technical Documentation",
        "AI Governance",
        "Business & Technical Collaboration"
      ]
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
          👋 Data Science & AI Portfolio
        </span>
      </div>
      <h1 className={`text-6xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : ''}`}>
        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">David Thornton</span>
      </h1>
      <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto leading-relaxed`}>
        MSc Advanced AI student focused on data science, machine learning, and applied AI.
        Building practical solutions across machine learning, computer vision, enterprise AI, and data automation.
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
            I am an MSc Advanced AI student with a strong interest in data science, machine learning, computer vision, and applied artificial intelligence. 
            I recently completed a BSc in Computing at TU Dublin, where I developed experience in machine learning research, deep learning, computer vision, and explainable AI.
          </p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
            Through academic projects and professional experience, I have worked on machine learning systems, data analysis, automation, enterprise AI, and software development. 
            I enjoy applying analytical and technical approaches to real-world problems, with a particular interest in developing practical AI and data-driven solutions.
          </p>
        </div>

        <div className={`${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-slate-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'} p-8 rounded-2xl`}>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : ''}`}>Quick Facts</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>UCD</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>MSc Advanced Artificial Intelligence | 2026–2027</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>TU Dublin</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>BSc Computing (IT) | First Class Honours | GPA: 4.0</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>Mediolanum</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>IT Intern | Summer 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <div>
                <p className={`font-semibold ${darkMode ? 'text-white' : ''}`}>Binary Worrier Ltd.</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Software Development Intern | Summer 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : ''}`}>Technical Skills</h3>
        <div className="grid md:grid-cols-4 gap-5">
          <div className={`p-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl border hover:shadow-lg transition-shadow`}>
            <Code className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>Machine Learning</h4>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Python, PyTorch, TensorFlow, scikit-learn, pandas, NumPy</p>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl border hover:shadow-lg transition-shadow`}>
            <Code className="w-8 h-8 text-purple-600 mb-4" />
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>Data & Analytics</h4>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Python, R, SQL, Data Analysis, Data Quality, Data Visualisation</p>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl border hover:shadow-lg transition-shadow`}>
            <Code className="w-8 h-8 text-pink-600 mb-4" />
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>AI & Computer Vision</h4>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Deep Learning, Computer Vision, Explainable AI, Enterprise AI, Snowflake Cortex</p>
          </div>
          <div className={`p-6 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-xl border hover:shadow-lg transition-shadow`}>
            <Code className="w-8 h-8 text-pink-600 mb-4" />
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : ''}`}>Engineering & Automation</h4>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Power Automate, Office Scripts, Excel, Git, Docker, Azure DevOps, Distributed Systems</p>
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
        {project.technologies.slice(0, 4).map((tech, idx) => (
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
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
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