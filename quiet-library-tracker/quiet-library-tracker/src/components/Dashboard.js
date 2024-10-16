// components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Library Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold">Total Books</h2>
          <p>150</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold">Members</h2>
          <p>50</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold">Books on Loan</h2>
          <p>30</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="font-semibold">Overdue Books</h2>
          <p>5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
