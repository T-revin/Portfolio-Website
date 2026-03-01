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
      problem: '**Situation & Task:** The Customer Support department was not tracking support cases done by email from a shared Outlook mailbox. This meant that there was no visibility into the number of support cases that were being handled by the department, and there was no way to track the progress of each case. Additionally, there was no way to identify trends in the types of support cases that were being handled, which made it difficult to identify areas where improvements could be made. ',
      solution: '**Action:** I engineered a dual-stage architecture. First, I developed two Power Automate flows that trigger upon incoming emails, parsing the metadata and writing it directly to a centralised SharePoint List. Second, I connected a Power BI dashboard directly to this list, utilizing Power Query for final data transformations and DAX for custom metric calculations (e.g., average response time).',
      impact: '**Result:** The solution produced a 100% automated data entry system for ticket tracking. This enabled data analysis to be done on the support cases, which allowed the department to identify trends in the types of support cases that were being handled, and identify areas where improvements could be made. ',
      techStackDetails: ['Power Automate (Cloud Flows)', 'SharePoint Lists', 'Power BI Service', 'Power Query (M)']
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
  {
    id: 5, 
    title: 'Dynamic Directory Generator & File Router',
    description: 'A two-part Python automation engine that generates complex, nested directory trees from Excel logic and automatically routes unsorted files into them.',
    image: '/projects/PythonRouter.png',
    architectureImage: '/projects/CreateFolderPythonDiagram.png', 
    hasCaseStudy: true,
    tags: ['Python', 'Pandas', 'OS/Shutil', 'Data Engineering'],
    demoURL: '#', 
    gitHubUrl: 'https://github.com/T-revin/folder-creator.git',
    details: {
      problem: '**Situation & Task:** At my job at a higher education insitution, our growing student numbers imposed operational issues. One of which was creating individual folders for each student, to store their documents. The team was manually creating deep nests of folders for each student, e.g. by which course level, module, type of document, etc. This became highly unscalable, prone to human error, and wasted hours of administrative time. So I built a flexible, automated folder creation and sorting algorthim using Python.',
      solution: '**Action:** My solution was to engineer a two-stage Python script using Pandas and the OS library. First, I designed a custom syntax engine that reads Excel headers (e.g., `topfolder/[node]/layer3`) to recursively generate infinite-depth folder trees based on user logic. Second, I built a file-routing script that parses incoming document names (separated by underscores) and automatically moves them into their corresponding nested directories.',
      impact: '**Result:** Transformed an hours-long manual data-entry task into a near fully automated process. The solution eliminated all manual creation of folders, and eliminated drag-and-drop sorting errors, standardised the company’s digital filing taxonomy, and provided a scalable onboarding system for all future students.',
      techStackDetails: ['Python (OS & Shutil libraries)', 'Pandas (Data manipulation)', 'Excel (Logic mapping)', 'Regex / String Parsing']
    }
  }
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
    relatedProjectIds: [5],
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    category: 'analysis',
    description: 'Data management, analysis, and visualisation.',
    relatedProjectIds: [3,5],
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
    id: 'powerbi',
    name: 'Power BI',
    category: 'visualisation',
    description: 'Creating interactive data visualizations.',
    relatedProjectIds: [2],
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tool',
    description: '',
    relatedProjectIds: [4],
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tool',
    description: '',
    relatedProjectIds: [4],
  },
];
