import Mili from "./assets/mili.jpeg";
import Moli from "./assets/moli.jpeg";
import CardPet from "./components/CardPet";

function App() {
  const pets = [
    {
      id: 1,
      nome: "Mili",
      raca: "Vira - lata",
      imagem: Mili,
    },
    {
      id: 2,
      nome: "Moli",
      raca: "Vira - lata",
      imagem: Moli,
    },
  ];

  return (
    <>
      {pets.map((pet) => (
        <CardPet
          key={pet.id}
          nome={pet.nome}
          tipo={pet.raca}
          pathImagem={pet.imagem}
        />
      ))}
    </>
  );
}

export default App;
