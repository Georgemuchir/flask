// components/Members.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch members data
    axios.get('/api/members').then(response => {
      setMembers(response.data);
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Manage Members</h1>
      <button className="bg-blue-500 text-white p-2 rounded">Add New Member</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Member ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.memberId}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
