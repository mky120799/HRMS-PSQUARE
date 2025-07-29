import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/candidates">Candidates</NavLink>
        </li>
        <li>
          <NavLink to="/employees">Employees</NavLink>
        </li>
        <li>
          <NavLink to="/attendance">Attendance</NavLink>
        </li>
        <li>
          <NavLink to="/leaves">Leaves</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
