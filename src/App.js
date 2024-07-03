import './App.css';
import AddingTransaction from './components/AddingTransactions';
import DisplayTransaction from './components/DisplayTransaction';
import {useState} from "react"



function App() {

  const [transactions, setTransactions] = useState([]);


  const add = ((transactionItem, amount, transactionType) => {
    setTransactions((transactions)=>[...transactions, {transactionItem:transactionItem, amount:amount, transactionType:transactionType}]);
    console.log(transactions);
});

  return (
    <div className="Wrapper">
      <DisplayTransaction transactions = {transactions}/>
      <br/>
      <AddingTransaction add={add}/>
    </div>
  );
}

export default App;

