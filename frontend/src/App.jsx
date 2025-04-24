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
      const newFeedback = { name, email, message };
      setFeedbacks((prev) => [...prev, newFeedback]);
      setForm({ name: '', email: '', message: '' });
      setLoading(false);
      alert('Feedback submitted successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-6">
      <div className="w-full max-w-xl bg-white-350/90 p-8 rounded-2xl shadow-xl space-y-6 transition-transform duration-300 ease-in-out hover:scale-[1.01]">
        {!showAdminView ? (
          <>
            <h1 className="text-3xl font-bold text-center text-gray-800">Feedback Collector</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Feedback"
                value={form.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                rows="4"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                {loading ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>

            <button
              onClick={() => setShowAdminView(true)}
              className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 transition mt-4"
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
