import {GlobalProvider} from "./context/GlobalState"

import Balance from "./components/Balance"
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";
import Calculator from './components/Calculator';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <GlobalProvider>
      <div id="Start">
      <Header/>
      </div>
      <main>
    <div className="background">
          <div className="box">
            <div id="Expenses" className="container">
              <h1 className="title-Finances">Your Finances</h1>
              <IncomeExpenses/>
              <Balance />
              <TransactionForm />
            </div>
          <div className="rigth-content">
            <ExpenseChart/>
            <TransactionList/>
          </div>
        </div>
    </div>

    <div className="background">
          <div className="box">
            <div className="container">
              <h1 className="title-Calculator">Calculator</h1>
                <div id="Calculator" className="App">
                  <Calculator />
                </div>
            </div>
        </div>
    </div>
    </main>
    <div>
      <Footer/>
    </div>
    </GlobalProvider>
  )
}

export default App;