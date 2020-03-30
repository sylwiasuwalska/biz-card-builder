import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'


const initialState = {
    name: "Sylwia Suwalska",
    email: "sylwia@sylwia.com",
    telephone: "607-901-805",
    address: "Świętego Spokoju 7, Nepal"
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;