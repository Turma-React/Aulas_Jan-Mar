import ShowMessage from "./ShowMessage";
const Main = () => {
  const mostrarMensagem = () => {
    console.log("Evento do componente Main (componente pai) acionado!");
  };
  return (
    <>
      {/* Arrow function como prop */}
      <ShowMessage arrowfunction={mostrarMensagem} />
    </>
  );
};

export default Main;
