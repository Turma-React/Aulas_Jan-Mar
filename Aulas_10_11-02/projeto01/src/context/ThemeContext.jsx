import { createContext, useState } from "react";

//Criação do contexto
export const ThemeContext = createContext();

//Criação do provedor do contexto
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    //ArrowFunction para alternar o tema
    const toggleTheme = () => {
        setTheme(prev => (prev === "light") ? "dark" : "light" );
    }

    //Valores globais compartilhados
    const value = { theme, toggleTheme }
    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
} 


