function DashboardElement({ title, value, isAlert }) {
  return (
    <div className={`p-6 rounded-xl bg-white shadow-lg flex flex-col gap-2 justify-center items-center border transition-transform transform hover:scale-105 ${isAlert ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
      <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export default DashboardElement;