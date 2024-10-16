// components/Loans.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Loans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Fetch loan data
    axios.get('/api/loans').then(response => {
      setLoans(response.data);
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Manage Loans</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Member</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.bookTitle}</td>
              <td>{loan.memberName}</td>
              <td>{loan.dueDate}</td>
              <td>{loan.isOverdue ? "Overdue" : "On Time"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Loans;
