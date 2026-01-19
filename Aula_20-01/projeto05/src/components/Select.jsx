const Select = ({ label, name, options, value, onChange }) => {
  console.log(options);
  return (
    <label htmlFor={name}>
      {label}:
      <select id={name} name={name} value={value} onChange={onChange}>
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
