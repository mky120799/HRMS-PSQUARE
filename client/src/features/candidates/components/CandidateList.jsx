import CandidateForm from "./CandidateForm";
import { useState } from "react";

const dummyCandidates = [
  {
    id: 1,
    name: "Jacob William",
    email: "jacob.william@example.com",
    phone: "252-555-0111",
    position: "Senior Developer",
    status: "New",
    experience: "1+",
    resumeUrl: "#",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    email: "kenzi.lawson@example.com",
    phone: "907-555-0101",
    position: "Human Resource Lead",
    status: "New",
    experience: "2+",
    resumeUrl: "#",
  },
];

const CandidateList = () => {
  const [candidates, setCandidates] = useState(dummyCandidates);
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Candidates</h2>
      <button
        onClick={() => setShowForm(true)}
        style={{
          backgroundColor: "#5D3FD3",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          marginBottom: "20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        + Add Candidate
      </button>
      {showForm && <CandidateForm onClose={() => setShowForm(false)} />}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#5D3FD3", color: "white" }}>
          <tr>
            <th>Sr. No.</th>
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
          {candidates.map((c, index) => (
            <tr
              key={c.id}
              style={{ textAlign: "center", borderBottom: "1px solid #ccc" }}
            >
              <td>{String(index + 1).padStart(2, "0")}</td>
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
              <td>
                <select defaultValue={c.experience}>
                  <option>0</option>
                  <option>1+</option>
                  <option>2+</option>
                </select>
              </td>
              <td>
                <button onClick={() => alert("Downloading...")}>📄</button>
                <button onClick={() => alert("Deleting...")}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;
