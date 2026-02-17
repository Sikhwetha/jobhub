'use client';

import { Upload, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CVSubmit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (formData.fullName && formData.email && formData.phone && formData.position && file) {
      // Create WhatsApp message
      const message = `Hello! I'm submitting my CV for the JobHub platform.

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Position Interested In: ${formData.position}
CV File: ${file.name}

Looking forward to connecting!`;

      // Encode message for WhatsApp
      const encodedMessage = encodeURIComponent(message);
      
      // Open WhatsApp channel with message
      window.open(
        `https://whatsapp.com/channel/0029Vb3nuYN6LwHk1EJ0du1k?text=${encodedMessage}`,
        '_blank'
      );

      setIsSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
      });
      setFile(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Submit Your CV</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Join JobHub and find your dream job opportunity</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {isSubmitted ? (
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-green-200 dark:border-green-800 p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">CV Submitted Successfully!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Thank you for submitting your CV. Our team will review it and get back to you within 48 hours at the email address provided.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
              Make sure to check your email (including spam folder) for updates from JobHub.
            </p>
            <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium inline-block">
              Explore More Opportunities
            </Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-8">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27 (0) 123-456-7890"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Position Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Position You're Interested In *
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a position type</option>
                  <option value="job">Employment / Job Position</option>
                  <option value="internship">Internship Program</option>
                  <option value="learnership">Learnership Program</option>
                </select>
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Upload Your CV (PDF, DOC, or DOCX) *
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-slate-700 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="cv-upload"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer block">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {file ? file.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      PDF, DOC, or DOCX (Max 10MB)
                    </p>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={!formData.fullName || !formData.email || !formData.phone || !formData.position || !file}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Submit Your CV
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
                By submitting your CV, you agree to JobHub's terms and conditions and privacy policy.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
