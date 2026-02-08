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
    title: 'Automated Customer Support Analytics Pipeline',
    description:
      'A Power BI dashboard that visualises student outcomes data to identify trends and insights. The dashboard includes interactive charts and graphs to help stakeholders make data-driven decisions.',
    image: '/projects/DataDashboard.png',
    tags: ['Power Automate', 'Power BI', 'SharePoint'],
    demoURL: '#',
    gitHubUrl: null,
    hasCaseStudy: true,
    details: {
      problem:
        'Support officers were manually tracking tickets, leading to data entry errors and a 48-hour lag in reporting.',
      solution:
        'Developed a dual-flow automation. Flow 1 parses incoming Outlook emails and extracts metadata to SharePoint. Flow 2 triggers updates to the Power BI dataset for near real-time visualization.',
      impact:
        'Eliminated 100% of manual data entry for ticket tracking and provided management with live volume metrics.',
      techStackDetails: [
        'Power Automate (Flow)',
        'SharePoint Lists',
        'Power BI Service',
        'DAX',
      ],
      architectureImage: '/projects/architecture-placeholder.png',
    },
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
