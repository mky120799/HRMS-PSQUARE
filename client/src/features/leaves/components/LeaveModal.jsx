// components/LeaveModal.jsx
import React from "react";
import { useForm } from "react-hook-form";
import "./LeaveModal.css";

const LeaveModal = ({ setShowModal }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Add New Leave</h3>
          <button className="close-btn" onClick={() => setShowModal(false)}>
            ×
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-grid">
            <div className="form-group">
              <label className="required-label">Name</label>
              <input
                type="text"
                placeholder="Jane Cooper"
                {...register("name")}
              />
            </div>

            <div className="form-group">
              <label className="required-label">Designation</label>
              <input
                type="text"
                placeholder="Full Time Designer"
                {...register("designation")}
              />
            </div>

            <div className="form-group">
              <label className="required-label">Leave Date</label>
              <input type="date" {...register("leaveDate")} />
            </div>

            <div className="form-group full-width">
              <label className="required-label">Reason</label>
              <textarea
                rows="3"
                placeholder="Reason for leave..."
                {...register("reason")}
              />
            </div>

            <div className="form-group full-width">
              <label>Documents</label>
              <input type="file" {...register("documents")} />
            </div>
          </div>

          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveModal;
