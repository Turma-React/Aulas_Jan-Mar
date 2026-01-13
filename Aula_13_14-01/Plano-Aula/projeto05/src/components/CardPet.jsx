import PicturePet from "./PicturePet";
const CardPet = ({ nome, tipo, pathImagem }) => {
  return (
    <div
      style={{
        border: "dashed 2px purple",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h1>Card do Pet</h1>
      <p>Nome: {nome}</p>
      <p>Tipo: {tipo}</p>
      <PicturePet imagem={pathImagem} />
    </div>
  );
};

export default CardPet;
