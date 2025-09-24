import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import dateIconRaw from '../assets/icons/date-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
  date: sanitizeToOutline(dateIconRaw, 15),
};

export const work = [
  {
    title: 'Tech Lead',
    company: 'Carrier - Digital',
    region: 'United States',
    from: '2024',
    to: '-',
    description:
      'Led the design of an IoT telemetry platform for 1M+ devices and introduced a distributed workflow SDK used across 20+ services; scaled team impact by improving observability and engineering practices.',
    technologies: [
      'IoT',
      'PostgreSQL',
      'Kafka',
      'MongoDB',
      'gRPC',
      'OpenTelemetry',
      'TypeScript',
      'Nest.js',
    ],
  },
  {
    title: 'Team Lead',
    company: 'Aula Education (CUEL)',
    region: 'United Kingdom',
    from: '2023',
    to: '2024',
    description:
      'Drove Agile process improvements and OKR adoption, reducing maintenance load by 50%; established security risk registers, removing 80% of high-risk items in one quarter.',
    technologies: [
      'Mentorship',
      'Agile',
      'OKR',
      'Security',
      'Risk Management',
      'Team Leadership',
      'Team Growth',
      'Team Management',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Aula Education',
    region: 'United Kingdom',
    from: '2020',
    to: '2023',
    description:
      'Built APIs and full-stack features that improved student engagement by 50% for 40K+ users; mentored engineers and supported 3× team growth in 2 months.',
    technologies: [
      'AWS Lambda',
      'React',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Redis',
      'AWS SQS',
      'LTI',
    ],
  },
  {
    title: 'Senior DevOps Engineer',
    company: 'Aula Education',
    region: 'United Kingdom',
    from: '2019',
    to: '2020',
    description:
      'Migrated production databases to a new cloud provider with zero downtime and developed monitoring tools that improved actionable alerts by 80%.',
    technologies: ['Terraform', 'MongoDB', 'Redis', 'AWS Lambda', 'CirlceCI'],
  },
  {
    title: 'DevOps Engineer',
    company: 'Bluedrop Learning Networks',
    region: 'Canada',
    from: '2018',
    to: '2020',
    description:
      'Automated infrastructure with Terraform and Kubernetes, migrated Kubernetes clusters to AWS EKS, and built CLI tooling for secure secrets management.',
    technologies: [
      'Kubernetes',
      'Node.js',
      'AWS EKS',
      'Terraform',
      'AWS Lambda',
      'RabbitMq',
      'AWS RDS',
      'AWS Secrets Manager',
      'Ansible',
    ],
  },
  {
    title: ' Software & DevOps Engineer',
    company: 'DynamicaSoft',
    region: 'Europe',
    from: '2018',
    to: '2019',
    description:
      'Implemented serverless Node.js/MongoDB services, built blockchain APIs, and streamlined operations by optimizing message queues.',
    technologies: [
      'Node.js',
      'MongoDB',
      'AWS Lambda',
      'AWS SQS',
      'Fastlane',
      'React Native',
      'Docker',
      'Terraform',
      'Ansible',
      'CirlceCI',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Ankora Inc.',
    region: 'Europe',
    from: '2017',
    to: '2018',
    description:
      'Developed a Java/Spring Boot microservices back-end, automated deployments with Jenkins, and built infrastructure pipelines for containerized services.',
    technologies: [
      'Java',
      'Spring Boot',
      'Jenkins',
      'Docker',
      'AWS',
      'Fastlane',
      'Ansible',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'Atlantbh',
    url: 'https://atlantbh.com',
    region: 'Europe',
    from: '2015',
    to: '2018',
    description:
      'Set up CI/CD pipelines and automated deployments for large-scale Java services; introduced containerization for legacy enterprise apps.',
    technologies: [
      'Ruby',
      'Ruby on Rails',
      'Jenkins',
      'Java',
      'PostgreSQL',
      'AWS VPC',
      'AWS EC2',
      'Docker',
      'SaltStack',
    ],
  },
];

export type WorkItem = (typeof work)[number];
