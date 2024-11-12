function DashboardElement({ title, value }) {
  return (
    <div className="p-6 rounded-lg bg-white shadow-md flex flex-col gap-2 justify-center items-center border border-gray-200 transition-transform transform hover:scale-105">
      <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export default DashboardElement;