
import "./customDropdown.css";

const CustomDropdown = ({ value, onChange, options = [] }) => {
  return (
    <select value={value} onChange={onChange} className="custom-select">
      <option value="">Select Status</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default CustomDropdown;
