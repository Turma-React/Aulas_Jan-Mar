import Button from "./components/Button";
import InputText from "./components/InputText";
import { useState, useMemo } from "react";
import Select from "./components/Select";
import DisplayList from "./components/DisplayList";

function App() {
  const [item, setItem] = useState("");
  const onChangeItem = (event) => {
    console.log(event.target.value);
    setItem(event.target.value);
  };

  const [quantidade, setQuantidade] = useState(1);
  const onChangeQuantidade = (event) => {
    const value = Number(event.target.value);

    setQuantidade((prev) => {
      if (!value || value < 1) {
        return prev;
      }
      return value;
    });
    console.log(event.target.value);
  };
  const medidas = [
    { value: "Kg", label: "Kg" },
    { value: "L", label: "L" },
    { value: "Un", label: "Un" },
    { value: "Pct", label: "Pct" },
  ];
  const [medida, setMedida] = useState("");
  const onChangeMedida = (event) => {
    console.log(event.target.value);
    setMedida(event.target.value);
  };
  const cleanForm = () => {
    setItem("");
    setQuantidade(1);
    setMedida("");
  };

  const isOk = /\S/.test(item);

  const [estoque, setEstoque] = useState([]);
  const handleAddEstoque = () => {
    const novoItem = {
      item,
      quantidade,
      medida,
    };
    setEstoque((prev) => [...prev, novoItem]);
    cleanForm();
  };

  const quantTotal = useMemo(() => {
    return estoque.reduce((s, r) => s + r.quantidade, 0);
  }, [estoque]);

  return (
    <>
      <InputText
        nome="item"
        tipo="text"
        label="Item"
        value={item}
        onChange={onChangeItem}
      />
      <InputText
        nome="quantidade"
        tipo="number"
        label="Quantidade"
        value={quantidade}
        onChange={onChangeQuantidade}
      />
      <Select
        name="medida"
        label="Unidade de medida"
        options={medidas}
        value={medida}
        onChange={onChangeMedida}
      />
      <Button
        label="Adicionar"
        nome="adicionar"
        tipo="button"
        onClick={handleAddEstoque}
        disabled={!isOk}
      />
      <Button
        label="Limpar"
        nome="limpar"
        tipo="button"
        onClick={cleanForm}
        value="Limpar"
        disabled={!isOk}
      />
      <h3>
        Estoque: (Itens cadastrados: {estoque.length} / Soma das quantidades:{" "}
        <b>{quantTotal}</b>)
      </h3>

      {estoque.length > 0 ? (
        <DisplayList lista={estoque} />
      ) : (
        <h4>Estoque vazio</h4>
      )}
    </>
  );
}

export default App;
