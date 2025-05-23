import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.firstName}! Message sent.`); // Replace with real logic
    window.location.href = '/'; // Redirect to home
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="First Name"
          required
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <textarea
          placeholder="Message"
          required
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}