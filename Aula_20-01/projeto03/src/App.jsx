import { useState } from "react";
import ProductInStorage from "./components/ProductInStorage";
import ShowMessage from "./components/ShowMessage";
function App() {
  const [registro, setRegistro] = useState([
    { id: 1, nome: "Produto A", quantidade: 10, medida: "Kg" },
    { id: 2, nome: "Produto B", quantidade: 5, medida: "L" },
    { id: 3, nome: "Produto C", quantidade: 8, medida: "Un" },
  ]);

  const excluirRegistro = (id) => {
    const novosRegistros = registro.filter((r) => r.id != id);
    console.log(novosRegistros);
    setRegistro(novosRegistros);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2>ESTOQUE DO ALMOXARIFADO</h2>
      {registro.length > 0 ? (
        registro.map((r) => (
          <ProductInStorage
            key={r.id}
            nome={r.nome}
            quantidade={r.quantidade}
            medida={r.medida}
            functionDelete={() => excluirRegistro(r.id)}
          />
        ))
      ) : (
        <ShowMessage mensagem="Nenhum produto em estoque" tipo="aviso" />
      )}
    </div>
  );
}

export default App;
