const ShowUserLogged = (props) => {
  return (
    <>
      <h3>
        Usuário logado: <b>{props.login}</b> - {props.nome}
      </h3>
    </>
  );
};

export default ShowUserLogged;
