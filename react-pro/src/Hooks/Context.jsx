import { createContext } from "react";

export const Context = createContext();

export const UserContext =({children})=>{
    const user={name:"J",phn:"8883139860"}
    return (
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}

export default Context; 