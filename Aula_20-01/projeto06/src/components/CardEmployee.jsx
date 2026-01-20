import { useState } from "react";
import "./CardEmployee.css";
const CardEmployee = ({ id, nome, cargo, avisaroPai }) => {
  const [estaAtivo, setEstaAtivo] = useState(true);
  const handleDesligar = () => {
    avisaroPai();
    setEstaAtivo(false);
  };
  return (
    <div className="container">
      <h1>Matrícula: {id}</h1>
      <h2>Nome: {nome}</h2>
      <h2>Cargo: {cargo}</h2>
      <h3 className={estaAtivo ? "ativo" : "inativo"}>
        Status: {estaAtivo ? "Ativo" : "Inativo"}
      </h3>
      <button onClick={handleDesligar}>
        {estaAtivo ? "Inativar colaborador" : "Reintegrar colaborador"}
      </button>
    </div>
  );
};

export default CardEmployee;
