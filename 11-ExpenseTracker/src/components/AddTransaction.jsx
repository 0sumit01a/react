import React, { useEffect, useRef, useState } from 'react'

const AddTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    })
   const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return alert("Please enter both fields");

    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
    inputRef.current.focus(); // focus again after adding
  };    
    return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <input type="text"
        ref={inputRef} 
        placeholder='Enter the text'
        value={text}
        onChange={(e)=> setText(e.target.value)
            
        }
        className='w-full border p-2 mb-3 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
      />
      <input
        type="number"
        placeholder="Enter amount (negative for expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border p-2 mb-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
        <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors'>Add Transaction</button>
    </form>
  )
}

export default AddTransaction
