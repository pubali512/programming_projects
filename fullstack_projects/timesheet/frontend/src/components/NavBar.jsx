import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

const linkStyle = ({ isActive }) => ({
  marginRight: '1rem',
  textDecoration: 'none',
  color: isActive ? 'blue' : 'black',
  fontWeight: isActive ? 'bold' : 'normal',
});


export default function NavBar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={linkStyle}>
        Timesheet
      </NavLink>
      <NavLink to="/projects" style={linkStyle}>
        Projects
      </NavLink>
      <NavLink to="/tasks" style={linkStyle}>
        Tasks
      </NavLink>
    </nav>
  );
}
