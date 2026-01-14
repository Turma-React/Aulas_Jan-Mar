import styles from "./ShowUserLogged.module.css";

const ShowUserLogged = ({ nome, ehNivelOuro }) => {
  return (
    <>
      <h3 className={ehNivelOuro ? styles.nivel_ouro : styles.nivel_prata}>
        Usuário logado: {nome}
      </h3>
    </>
  );
};

export default ShowUserLogged;
