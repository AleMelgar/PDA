import React from 'react';

function Gauge({ title, value, maxValue, isAlert }) {
  const percentage = Math.min((value / maxValue) * 100, 100);
  const angle = (percentage * 180) / 100;

  return (
    <div className={`p-10 rounded-xl bg-white shadow-lg flex flex-col items-center border transition-transform transform hover:scale-105 ${isAlert ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}>
      <h2 className="font-semibold text-lg text-gray-700 mb-6">{title}</h2>
      <div className="relative w-48 h-24 flex items-center justify-center">
        <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full">
          {/* Fondo del semicírculo */}
          <path d="M 10 45 A 40 40 0 0 1 90 45" stroke="#e0e0e0" strokeLinecap="round" strokeWidth="10" fill="none" />
          <path
            d="M 10 45 A 40 40 0 0 1 90 45"
            stroke={isAlert ? '#ff6b6b' : '#4caf50'}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round" // Redondea los extremos de la línea
            strokeDasharray={`${(angle / 180) * 126} 126`}
            style={{ transition: 'stroke-dasharray 0.5s ease-in-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Aumenta la separación entre el número y el gauge */}
          <p className="text-3xl font-bold text-gray-900 mt-6">{value}</p>
          <p className="text-sm text-gray-500">Max: {maxValue}</p>
        </div>
      </div>
    </div>
  );
}

export default Gauge;
