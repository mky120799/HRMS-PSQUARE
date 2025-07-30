import AttendanceTable from "../features/attendence/components/AttendanceList";

const AttendancePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Attendance Records</h2>
      <AttendanceTable />
    </div>
  );
};

export default AttendancePage;
