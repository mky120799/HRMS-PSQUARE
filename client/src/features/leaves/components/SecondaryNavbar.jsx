// SecondaryNavbar.jsx
import React from "react";
import "./SecondaryNavbar.css";

const SecondaryNavbar = ({ setShowModal }) => {
  return (
    <div className="secondary-navbar">
      <select className="status-filter">
        <option>Status</option>
        <option>Approved</option>
        <option>Pending</option>
        <option>Rejected</option>
      </select>

      <button onClick={()=>{setShowModal(true)}} className="add-leave-button">
        Add Leave
      </button>
    </div>
  );
};

export default SecondaryNavbar;
