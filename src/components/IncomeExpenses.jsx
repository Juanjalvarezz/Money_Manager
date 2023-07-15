import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {

const {transactions} = useGlobalState();
const amounts = transactions.map(transaction => transaction.amount)

const income = amounts.filter(item => item > 0) .reduce((acc, item) => (acc += item), 0);
const expense = amounts.filter(item => item < 0) .reduce ((acc, item) => acc + item , 0) * -1;

  return (
    <>
    <div className="income-expenses">
        <h4>● Incomes</h4>
        <p className="text-Income-Expenses">{income}$</p>
    </div>
    <div className="income-expenses">
        <h4>● Expense</h4>
        <p className="text-Income-Expenses">{expense}$</p>
    </div>
    </>
  )
}

export default IncomeExpenses