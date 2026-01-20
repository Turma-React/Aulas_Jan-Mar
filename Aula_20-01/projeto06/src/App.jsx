import CardEmployee from "./components/CardEmployee";
import { useState } from "react";

function App() {
  const [nDesativados, setNDesativados] = useState(0);
  const handleAtualizar = () => {
    setNDesativados((prev) => prev + 1);
  };

  const employees = [
    { id: 1, nome: "Alice", cargo: "Gerente" },
    { id: 2, nome: "Roberto", cargo: "Motorista" },
    { id: 3, nome: "Carlos", cargo: "Supervisor" },
  ];
  return (
    <>
      <h1>Número de colaboradores desativados: {nDesativados}</h1>
      {employees.map((employee) => (
        <CardEmployee
          key={employee.id}
          id={employee.id}
          nome={employee.nome}
          cargo={employee.cargo}
          avisaroPai={handleAtualizar}
        />
      ))}
    </>
  );
}

export default App;
