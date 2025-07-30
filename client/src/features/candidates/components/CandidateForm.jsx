import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import "./candidates.css"; // Optional custom styling

const CandidateForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm();

  const isDeclared = watch("declaration");

  const onSubmit = (data) => {
    console.log("Candidate Data:", data);
    onClose();
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <div className="modal-backdrop">
      <div className="modal" ref={modalRef}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      <div className="modal-content">
        <h2>Add New Candidate</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <input
              placeholder="Full Name*"
              {...register("name", { required: true })}
            />
            <input
              placeholder="Email Address*"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form-row">
            <input
              placeholder="Phone Number*"
              {...register("phone", { required: true })}
            />
            <input
              placeholder="Position*"
              {...register("position", { required: true })}
            />
          </div>

          <div className="form-row">
            <select {...register("experience", { required: true })}>
              <option value="">Experience</option>
              <option value="0">0</option>
              <option value="1+">1+</option>
              <option value="2+">2+</option>
            </select>

            <input type="file" {...register("resume", { required: true })} />
          </div>

          <label>
            <input
              type="checkbox"
              {...register("declaration", { required: true })}
            />{" "}
            I hereby declare that the above information is true to the best of
            my knowledge and belief
          </label>

          <div className="form-row">
            <button type="submit" disabled={!isDeclared}>
              Save
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CandidateForm;
