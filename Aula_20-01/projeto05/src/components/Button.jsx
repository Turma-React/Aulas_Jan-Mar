const Button = ({ label, nome, tipo, onClick, disabled }) => {
  return (
    <button
      id={nome}
      name={nome}
      type={tipo}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
