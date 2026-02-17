'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WHATSAPP_CHANNELS = [
  'https://whatsapp.com/channel/0029VbCL1THAYlUJphHsYz2V',
  'https://whatsapp.com/channel/0029Vb7b60J65yDGLJIgea0l',
  'https://whatsapp.com/channel/0029Vb3nuYN6LwHk1EJ0du1k',
  'https://whatsapp.com/channel/0029VbC2n464yltQ9iha8r2d',
  'https://whatsapp.com/channel/0029VbCarqs6BIEcC5PxBx1i',
  'https://whatsapp.com/channel/0029VbBrKLc5a24CZKGmt245',
];

const CHANNEL_NAMES = [
  'Daily Job Updates',
  'Internship Opportunities',
  'Learnership Programs',
  'Restaurant Jobs',
  'Food Industry Careers',
  'Work Updates Channel',
];

export default function WhatsAppPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<{
    url: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    // Check if user has dismissed popup in this session
    const dismissed = sessionStorage.getItem('whatsapp_popup_dismissed');
    
    // Set timeout to show popup after 1 minute
    const timer = setTimeout(() => {
      if (!dismissed) {
        const randomIndex = Math.floor(Math.random() * WHATSAPP_CHANNELS.length);
        setSelectedChannel({
          url: WHATSAPP_CHANNELS[randomIndex],
          name: CHANNEL_NAMES[randomIndex],
        });
        setShowPopup(true);
      }
    }, 60000); // 1 minute

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem('whatsapp_popup_dismissed', 'true');
  };

  const handleChannelClick = () => {
    if (selectedChannel) {
      window.open(selectedChannel.url, '_blank');
      handleClose();
    }
  };

  if (!showPopup || !selectedChannel) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={handleClose}
      ></div>

      {/* Popup Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-1 transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-2">Join Us on WhatsApp!</h2>
            <p className="text-white/90">Stay updated with the latest opportunities</p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Channel:</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {selectedChannel.name}
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Get exclusive job postings, internship opportunities, learnership programs, and career tips delivered straight to your WhatsApp. Join thousands of job seekers in South Africa!
            </p>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Daily job postings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Career tips and advice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Exclusive opportunities</span>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="bg-gray-50 dark:bg-slate-800 p-6 space-y-3">
            <button
              onClick={handleChannelClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <span>📱</span>
              Join Channel on WhatsApp
            </button>
            <button
              onClick={handleClose}
              className="w-full bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600 text-gray-900 dark:text-white font-semibold py-3 rounded-lg transition"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
