import CardPet from "./CardPet";

const PicturePet = ({ foto, nome, raca, idade, exibirDetalhes }) => {
  return (
    <div
      style={{ border: "dashed 2px purple", padding: "10px", margin: "10px" }}
    >
      <img
        src={foto}
        title={nome}
        alt={nome}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      {exibirDetalhes && <CardPet nome={nome} raca={raca} idade={idade} />}
    </div>
  );
};

export default PicturePet;
