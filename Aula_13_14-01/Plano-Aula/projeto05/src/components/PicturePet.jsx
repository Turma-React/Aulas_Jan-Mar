const PicturePet = ({ imagem }) => {
  return (
    <img
      src={imagem}
      style={{ width: "100%", height: "350px", objectFit: "cover" }}
    />
  );
};

export default PicturePet;
