export default function IncomeExpense({ income, expense }) {
  return (
    <div className="flex justify-between bg-gray-50 p-4 rounded-lg mb-6">
      <div className="text-center">
        <h3 className="text-sm uppercase text-gray-500">Income</h3>
        <p className="text-green-500 font-semibold">₹{income.toFixed(2)}</p>
      </div>
      <div className="text-center">
        <h3 className="text-sm uppercase text-gray-500">Expense</h3>
        <p className="text-red-500 font-semibold">₹{Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
}
