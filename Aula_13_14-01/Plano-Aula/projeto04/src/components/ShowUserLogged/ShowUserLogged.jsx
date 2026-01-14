import clsx from "clsx";
{
  /* npm install clsx*/
}
import "./styles.css";
const ShowUserLogged = ({ nome, nivel, isLoading, isDisabled, isDarkMode }) => {
  return (
    <>
      <p>Olá, {nome}</p>
      <button
        disabled={isDisabled}
        className={clsx(
          "btn", // Fixa: sempre é um botão
          nivel === "ouro" ? "ouro" : "prata", // Lógica simples (um ou outro)
          {
            disabled: isDisabled, // Condicional: se isDisabled for true
            loading: isLoading, // Condicional: se isLoading for true
            dark: isDarkMode, // Condicional: se isDarkMode for true
          }
        )}
      >
        {isLoading ? "Processando..." : "Confirmar"}
      </button>
    </>
  );
};

export default ShowUserLogged;
