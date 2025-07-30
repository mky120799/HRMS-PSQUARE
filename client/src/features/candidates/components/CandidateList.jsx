import React, { useState } from "react";
import "./candidates.css";

const dummyCandidates = [
  {
    id: 1,
    name: "Jacob William",
    email: "jacob.william@example.com",
    phone: "(252) 555-0111",
    position: "Senior Developer",
    status: "New",
    experience: 1,
  },
  {
    id: 2,
    name: "Gary Hawkins",
    email: "kent.lawson@example.com",
    phone: "(207) 555-0101",
    position: "Human Resource",
    status: "New",
    experience: 1,
  },
  {
    id: 3,
    name: "Arlene McCoy",
    email: "arlene.mccoy@example.com",
    phone: "(302) 555-0107",
    position: "Full Time Designer",
    status: "Selected",
    experience: 2,
  },
  {
    id: 4,
    name: "Leslie Alexander",
    email: "willie.jennings@example.com",
    phone: "(207) 555-0119",
    position: "Full Time Developer",
    status: "Rejected",
    experience: 0,
  },
];

const CandidateList = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="candidate-page">
      <div className="candidate-header">
        <div className="filters">
          <select>
            <option>Status</option>
            <option>New</option>
            <option>Selected</option>
            <option>Rejected</option>
          </select>
          <select>
            <option>Position</option>
            <option>Senior Developer</option>
            <option>Human Resource</option>
            <option>Full Time Designer</option>
          </select>
        </div>
       
      </div>
      <table className="candidate-table">
        <thead>
          <tr>
            <th>Sr. no.</th>
            <th>Candidate Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyCandidates.map((c, index) => (
            <tr key={c.id}>
              <td>{index + 1}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.position}</td>
              <td>
                <select defaultValue={c.status}>
                  <option>New</option>
                  <option>Selected</option>
                  <option>Rejected</option>
                </select>
              </td>
              <td>{c.experience}</td>
              <td>
                <button>Download Resume</button>
                <button style={{ color: "red", marginLeft: "8px" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;
