export const projects = [
  { id: 1, name: 'Project Alpha', description: 'Description for Project Alpha' },
  { id: 2, name: 'Project Beta', description: 'Description for Project Beta' },
];

export const tasks = [
  { id: 1, projectId: 1, name: 'Design UI', description: 'Create wireframes and mockups' },
  { id: 2, projectId: 1, name: 'Backend API',description: 'Develop RESTful API' },
  { id: 3, projectId: 2, name: 'Database Migration',description: 'Migrate data to new schema' },
];

export const timeEntries = [
  { id: 1, taskId: 1, date: '2026-01-25', hours: 2, notes: 'Wireframes' },
  { id: 2, taskId: 2, date: '2026-01-25', hours: 3, notes: 'REST API setup' },
];