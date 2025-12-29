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
    title: 'Automated Exam Distribution',
    description:
      'A comprehensive system automating the examination process, classroom management, online testing. Features Java Spring Boot APIs, Vue.js, WebSocketand Excel report generation.',
    githubUrl: 'https://github.com/FPLHN-FACTORY/fpl-udpm-autograding-system',
    license: 'FPLHN-FACTORY',
    isFeatured: true, 
  },
  {
    title: 'PTPM Product Showcase',
    description:
      'A centralized portfolio platform (Showcase) to manage and display Web/App products developed by the PTPM Workshop. Built with RESTful APIs, Spring Security (OAuth2/JWT), and bulk data import via Excel.',
    githubUrl: 'https://github.com/FPLHN-FACTORY/FPL-UDPM-Catalog',
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
      'My portfolio,  written in reactjs ( first time ) with animated background',
    githubUrl: 'https://github.com/Cloudn9-k/portfolio',
    license: 'Internal Project',
    isFeatured: true,
  },
];