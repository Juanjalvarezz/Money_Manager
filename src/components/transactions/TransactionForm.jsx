import { useState } from "react";
import {useGlobalState} from "../../context/GlobalState"

function TransactionForm () {
    const {addTransaction} = useGlobalState();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description, 
            amount: +amount,
        });
        setAmount("");
        setDescription("");
    };

    return (
        <div>
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Enter a description" 
            onChange={(e) => setDescription(e.target.value)}
            className="transactionForm-text"   
            value={description}
            />

            <input type="number"
            step={"0.01"} 
            placeholder="00.00" onChange={(e) => setAmount(e.target.value)}
            className="transactionForm-number"
            value={amount}
            />
            <button className="transactionForm-button"><b>✚</b> Add Transaction</button>
        </form>

        </div>
    )
}

export default TransactionForm;