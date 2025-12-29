export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  license: string;
  isFeatured?: boolean;
  isContribution?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Automated Exam Distribution System',
    description:
      'A comprehensive system automating the examination process, classroom management, and online testing. Features Java Spring Boot APIs, Vue.js frontend, WebSocket for real-time monitoring, and Excel report generation.',
    githubUrl: 'https://github.com/FPLHN-FACTORY/fpl-udpm-autograding-system',
    license: 'FPLHN-FACTORY',
    isFeatured: true, 
  },
  {
    title: 'PTPM Workshop Product Showcase',
    description:
      'A centralized portfolio platform (Showcase) to manage and display Web/App products developed by the PTPM Workshop. Built with RESTful APIs, Spring Security (OAuth2/JWT), and bulk data import via Excel.',
    githubUrl: 'https://github.com/FPLHN-FACTORY/FPL-UDPMCatalog',
    license: 'FPLHN-FACTORY',
    isFeatured: true,
  },
  {
    title: 'Noel music player',
    description:
      'A gift for my girl friend, a platform that in sync with music with Christmas background effect',
    githubUrl: 'https://github.com/Cloudn9-k/noel-background-music',
    license: 'Internal Project',
    isFeatured: true,
  },
  {
    title: 'Portfolio',
    description:
      'A gift for my girl friend, a platform that in sync with music with Christmas background effect',
    githubUrl: 'https://github.com/Cloudn9-k/noel-background-music',
    license: 'Internal Project',
    isFeatured: true,
  },
];