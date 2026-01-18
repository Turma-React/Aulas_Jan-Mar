import "./ShowMessage.css";
const ShowMessage = ({ mensagem, tipo }) => {
  return (
    <>
      <p className={[tipo, "mensagem"].join(" ")}>{mensagem}</p>
    </>
  );
};

export default ShowMessage;
