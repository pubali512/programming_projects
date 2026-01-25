import { Routes, Route } from 'react-router-dom';
import ProjectsPage from '../pages/projects';
import TimesheetPage from '../pages/timesheet';
import TasksPage from '../pages/tasks'; 

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<TimesheetPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
  );
}