const Button = ({ label, nome, tipo, onClick }) => {
  return (
    <button id={nome} name={nome} type={tipo} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
