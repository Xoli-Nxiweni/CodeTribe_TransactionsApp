let DisplayTransaction = (props) =>{
    return(
        <>
            <h4>Transaction History</h4>
            {props.transactions.map(data =>(
                <div>
                    <div className="listItem">
                    <div>
                        
                        <h5>{data.transactionItem}</h5>
                    </div>
                    <div>
                        <h5>{data.amount ? `R ${data.amount}` : `R 0`}</h5>
                    </div>
                    <div>
                        {data.transactionType == "Expense" ? <div className="expenseIndicator"></div> : <div className="incomeIndicator"></div>}
                    </div>
                </div>
                </div>
            ))}
        </>
    )
}

export default DisplayTransaction;