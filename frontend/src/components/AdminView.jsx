import React from 'react';
import '../index.css';

const AdminView = ({ feedbacks, goBack }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Submitted Feedbacks</h2>

      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-600">No feedback submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {feedbacks.map((fb, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <p className="text-lg font-semibold text-gray-800">{fb.name}</p>
              <p className="text-sm text-gray-600">{fb.email}</p>
              <p className="mt-2 text-gray-700">{fb.message}</p>
              <p className="text-xs text-gray-400 mt-2">{new Date(fb.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={goBack}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-6"
      >
        Back to Feedback Form
      </button>
    </div>
  );
};

export default AdminView;
