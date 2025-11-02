export default function Balance({ balance }) {
  return (
    <div className="mb-4 text-center">
      <h2 className="text-lg font-semibold">Your Balance</h2>
      <p className="text-3xl font-bold">₹{balance.toFixed(2)}</p>
    </div>
  );
}
