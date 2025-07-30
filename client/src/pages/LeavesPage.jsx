
import LeavesTable from "../features/leaves/components/LeavesTable";
import LeavesCalendar from "../features/leaves/components/LeaveCalendar";
import SecondaryNavbar from "../features/leaves/components/SecondaryNavbar";
import './LeavesPage.css'
import LeaveModal from "../features/leaves/components/LeaveModal";
import { useState } from "react";

const LeavesPage = () => {
      const [showModal, setShowModal] = useState(false);
  return (
    <>
      
      <SecondaryNavbar setShowModal={setShowModal}></SecondaryNavbar>
     { showModal && <LeaveModal setShowModal={setShowModal}></LeaveModal>}
      <div className="leaves-container">
        <div className="leaves-left">
          <LeavesTable />
        </div>
        <div className="leaves-right">
          <LeavesCalendar />
        </div>
      </div>
    </>
  );
};

export default LeavesPage;
