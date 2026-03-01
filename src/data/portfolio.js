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
        '**Situation & Task:** At my internship, my group was tasked with creating a web application that would automate the process of allocating students into groups based on various criteria such as preferences and availability, by our client a University lecturer. The lecturer experienced issues keeping track of students and allocating them into groups based on preferences stated by the students.',
      solution:
        '**Action:** My group developed a web application solution utlising React for the frontend, connected to a SQL Database using backend API built with Express.js. This students to see their profile and select fellow students they want to be in groups with for each module. For the lecturer it allowed them to see all students loaded in from the database, and allocate them into groups based on preferences stated by the students.',
      impact:
        '**Result:** The web application was able to successfully automate the process of allocating students into groups based on preferences and the lecturer to keep track of the students in a easy to use and navigate web application.',
      techStackDetails: ['React', 'Express.js', 'PostgreSQL', 'Node.js'],
      architectureImage: '/projects/GroupAllocationDiagram.png',
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
    title: 'Automated Student Performance & Intervention Tracker',
    description:
      'A collaborative Excel-based tracking system that integrates VLE grade data with automated logic to monitor student performance and coordinate staff interventions.',
    image: '/projects/DataManagement.png',
    tags: ['Microsoft Excel', 'Operational Analytics', 'Process Automation'],
    demoURL: '#',
    gitHubUrl: '#',
    hasCaseStudy: true,
    details: {
      problem: '**Situation & Task:** Academic officers needed to track student grades and coordinate support interventions. However, grade data was locked in the Virtual Learning Environment (VLE), and officers had no centralized way to see overall performance, track missing marks, or log which students had already been contacted. This led to duplicated efforts and missed warning signs.',
    solution: '**Action:** I engineered a comprehensive tracking workbook. I established a workflow to export VLE data and used XLOOKUP on Student IDs to reliably map grades into the tracker. I wrote complex Excel formulas to automatically calculate overall module grades, flag modules as "outstanding" or "awaiting marks," and calculate total end-of-year passes. Finally, I implemented a collaborative "Action Taken" logging system for the officer team.',
    impact: '**Result:** The tool became the single source of truth for the department. The automated status columns (outstanding/passed) allowed staff to instantly filter for at-risk students, while the collaborative tracking column eliminated duplicate emails and streamlined the intervention process.',
    techStackDetails: ['Microsoft Excel', 'XLOOKUP & Data Mapping', 'Automated Status Logic (IF/AND/OR)', 'Data Extraction'],
      architectureImage: '/projects/StudentMarksheetDiagram.png',
    },
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description:
      'A React-based single-page application engineered to serve structured data analytics case studies with an optimized, recruiter-focused UX.',
    image: '/projects/Portfolio.jpg',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    demoURL: '#',
    gitHubUrl: 'https://github.com/T-revin/Portfolio-Website',
    hasCaseStudy: true,
    details: {
    problem: '**Situation & Task:** I wanted to advertise the skills and projects I have developed beyond what a simple CV could offer. So I decided to pursue a project in developing a website that would serve as a high-performance web hub to present my technical case studies, utilising the S.T.A.R. methodology',
    solution: '**Action:** I developed a component-driven React application. Instead of hardcoding text, I engineered a centralised JSON data structure (`portfolio.js`) to act as a pseudo-database, feeding dynamic content into reusable UI components (like the Case Study Modals and Evidence Cards). I designed a custom "Deep Ocean" Glassmorphism theme using Tailwind CSS v4 for optimal contrast and accessibility. Finally, I established a CI/CD pipeline linking GitHub to Vercel for automated deployments.',
    impact: '**Result:** Deployed a highly performant, accessible web platform. The centralised data architecture allows me to seamlessly push new case studies to production in minutes. The modal-based UX completely eliminates navigation friction, allowing recruiters to dive deep into my system architectures without ever leaving the page.',
      techStackDetails: ['React', 'Tailwind CSS', 'Vite'],
      architectureImage: '/projects/PortfolioDiagram.png',
    },
  },
  {
    id: 5, 
    title: 'Dynamic Directory Generator & File Router',
    description: 'A two-part Python automation engine that generates complex, nested directory trees from Excel logic and automatically routes unsorted files into them.',
    image: '/projects/CreateFolderThumbnail.jpg',
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
    id: 'powerBi',
    name: 'Power BI',
    category: 'visualisation',
    description: 'Creating interactive data dashboards and business intelligence reports.',
    relatedProjectIds: [2],
  },

  // Tools
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'tool',
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
