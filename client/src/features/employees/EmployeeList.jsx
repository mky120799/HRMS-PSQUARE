import { useState } from "react";

const dummyEmployees = [
  {
    id: 1,
    name: "Jane Copper",
    email: "jane.copper@example.com",
    phone: "(704) 555-0127",
    position: "Intern",
    department: "Designer",
    joiningDate: "10/06/13",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Arlene McCoy",
    email: "arlene.mccoy@example.com",
    phone: "(302) 555-0107",
    position: "Full Time",
    department: "Designer",
    joiningDate: "11/07/16",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Cody Fisher",
    email: "deanna.curtis@example.com",
    phone: "(252) 555-0126",
    position: "Senior",
    department: "Backend Development",
    joiningDate: "08/15/17",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    name: "Janney Wilson",
    email: "janney.wilson@example.com",
    phone: "(252) 555-0126",
    position: "Junior",
    department: "Backend Development",
    joiningDate: "12/04/17",
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    email: "willie.jennings@example.com",
    phone: "(207) 555-0119",
    position: "Team Lead",
    department: "Human Resource",
    joiningDate: "05/30/14",
    avatar: "https://i.pravatar.cc/40?img=5",
  },
];

const EmployeeList = () => {
  const [employees] = useState(dummyEmployees);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employees</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#5D3FD3", color: "white" }}>
          <tr>
            <th>Profile</th>
            <th>Employee Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Department</th>
            <th>Date of Joining</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr
              key={e.id}
              style={{ textAlign: "center", borderBottom: "1px solid #ccc" }}
            >
              <td>
                <img
                  src={e.avatar}
                  alt={e.name}
                  style={{ borderRadius: "50%" }}
                />
              </td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>{e.position}</td>
              <td>{e.department}</td>
              <td>{e.joiningDate}</td>
              <td>
                <button onClick={() => alert("Download Offer Letter")}>
                  📄
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
