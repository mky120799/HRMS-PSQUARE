import './Attendance.css'

const dummyAttendance = [
  {
    id: 1,
    name: "Jacob William",
    date: "2025-07-30",
    status: "Present",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Gary Hawkins",
    date: "2025-07-30",
    status: "Absent",
    department: "HR",
  },
  {
    id: 3,
    name: "Arlene McCoy",
    date: "2025-07-30",
    status: "Leave",
    department: "Design",
  },
];

const AttendanceList = () => {
  return (
    <div className="candidate-page">
      <div className="candidate-header">
        <div className="filters">
          <select>
            <option>Status</option>
            <option>Present</option>
            <option>Absent</option>
            <option>Leave</option>
          </select>
          <select>
            <option>Department</option>
            <option>Engineering</option>
            <option>HR</option>
            <option>Design</option>
          </select>
        </div>
      </div>

      <table className="candidate-table">
        <thead>
          <tr>
            <th>Sr. no.</th>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Department</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyAttendance.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td className="employee-cell">
                <img
                  src={`https://i.pravatar.cc/40?img=${entry.id}`}
                  alt={entry.name}
                  className="avatar"
                />
                {entry.name}
              </td>
              <td>{entry.date}</td>
              <td>{entry.department}</td>
              <td>
                <select defaultValue={entry.status}>
                  <option>Present</option>
                  <option>Absent</option>
                  <option>Leave</option>
                </select>
              </td>
              <td>
                <button>View</button>
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

export default AttendanceList;
