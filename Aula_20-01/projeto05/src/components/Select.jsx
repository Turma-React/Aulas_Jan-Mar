import "./InputText.css";
const Select = ({ label, name, options, value, onChange }) => {
  console.log(options);
  return (
    <label htmlFor={name} className="label">
      {label}:
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="field"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
