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
    
    // Show popup after a random delay (choose from 1m, 10m, 30m, 1h)
    const delays = [60_000, 600_000, 1_800_000, 3_600_000];
    const chosenDelay = delays[Math.floor(Math.random() * delays.length)];

    const timer = setTimeout(() => {
      if (!dismissed) {
        const randomIndex = Math.floor(Math.random() * WHATSAPP_CHANNELS.length);
        setSelectedChannel({
          url: WHATSAPP_CHANNELS[randomIndex],
          name: CHANNEL_NAMES[randomIndex],
        });
        setShowPopup(true);
      }
    }, chosenDelay);

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
        aria-hidden
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
          <div className="flex">
            <div className="w-2/5 bg-green-600 p-6 flex flex-col items-center justify-center">
              <div className="bg-white rounded-full p-3 shadow-md">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.5 3.5C18.4 1.4 15.6 0.25 12.5 0.25 5.96 0.25 0.75 5.46 0.75 12c0 2.12.58 4.09 1.67 5.8L0 24l6.38-1.67c1.63.92 3.49 1.43 5.62 1.43 6.54 0 11.75-5.21 11.75-11.75 0-3.1-1.15-5.9-3.63-8.21z" fill="#25D366"/>
                  <path d="M17.3 14.38c-.3-.15-1.76-.86-2.04-.96-.28-.1-.48-.15-.68.15s-.78.96-.96 1.16c-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.3-.34.47-.51.16-.16.21-.28.33-.46.12-.17.06-.32-.03-.47-.1-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.07-.79.32-.27.25-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.06.15.2 2.08 3.2 5.04 4.49 2.96 1.3 2.96.87 3.5 0 .54-.87.62-1.61.43-1.76-.19-.15-.7-.25-1-.4z" fill="#fff"/>
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mt-4 text-center">Join WhatsApp Channel</h3>
              <p className="text-white/90 text-sm mt-2 text-center">Get job alerts & exclusive opportunities</p>
            </div>

            <div className="w-3/5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Featured Channel</p>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">{selectedChannel.name}</h4>
                </div>
                <button onClick={handleClose} aria-label="Close popup" className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">Receive timely job postings, internships, and learnership updates tailored for South Africa. Join the channel to connect directly.</p>

              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-50 text-green-600">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Daily job postings</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-50 text-green-600">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Exclusive internship & learnership leads</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-50 text-green-600">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Career tips & application help</span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleChannelClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                >
                  <span className="text-xl">📱</span>
                  <span>Join on WhatsApp</span>
                </button>

                <button
                  onClick={handleClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-white bg-white dark:bg-slate-800 hover:bg-gray-50 py-3 rounded-lg transition"
                >
                  Maybe Later
                </button>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                <p>Other channels you might like:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {WHATSAPP_CHANNELS.map((url, idx) => (
                    <a key={url} href={url} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-xs hover:bg-gray-200">
                      {CHANNEL_NAMES[idx]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
