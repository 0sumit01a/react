import React from 'react'

const Transaction = ({ transactions, deleteTransaction }) => {
  return (
     <ul>
      {transactions.length === 0 ? (
        <p className="text-center text-gray-400 italic">No transactions yet</p>
      ) : (
        transactions.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center mb-2 p-2 border-l-4 rounded ${
              t.amount > 0
                ? "border-green-400 bg-green-50"
                : "border-red-400 bg-red-50"
            }`}
          >
            <span>{t.text}</span>
            <div className="flex items-center gap-3">
              <span
                className={`${
                  t.amount > 0 ? "text-green-600" : "text-red-600"
                } font-semibold`}
              >
                ₹{t.amount}
              </span>
              <button
                onClick={() => deleteTransaction(t.id)}
                className="text-gray-400 hover:text-red-500"
              >
                ❌
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  )
}

export default Transaction
