const PicturePet = ({ imagem }) => {
  return (
    <img
      src={imagem}
      style={{ width: "100%", height: "200px", objectFit: "cover" }}
    />
  );
};

export default PicturePet;
