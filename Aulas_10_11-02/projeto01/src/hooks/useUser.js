import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUser = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("Hook deve ser usado em um Provider");
    }
    return context;
}

export default useUser;