import { Routes, Route } from 'react-router-dom';
import ProjectsPage from '../pages/projects';
import TimesheetPage from '../pages/timesheet';
import DashboardPage from '../pages/dashboard';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/timesheet" element={<TimesheetPage />} />
        </Routes>
    );
}