const ProductInStorage = ({ nome, quantidade, medida, functionDelete }) => {
  return (
    <div
      style={{
        border: "solid 2px #000000",
        marginBottom: "5px",
        padding: "5px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <p>
        Produto: <b>{nome}</b>
      </p>
      <p>
        Quantidade: <b>{quantidade}</b> <i>{medida}</i>
      </p>
      <button onClick={functionDelete} style={{ border: "solid 2px tomato" }}>
        Excluir este registro
      </button>
    </div>
  );
};

export default ProductInStorage;
