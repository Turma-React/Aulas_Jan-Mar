import ShowUserLogged from "./components/ShowUserLogged/ShowUserLogged";
function App() {
  return (
    <>
      <ShowUserLogged
        nome="Ana Silva"
        nivel="ouro"
        isLoading={true}
        isDisabled={true}
        isDarkMode={true}
      />
    </>
  );
}

export default App;
