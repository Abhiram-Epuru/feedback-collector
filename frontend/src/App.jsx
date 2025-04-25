import { useState } from 'react';
import AdminView from './components/AdminView.jsx';
import './index.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [showAdminView, setShowAdminView] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { name, email, message } = form;

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const timestamp = new Date().toLocaleString();
      const newFeedback = { name, email, message, timestamp };
      setFeedbacks((prev) => [...prev, newFeedback]);
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
      alert('Feedback submitted successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-6">
      <div className="w-full max-w-xl bg-white/90 p-8 rounded-2xl shadow-xl space-y-6 transition-transform duration-300 ease-in-out hover:scale-[1.01]">
        {!showAdminView ? (
          <>
            <h1 className="text-3xl font-bold text-center text-gray-800">Feedback Collector</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Feedback
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>

            <button
              onClick={() => setShowAdminView(true)}
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition mt-4 font-medium"
            >
              View Submitted Feedback
            </button>

            <div className="text-center text-sm text-gray-500 mt-6">
              Developed by Abhiram Epuru – Feedback Collector – 2025
            </div>
          </>
        ) : (
          <AdminView feedbacks={feedbacks} goBack={() => setShowAdminView(false)} />
        )}
      </div>
    </div>
  );
}

export default App;
