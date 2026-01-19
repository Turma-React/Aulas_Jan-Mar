const InputText = ({ nome, tipo, label, onChange, value }) => {
  return (
    <>
      <label htmlFor={nome}>
        {label}:
        <input
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
