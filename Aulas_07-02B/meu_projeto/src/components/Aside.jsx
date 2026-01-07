import EmployeeDetails from "./EmployeeDetails";
import ShowUserLogged from "./ShowUserLogged";
import UserDetails from "./UserDetails";

const Aside = () => {
  return (
    <>
      <h1>Componente Aside renderizado</h1>
      <ShowUserLogged login="maurohs" nome="Mauro Henrique Silva" />
      <UserDetails cargo="Técnico de TI" matricula="AAA123" idade={33} />
      <EmployeeDetails
        nome="Fulano de Tal"
        matricula="BBB456"
        cargo="Almoxarife"
        insalubridade={false}
        periculosidade={false}
      />
      <EmployeeDetails
        nome="Ciclano da Silva"
        matricula="CCC789"
        cargo="Motorista"
        insalubridade={false}
        periculosidade={true}
      />
      <EmployeeDetails
        nome="Beltrano Souza"
        matricula="DDD012"
        cargo="Gerente de Vendas"
        insalubridade={false}
        periculosidade={false}
      />
    </>
  );
};
export default Aside;
