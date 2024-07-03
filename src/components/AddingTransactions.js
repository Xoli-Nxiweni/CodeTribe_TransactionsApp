import {useState} from "react"

let AddingTransaction = (props) =>{

    const [transactionItem, setTransactionItem] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('');

    const add = (()=>{
        props.add(transactionItem, amount, transactionType)
    });

    return(
        <>
            <h1>Add A Transaction</h1>
            <br/>
            <input type ='text' placeholder='Enter Item' onChange={(event) => setTransactionItem(event.target.value)}/>
            <input type ='text' placeholder='Enter Amount' onChange={(event) => setAmount(event.target.value)}/>

            <select onChange={(event) => setTransactionType (event.target.value)}>
                <option>Income</option>
                <option>Expense</option>
            </select>

            <button onClick={add}>Add Transaction</button>
        </>
    )
}

export default AddingTransaction;