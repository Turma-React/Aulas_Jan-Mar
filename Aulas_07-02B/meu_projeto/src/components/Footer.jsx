const Footer = ({ children, usuario }) => {
  return (
    <h5>
      Mensagem do sistema: {children} de {usuario}
    </h5>
  );
};
export default Footer;
