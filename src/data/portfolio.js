export const projects = [
  {
    id: 1,
    title: 'Group Allocation Web App',
    description:
      'A web application that automates the process of allocating students into groups based on various criteria such as preferences and availability. Built using React for the frontend, connected to a SQL Database using backend API built with Express.js.',
    image: '/projects/CSEConnect.jpg',
    tags: [
      'React',
      'Express.js',
      'SQL Database',
      'Web Development',
      'Group Project',
    ],
    demoURL: '#',
    gitHubUrl: '#',
    hasCaseStudy: true,
    details: {
      problem:
        'Manual student group allocation is time-consuming and often results in unhappy students due to suboptimal pairings.',
      solution:
        'Developed an automated algorithm to optimally distribute students based on their preferences and availability constraints.',
      impact:
        'Reduced administrative time by 95% and increased student satisfaction with group assignments.',
      techStackDetails: ['React', 'Express.js', 'PostgreSQL', 'Node.js'],
      architectureImage: '/projects/architecture-placeholder.png',
    },
  },
  {
    id: 2,
    title: 'Automated Customer Support Case Tracker',
    description: 'An end-to-end automated data pipeline and visualisation dashboard that tracks customer support emails in near real-time.',
    image: '/projects/DataDashboard.png',
    architectureImage: '/projects/PowerAutomateSupportCaseTrackerDiagram.png',
    hasCaseStudy: true,
    tags: ['Power BI', 'Power Automate', 'SharePoint', 'Data Engineering'],
    demoURL: '#',
    gitHubUrl: null,
    details: {
      problem: '**Situation & Task:** The Student Services department was manually processing support emails from a shared Outlook mailbox. This manual data entry led to a 48-hour lag in reporting, human error, and a lack of visibility into current ticket volumes. My task was to design a zero-touch pipeline to automate data ingestion and provide stakeholders with a live overview of case metrics.',
      solution: '**Action:** I engineered a dual-stage architecture. First, I developed two Power Automate flows that trigger upon incoming emails, parsing the metadata and writing it directly to a centralized SharePoint List. Second, I connected a Power BI dashboard directly to this list, utilizing Power Query for final data transformations and DAX for custom metric calculations (e.g., average response time).',
      impact: '**Result:** The solution eliminated 100% of manual data entry for ticket tracking. Reporting latency was reduced from 2 days to near real-time (scheduled refreshes), enabling management to spot bottlenecks immediately and allocate resources effectively during high-volume periods.',
      techStackDetails: ['Power Automate (Cloud Flows)', 'SharePoint Lists', 'Power BI Service', 'Power Query (M)', 'DAX']
    }
  },
  {
    id: 3,
    title: 'Excel Based Student Performance Tracker',
    description:
      'An Excel workbook designed to track and analyse student performance over time. The tracker focuses on the key metric of student grades, using formulas and visual cues to assist day-to-day monitoring and long-term analysis.',
    image: '/projects/DataManagement.png',
    tags: ['Microsoft Excel', 'Data Analysis', 'Data Management'],
    demoURL: '#',
    gitHubUrl: '#',
    hasCaseStudy: true,
    details: {
      problem:
        'Teachers struggled to track individual student progress across multiple assessments using paper records.',
      solution:
        'Designed a comprehensive Excel workbook with conditional formatting and automated summary statistics.',
      impact:
        'Streamlined grade tracking and visualisation, saving teachers 5 hours per week on administrative tasks.',
      techStackDetails: ['Microsoft Excel', 'VBA', 'Power Query'],
      architectureImage: '/projects/architecture-placeholder.png',
    },
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website built with React and Tailwind CSS. Features a deep ocean theme, interactive animations, and a custom particle background system.',
    image: '/projects/Portfolio.jpg',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    demoURL: '#',
    gitHubUrl: 'https://github.com/T-revin/Portfolio-Website',
    hasCaseStudy: true,
    details: {
      problem:
        'Needed a unique way to showcase my data analytics and engineering skills.',
      solution:
        'Built a custom React application with a thematic design reflecting my interest in deep data.',
      impact:
        'Provides a professional online presence and demonstrates full-stack capabilities.',
      techStackDetails: ['React', 'Tailwind CSS', 'Vite'],
      architectureImage: '/projects/architecture-placeholder.png',
    },
  },
];

export const skills = [
  // Core Skills
  {
    id: 'html-css',
    name: 'HTML/CSS',
    category: 'visualisation',
    description: 'Building responsive and accessible web interfaces.',
    relatedProjectIds: [1, 4],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'visualisation',
    description: 'Developing interactive web applications and dynamic content.',
    relatedProjectIds: [1, 4],
  },
  {
    id: 'react',
    name: 'React',
    category: 'visualisation',
    description: 'Building component-based user interfaces and single-page applications.',
    relatedProjectIds: [1, 4],
  },
  {
    id: 'node-js',
    name: 'Node.js',
    category: 'engineering',
    description: 'Building scalable server-side applications and APIs.',
    relatedProjectIds: [1],
  },
  {
    id: 'express-js',
    name: 'Express.js',
    category: 'engineering',
    description: 'Creating RESTful APIs and backend services.',
    relatedProjectIds: [1],
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'engineering',
    description: 'Designing and querying relational databases for data integrity.',
    relatedProjectIds: [1],
  },
  {
    id: 'python',
    name: 'Python',
    category: 'analysis',
    description: 'Scripting, data analysis, and automation tasks.',
    relatedProjectIds: [],
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    category: 'analysis',
    description: 'Advanced data analysis, visualization, and automation with VBA.',
    relatedProjectIds: [3],
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'visualisation',
    description: 'Creating interactive data dashboards and business intelligence reports.',
    relatedProjectIds: [2],
  },

  // Tools
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'visualisation',
    description: 'Creating interactive data visualizations.',
    relatedProjectIds: [],
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tool',
    description: '',
    relatedProjectIds: [4],
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tool',
    description: '',
    relatedProjectIds: [],
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tool',
    description: '',
    relatedProjectIds: [4],
  },
  {
    id: 'jupyter',
    name: 'Jupyter Notebooks',
    category: 'tool',
    description: '',
    relatedProjectIds: [],
  },
];
