const ShowMessage = ({ arrowfunction }) => {
  return (
    <>
      {/* Não colocamos parenteses para que o evento não seja acionado no momento da rederização */}
      <button onClick={arrowfunction}>
        Clique aqui para mostrar a mensagem
      </button>
    </>
  );
};

export default ShowMessage;
