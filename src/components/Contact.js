import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    address: "",
    zip: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-20 shadow-xl">
        <div className="bg-maroon text-white rounded-lg py-4 mb-9 border border-gray-300 shadow-lg filter drop-shadow-md">
          <h2 className="text-4xl font-bold text-center">Contact Us</h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/2 bg-white p-8 rounded-lg border border-gray-300 shadow-xl mb-6 lg:mb-0"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address (optional)"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="Zip Code (optional)"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full p-2 bg-maroon text-white rounded hover:bg-red-700"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="lg:w-1/2 bg-white p-8 rounded-lg border border-gray-300 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">
              Don't Miss Your Opportunity
            </h2>
            <p className="text-lg leading-relaxed">
              Did you know that over 14 billion dollars from foreclosures, tax
              overpayments, mortgage overpayments, funds related to property
              sales, and money from other types of transactions are being held
              by the U.S. Government – just waiting to be claimed!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
