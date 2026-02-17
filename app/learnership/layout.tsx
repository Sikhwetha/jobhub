import React from 'react';

export const metadata = {
  title: 'JobHub — Learnerships',
  description: 'Structured learnership programs and training opportunities.',
};

export default function LearnershipLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Learnerships</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Apply for accredited learnership programs and gain workplace experience.</p>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
