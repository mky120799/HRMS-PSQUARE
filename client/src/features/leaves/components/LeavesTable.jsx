import React, { useState } from "react";
import "./LeavesTable.css";

const dummyLeaves = [
  {
    id: 1,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    profilePic: "/profile.jpg",
    date: "08/09/24",
    reason: "Visiting House",
    status: "Approved",
    docUrl: "#",
  },
  {
    id: 2,
    name: "Marvin McKinney",
    email: "marvin.mckinney@example.com",
    profilePic: "/profile.jpg",
    date: "10/09/24",
    reason: "Family Function",
    status: "Pending",
    docUrl: "#",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    email: "savannah.nguyen@example.com",
    profilePic: "/profile.jpg",
    date: "12/09/24",
    reason: "Medical Leave",
    status: "Rejected",
    docUrl: "#",
  },
];

const LeavesTable = () => {
  const [leaves, setLeaves] = useState(dummyLeaves);

  return (
    <div className="leaves-page">
      <div className="leaves-header">
        <div className="filters">
          <select>
            <option>Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>
        <button className="add-leave-btn">Add Leave</button>
      </div>

      <table className="leaves-table">
        <thead>
          <tr>
            <th>Sr. no.</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Docs</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={leave.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={leave.profilePic}
                  alt="profile"
                  className="profile-pic"
                />
              </td>
              <td>{leave.name}</td>
              <td>{leave.email}</td>
              <td>{leave.date}</td>
              <td>{leave.reason}</td>
              <td>
                <select defaultValue={leave.status}>
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
              </td>
              <td>
                <a href={leave.docUrl} target="_blank" rel="noreferrer">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeavesTable;
