import EmployeeDetails from "./EmployeeDetails";
const Main = () => {
  const employees = [
    {
      matricula: 1,
      nome: "OutroFulano",
      cargo: "Estagiário",
      insalubridade: false,
      periculosidade: false,
    },
    {
      matricula: 2,
      nome: "Ciclana",
      cargo: "Desenvolvedor Júnior",
      insalubridade: false,
      periculosidade: false,
    },
    {
      matricula: 3,
      nome: "Beltrana",
      cargo: "Serviços Gerais",
      insalubridade: true,
      periculosidade: false,
    },
  ];
  return (
    <>
      {employees.map((employee) => (
        <EmployeeDetails
          key={employee.matricula}
          nome={employee.nome}
          matricula={employee.matricula}
          cargo={employee.cargo}
          insalubridade={employee.insalubridade}
          periculosidade={employee.periculosidade}
        />
      ))}
    </>
  );
};

export default Main;
