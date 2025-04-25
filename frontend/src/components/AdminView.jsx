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
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl shadow-md p-6 space-y-3 transition-transform hover:scale-[1.01]"
            >
              <div className="text-xl font-semibold text-gray-800">
                {fb.name}
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-medium text-gray-600">Email:</span> {fb.email}
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-medium text-gray-600">Feedback:</span> {fb.message}
              </div>
              <div className="text-xs text-gray-500 text-right">
                Submitted on: {new Date(fb.timestamp).toLocaleString()}
              </div>
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
