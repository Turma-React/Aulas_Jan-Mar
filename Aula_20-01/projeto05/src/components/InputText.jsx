import "./InputText.css";
const InputText = ({ nome, tipo, label, onChange, value }) => {
  return (
    <>
      <label htmlFor={nome} className="label">
        {label}:
        <input
          className="field"
          type={tipo}
          id={nome}
          name={nome}
          onChange={onChange}
          value={value}
        />
      </label>
    </>
  );
};

export default InputText;
