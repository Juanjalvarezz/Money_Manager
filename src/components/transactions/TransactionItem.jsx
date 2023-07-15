import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({transaction}) {
    const {deleteTransaction} = useGlobalState();

  return (
<li className="transactionItem-li">
    <p className="transactionItem-p">{transaction.description}</p>
    <div>
    <span className="transactionItem-amount">{transaction.amount}$</span>
    <button className="transactionItem-button" onClick={() => {
        deleteTransaction (transaction.id);
    }}><b>❌</b></button>
    </div>
</li>
  );
}

export default TransactionItem