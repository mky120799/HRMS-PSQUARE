import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./LeaveCalendar.css";

const LeavesCalendar = () => {
  const [date, setDate] = useState(new Date());

  const approvedDates = [6, 16];

  return (
    <div className="calendar-wrapper">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) => {
          if (approvedDates.includes(date.getDate()) && date.getMonth() === 8) {
            return "react-calendar-highlight";
          }
        }}
      />

      <div className="approved-leaves-info">
        <h4>Approved Leaves</h4>
        <div className="leave-summary">
          <img src="/profile.jpg" alt="profile" className="profile-pic" />
          <div>
            <p className="name">Cody Fisher</p>
            <p className="date">08/09/24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavesCalendar