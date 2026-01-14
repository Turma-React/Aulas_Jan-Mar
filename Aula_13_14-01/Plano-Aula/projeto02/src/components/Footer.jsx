import "../css/Footer.css";
const Footer = () => {
  const ehNatal = false;
  const numeroVisitas = 100;
  const genero = "feminino"; // ou "feminino"
  return (
    <>
      {/* CSS Dinâmico (Inline) */}
      <p style={ehNatal ? { color: "blue" } : { color: "red" }}>
        2026 Minha Empresa. Todos os direitos reservados.
      </p>
      <p
        style={numeroVisitas > 500 ? { fontWeight: "bold" } : { color: "gray" }}
      >
        Número de visitas: {numeroVisitas}
      </p>
      <p className={genero === "masculino" ? "text-man" : "text-woman"}>
        É muito bom te ver por aqui!
      </p>
    </>
  );
};

export default Footer;
