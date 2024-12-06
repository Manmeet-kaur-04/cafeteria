import React, { useState } from 'react';
import Table from '../layouts/Table';

const Tableview = () => {
  const initialTables = [
    { number: 1, status: 'pending' },
    { number: 2, status: 'completed' },
    { number: 3, status: 'pending' },
    { number: 4, status: 'completed' },
    { number: 5, status: 'pending' },
    { number: 6, status: 'completed' },
    { number: 7, status: 'completed' },
    { number: 8, status: 'completed' },
  ];

  const [tables, setTables] = useState(initialTables);

  const toggleTableStatus = (tableNumber) => {
    setTables(tables.map((table) =>
      table.number === tableNumber
        ? { ...table, status: table.status === 'pending' ? 'completed' : 'pending' }
        : table
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h2 className="text-2xl font-bold mb-6 text-black ">Table System</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tables.map((table) => (
          <div key={table.number} onClick={() => toggleTableStatus(table.number)} className="cursor-pointer">
            <Table tableNumber={table.number} status={table.status} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tableview;