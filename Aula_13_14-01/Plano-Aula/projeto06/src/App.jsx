import mili from "./assets/mili.jpeg";
import moli from "./assets/moli.jpeg";
import PicturePet from "./components/PicturePet";
function App() {
  const pets = [
    {
      id: 1,
      nome: "Mili",
      raca: "Vira-lata",
      idade: "10 anos",
      foto: mili,
      exibirDetalhes: false,
    },
    {
      id: 2,
      nome: "Moli",
      raca: "Vira - lata",
      idade: "10 meses",
      foto: moli,
      exibirDetalhes: true,
    },
  ];
  return (
    <>
      {pets.map((pet) => (
        <PicturePet
          key={pet.id}
          foto={pet.foto}
          nome={pet.nome}
          raca={pet.raca}
          idade={pet.idade}
          exibirDetalhes={pet.exibirDetalhes}
        />
      ))}
    </>
  );
}

export default App;
