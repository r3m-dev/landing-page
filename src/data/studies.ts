export const studies = [
  {
    title: 'B.S. in Computer Science',
    institution: 'University of Sarajevo',
    description:
      'Core CS foundations: data structures, algorithms, operating systems, networking, and databases; .',
    tags: [
      'Algorithms',
      'Data Structures',
      'Operating Systems',
      'Databases',
      'Networking',
    ],
  },
  {
    title: 'M.S. in Software Engineering',
    institution: 'Mälardalen University',
    description:
      'Focus on advanced software engineering practices in applied industrial engineering, researching software complexity and resilience.',
    tags: [
      'Distributed Systems',
      'Cloud Architecture',
      'Testing',
      'Microservices',
    ],
  },
];

export type StudyItem = (typeof studies)[number];
