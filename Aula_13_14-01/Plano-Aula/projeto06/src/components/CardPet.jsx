const CardPet = ({ nome, raca, idade }) => {
  return (
    <div>
      <h1>Informações sobre o pet</h1>
      <p>Nome: {nome}</p>
      <p>Raça: {raca}</p>
      <p>Idade: {idade}</p>
    </div>
  );
};

export default CardPet;
