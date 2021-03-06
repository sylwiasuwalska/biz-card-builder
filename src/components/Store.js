import React, {createContext, useReducer} from "react";
import Reducer from "./Reducer";

const initialState = {
    name: "Wojciech Kłos",
    profession: "IT manager",
    email: "wojciech@wojciechklos.com",
    telephone: "+48-607-901-805",
    address: "ul. Świętego Spokoju 7, Brzeziny",
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
    );
};

export const Context = createContext(initialState);
export default Store;
