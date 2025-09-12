'use client';

import { useState } from 'react';

// Metadata is handled in layout.tsx for client components

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/submissions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'inquiry',
          name: formData.fullName,
          email: formData.workEmail,
          company: formData.companyName,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          fullName: '',
          companyName: '',
          workEmail: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(`Submission failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background-primary">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 font-heading">
            Let's Start the Conversation
          </h1>
          <p className="text-xl text-text-main max-w-3xl mx-auto font-body">
            Ready to establish your business in China? Get in touch with our experts for a free consultation and personalized guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-text-heading mb-6 font-heading">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-text-heading mb-2 font-body">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-secondary border-2 border-gray-200 rounded-lg text-text-main placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300 font-body"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-text-heading mb-2 font-body">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-secondary border-2 border-gray-200 rounded-lg text-text-main placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300 font-body"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-text-heading mb-2 font-body">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background-secondary border-2 border-gray-200 rounded-lg text-text-main placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300 font-body"
                  placeholder="Enter your work email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-heading mb-2 font-body">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background-secondary border-2 border-gray-200 rounded-lg text-text-main placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-all duration-300 resize-none font-body"
                  placeholder="Tell us about your business goals and how we can help..."
                />
              </div>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 font-body">
                  {submitMessage}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 font-body">
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 font-body ${
                  isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-text-heading mb-6 font-heading">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1 font-heading">Email</h3>
                    <p className="text-text-main font-body">info@chinabizsolutions.com</p>
                    <p className="text-gray-500 text-sm font-body">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1 font-heading">Phone</h3>
                    <p className="text-text-main font-body">+86 21 1234 5678</p>
                    <p className="text-gray-500 text-sm font-body">Mon-Fri 9:00 AM - 6:00 PM (CST)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-heading mb-1 font-heading">Office Address</h3>
                    <p className="text-text-main font-body">
                      Suite 2001, Shanghai Tower<br />
                      501 Yincheng Middle Road<br />
                      Pudong New Area, Shanghai 200120<br />
                      China
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-text-heading mb-4 font-heading">Why Choose Us?</h3>
              <ul className="space-y-3 text-text-main font-body">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-cyan mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-cyan mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-cyan mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert local knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent-cyan mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ongoing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
