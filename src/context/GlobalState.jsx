import { createContext, useContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer"

const initialState = {
    transactions: []
};

export const Context = createContext();

export const useGlobalState = () => {
    const context = useContext(Context);
    return context;
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer (AppReducer , initialState,
    () => {
       const localData = localStorage.getItem('transactions');
       return localData ? JSON.parse(localData) : initialState;
    });

    //LocalStorage para guardar datos de sesion
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state])


    //Añadir transaccion
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    //Eliminar transaccion
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return (
        <Context.Provider value={{transactions: state.transactions, addTransaction, deleteTransaction}}>
            {children}
        </Context.Provider>
    );
};