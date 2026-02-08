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
        'Streamlined grade tracking and visualization, saving teachers 5 hours per week on administrative tasks.',
      techStackDetails: ['Microsoft Excel', 'VBA', 'Power Query'],
      architectureImage: '/projects/architecture-placeholder.png',
    },
  },
];

export const skills = [
  //frontend skills
  {name: 'HTML/CSS', level: 90, category: 'frontend'},
  {name: 'JavaScript', level: 85, category: 'frontend'},
  {name: 'React', level: 80, category: 'frontend'},

  //backend skills
  {name: 'Node.js', level: 70, category: 'backend'},
  {name: 'Express.js', level: 65, category: 'backend'},
  {name: 'SQL', level: 75, category: 'backend'},
  {name: 'Python', level: 80, category: 'backend'},

  //tools
  {name: 'Microsoft Excel', level: 90, category: 'tools'},
  {name: 'Tableau', level: 70, category: 'tools'},
  {name: 'Power BI', level: 65, category: 'tools'},
  {name: 'VS Code', level: 95, category: 'tools'},
  {name: 'Figma', level: 60, category: 'tools'},
  {name: 'GitHub', level: 85, category: 'tools'},
  {name: 'Jupyter Notebooks', level: 80, category: 'tools'},
];
