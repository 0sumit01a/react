import React, { useEffect, useMemo, useState } from 'react'
import Headers from './components/Header.jsx'
import Balance from './components/Balance.jsx'
import IncomeExpense from './components/IncomeExpense.jsx'
import Transaction from './components/Transaction.jsx'
import AddTransaction from './components/AddTransaction.jsx'
const App = () => {
    // Load from localStorage initially
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
    const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = useMemo(() => {
    return transactions
      .filter((t) => t.amount > 0)
      .reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  const expense = useMemo(() => {
    return transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  const balance = useMemo(() => income + expense, [income, expense]);

  return (
    <div className='min-h-screen bg-gray-200 flex  flex-col items-center p-6'>
      <div className='bg-white shadow-xl rounded-2xl p-6 w-full max-w-md'>
      <Headers />
      <Balance balance={balance} />
      <IncomeExpense income={income} expense={expense} />
      <AddTransaction addTransaction={addTransaction}  />
      <Transaction transactions={transactions}
          deleteTransaction={deleteTransaction} />
      </div>

    </div>
  )
}

export default App
