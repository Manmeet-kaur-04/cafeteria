import React from 'react';

const Table = ({ tableNumber, status }) => {
  const tableColorClass = status === 'pending' ? 'bg-red-500' : 'bg-blue-500';

  return (
    <div className={`table-box ${tableColorClass} p-4 rounded-lg shadow-lg text-white text-center`}>
      <h3 className="text-xl font-semibold">Table {tableNumber}</h3>
      <p className="text-sm">{status === 'pending' ? 'Order Pending' : 'Order Completed'}</p>
    </div>
  );
};

export default Table;
