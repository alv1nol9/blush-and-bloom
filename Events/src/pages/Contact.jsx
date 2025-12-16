// src/pages/Contact.jsx

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      // NOTE: Using the existing backend path you provided
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setSuccess("Message sent successfully. We’ll get back to you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Define a reusable class for the input field styling
  const inputClass = "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bloom-gold focus:border-transparent transition duration-300";


  return (
    <section 
      id="contact"
      className="h-screen w-full flex items-center justify-center p-8 bg-white overflow-auto" // Using white background as a base
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-blush-blue">
            Inquire with <span className="text-bloom-gold">Blush & Bloom</span>
          </h1>
          <p className="text-gray-600 mt-3 text-xl font-light">
            Let’s plan something extraordinary together
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info: Deep Blue Panel */}
          <div className="bg-blush-blue text-white rounded-xl p-10 shadow-2xl">
            <h2 className="text-3xl font-serif font-semibold mb-6 text-bloom-gold border-b border-bloom-gold/50 pb-2">
              Our Contact Details
            </h2>

            <div className="space-y-6 text-lg">
              <p>
                <span className="font-semibold text-bloom-gold block text-xl mb-1">Location:</span>
                Bungoma Road, Kahawa Sukari,<br />Opp. 1st North Avenue
              </p>

              <p>
                <span className="font-semibold text-bloom-gold block text-xl mb-1">Email:</span>
                inquire@blushandbloom.com
              </p>

              <p>
                <span className="font-semibold text-bloom-gold block text-xl mb-1">Phone:</span>
                +254 720 716 984 <br /> +254 710 285 055
              </p>

              <p>
                <span className="font-semibold text-bloom-gold block text-xl mb-1">Working Hours:</span>
                Mon – Fri: 9:00 AM – 4:00 PM
              </p>
            </div>
          </div>

          {/* Right Form: Clean White Panel */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-xl p-10 shadow-2xl space-y-5"
          >
            <h3 className="text-3xl font-serif font-bold text-blush-blue mb-4">
              Request Consultation
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClass}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject / Event Type"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
            />

            <textarea
              name="message"
              placeholder="Tell us about your event details..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className={`${inputClass} resize-none`}
            />

            {/* Messages */}
            {success && (
              <p className="text-green-600 font-semibold">{success}</p>
            )}
            {error && (
              <p className="text-red-600 font-semibold">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-bloom-gold hover:opacity-90 text-blush-blue text-lg font-bold py-3 rounded-md transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending Inquiry..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;