import "../css/Main.css";
{
  /* Garante que o estilo certo seja renderizado onde deve */
}
const Main = () => {
  return (
    <>
      <h3>Esta é a área principal - Componente Main</h3>
      <p className="text-primary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
        doloribus velit odit sapiente molestiae pariatur. Eligendi facilis
        pariatur, ex autem optio animi unde hic, quis quisquam aperiam
        voluptates voluptate earum.
      </p>
      <p className="texto-destaque">
        Este parágrafo utiliza a classe 'texto-destaque' definida em Main.css
      </p>
      {/* Estilização inline -> ATENÇÃO A ADEQUAÇÃO DE PROPRIEDADES */}
      {/* Primeira chave: Conteúdo dinâmico. Segunda chave: Inserção de objeto (Objeto CSS, neste caso)*/}
      <p
        style={{
          color: "purple",
          padding: "10px",
          borderColor: "red",
          borderStyle: "dashed",
          borderWidth: "2px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quos ad
        quia eum natus ipsum neque quisquam sunt aliquid perferendis. Minima
        obcaecati laboriosam velit totam, vel sint eius nihil vitae. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Amet soluta temporibus
        expedita voluptatem alias quia accusantium consequatur fugiat doloremque
        minus facere architecto nesciunt, placeat unde dolore, enim voluptas!
        Deleniti, voluptas!
      </p>
    </>
  );
};

export default Main;
