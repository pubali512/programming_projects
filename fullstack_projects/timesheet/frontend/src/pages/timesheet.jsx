import { useState } from 'react';
import { projects, tasks, timeEntries } from '../services/api';

export default function TimesheetPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0].id);
  const [selectedTask, setSelectedTask] = useState(
    tasks.find(t => t.projectId === projects[0].id)?.id
  );

  const filteredTasks = tasks.filter(t => t.projectId === selectedProject);
  const entriesForTask = timeEntries.filter(te => te.taskId === selectedTask);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Timesheet</h2>

      {/* Project Selector */}
      <label>
        Project:
        <select
          value={selectedProject}
          onChange={e => {
            const projectId = parseInt(e.target.value);
            setSelectedProject(projectId);
            setSelectedTask(tasks.find(t => t.projectId === projectId)?.id);
          }}
        >
          {projects.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </label>

      {/* Task Selector */}
      <label style={{ marginLeft: '1rem' }}>
        Task:
        <select
          value={selectedTask}
          onChange={e => setSelectedTask(parseInt(e.target.value))}
        >
          {filteredTasks.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </label>

      {/* Time Entries Table */}
      <table style={{ marginTop: '1rem', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Date</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Hours</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {entriesForTask.map(e => (
            <tr key={e.id}>
              <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{e.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{e.hours}</td>
              <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{e.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
