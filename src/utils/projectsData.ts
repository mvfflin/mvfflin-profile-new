export type ProjectStatus = "live" | "progress" | "archived";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  status: ProjectStatus;
  year: number;
  featured: boolean;
}

// export const projectsData: Project[] = [
//   {
//     title: 'API Gateway with Rate Limiting',
//     description:
//       'Scalable gateway handling 10k+ requests/sec with Redis-backed rate limiting, circuit breaking, and request routing.',
//     tags: ['Go', 'Redis', 'Docker', 'Kubernetes'],
//     link: 'https://github.com/example/api-gateway',
//     status: 'live',
//     year: 2024,
//     featured: true,
//   },
//   {
//     title: 'Real-Time Analytics Dashboard',
//     description:
//       'Live metrics dashboard processing 1M+ events/day with WebSocket streams, anomaly detection, and customizable alerts.',
//     tags: ['TypeScript', 'D3.js', 'PostgreSQL', 'WebSocket'],
//     link: 'https://github.com/example/analytics-dashboard',
//     status: 'live',
//     year: 2024,
//     featured: true,
//   },
//   {
//     title: 'Authentication Microservice',
//     description:
//       'JWT-based auth service with OAuth2, MFA, and session management handling 50k+ concurrent users.',
//     tags: ['Node.js', 'JWT', 'MongoDB', 'Redis'],
//     link: 'https://github.com/example/auth-service',
//     status: 'live',
//     year: 2023,
//     featured: true,
//   },
//   {
//     title: 'CI/CD Pipeline Template',
//     description:
//       'Docker-based pipeline reducing deployment time from 45min to 8min with automated testing and blue-green deployments.',
//     tags: ['GitHub Actions', 'Docker', 'Shell'],
//     link: 'https://github.com/example/cicd-template',
//     status: 'live',
//     year: 2023,
//     featured: false,
//   },
//   {
//     title: 'GraphQL Federation Setup',
//     description:
//       'Federated GraphQL architecture connecting 6 microservices with schema stitching and query optimization.',
//     tags: ['GraphQL', 'Apollo', 'Node.js'],
//     link: 'https://github.com/example/graphql-federation',
//     status: 'archived',
//     year: 2023,
//     featured: false,
//   },
// ];
