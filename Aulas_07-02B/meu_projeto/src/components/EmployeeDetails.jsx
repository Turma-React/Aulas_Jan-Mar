const EmployeeDetails = ({
  nome,
  matricula,
  cargo,
  insalubridade,
  periculosidade,
}) => {
  return (
    <>
      <h2>Informações sobre o colaborador</h2>
      <p>Nome: {nome}</p>
      <p>Matrícula: {matricula}</p>
      <p>Cargo: {cargo}</p>
      <p>
        Recebe insalubridade? <b>{insalubridade ? "Recebe" : "Não recebe"}</b>
      </p>
      <p>
        Recebe periculosidade? <b>{periculosidade ? "Recebe" : "Não recebe"}</b>
      </p>
    </>
  );
};
export default EmployeeDetails;
