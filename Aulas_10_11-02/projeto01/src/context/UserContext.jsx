import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({
            name: "Mauro",
            role: "admin"
        });
    }
    
    const logout = () => {
        setUser(null);
    }    

    const value = {
        user,
        login,
        logout,
        isAuthenticated: !!user
    };

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );

     
}

