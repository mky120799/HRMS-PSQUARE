import CandidateForm from "../features/candidates/components/CandidateForm";
import CandidateList from "../features/candidates/components/CandidateList";

const CandidatesPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <CandidateForm />
      <CandidateList />
    </div>
  );
};

export default CandidatesPage;
