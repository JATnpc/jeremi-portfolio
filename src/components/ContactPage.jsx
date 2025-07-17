import React, { useState } from 'react';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple alert for now
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center">
      <div className="w-full max-w-2xl flex flex-col items-center pt-12">
        {/* Back Button */}
        <div className="w-full mb-8">
          <Link 
            to="/" 
            className="flex items-center text-neutral-400 hover:text-white transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to Portfolio
          </Link>
        </div>

        {/* Contact Form */}
        <div className="w-full bg-transparent border border-white rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-xl font-light text-white tracking-widest mb-2" style={{ fontFamily: 'InterVariable, sans-serif', color: '#ffffff' }}>
                GET IN TOUCH
              </h1>
              <p className="text-white text-sm">
                Whether you have a question, a suggestion, or just want to connect, feel free to drop a message below. Always open for a good conversation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center space-x-2 px-6 py-2 border border-white/30 rounded-full text-white font-semibold hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 