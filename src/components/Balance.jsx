import {useGlobalState} from "../context/GlobalState"

function Balance () {
    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className="balance-display">
            <h3>Your Balance:</h3>
            <h1 className="balance-total">{total}$</h1>
        </div>
    )
}

export default Balance;