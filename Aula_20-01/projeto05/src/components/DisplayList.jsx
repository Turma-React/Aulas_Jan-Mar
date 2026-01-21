const DisplayList = ({ lista }) => {
  return (
    <ul>
      {lista.map((produto, index) => (
        <li key={index}>
          {produto.item} - {produto.quantidade} {produto.medida}
        </li>
      ))}
    </ul>
  );
};

export default DisplayList;
