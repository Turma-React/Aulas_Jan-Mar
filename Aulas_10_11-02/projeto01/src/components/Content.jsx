import useTheme from "../hooks/useTheme"


const Content = () => {
  const { theme } = useTheme();

  const style = {
    background: theme === "light" ? "#F5F5F5": "#333",
    color: theme === "light" ? "#333" : "#F5F5F5"
  };

  return (
    <main style={style}>
        <p>Observe a alteração das cores de fundo e do texto</p>
    </main>
  )
}

export default Content

