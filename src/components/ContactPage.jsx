import React, { useState } from "react";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(""); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    // EmailJS configuration
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_ginuacq", // Your EmailJS service ID
        "template_2tt2yxs", // Your EmailJS template ID
        templateParams,
        "ZA99fJjdGzeHZT-aX", // Your EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center justify-center px-2 sm:px-4 py-4">
      <div className="w-full max-w-2xl">
        {/* Back Button */}
        <div className="w-full mb-8">
          <Link
            to="/"
            className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" />
            Back to Portfolio
          </Link>
        </div>

        {/* Contact Form Container */}
        <div className="w-full bg-transparent border border-white rounded-lg p-4 sm:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white tracking-widest mb-4">
              GET IN TOUCH
            </h1>
            <p className="text-white text-base">
              Whether you have a question, a suggestion, or just want to
              connect, feel free to drop a message below. Always open for a good
              conversation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                  className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-white text-sm mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white text-sm mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center space-x-2 px-6 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white font-semibold hover:bg-[#1e293b] hover:border-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
              tabIndex={0}
              onKeyDown={e => { if ((e.key === 'Enter' || e.key === ' ') && !isSubmitting) { e.preventDefault(); e.stopPropagation(); } }}
            >
              <FaPaperPlane />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-[#1e293b] border border-gray-700 rounded-lg text-white">
                <p className="text-sm font-medium">
                  Thank you for your message! I will get back to you soon.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-[#1e293b] border border-gray-700 rounded-lg text-white">
                <p className="text-sm font-medium">
                  Please fill out all fields correctly. Make sure your email is
                  valid.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
