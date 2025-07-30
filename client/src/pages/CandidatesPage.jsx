import CandidateForm from "../features/candidates/components/CandidateForm";
import CandidateList from "../features/candidates/components/CandidateList";
import { useState } from "react";

const CandidatesPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2>Candidates</h2>
      <button onClick={() => setShowModal(true)}>Add Candidate</button>

      {showModal && <CandidateForm onClose={() => setShowModal(false)} />}
      <CandidateList/>
    </div>
  );
};

export default CandidatesPage;
