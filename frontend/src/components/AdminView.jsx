import React from 'react';
import '../index.css';

const AdminView = ({ feedbacks, goBack }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Submitted Feedbacks</h2>

      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-600">No feedback submitted yet.</p>
      ) : (
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {feedbacks.map((fb, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md border border-gray-300 transition hover:shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold text-gray-800">{fb.name}</p>
                <p className="text-xs text-gray-500">{fb.timestamp}</p>
              </div>
              <p className="text-sm text-gray-600 italic">{fb.email}</p>
              <p className="mt-3 text-gray-700">{fb.message}</p>
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
