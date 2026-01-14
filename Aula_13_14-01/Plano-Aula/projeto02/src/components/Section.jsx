import styles from "../css/Section.module.css";
const Section = () => {
  return (
    <>
      <h1 className={styles.titulo_section}>Section - Titulo</h1>
      <h1 className={styles.titulo_section}>Section - Outro Titulo</h1>
      <p className={styles["texto-section"]}>
        Section - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        euismod, nunc ut laoreet tincidunt, nunc nisl aliquam nunc, eu aliquam
        nisl nunc euismod nunc.
      </p>
    </>
  );
};
export default Section;
