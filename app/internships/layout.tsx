import React from 'react';

export const metadata = {
  title: 'JobHub — Internships',
  description: 'Discover internships that help you grow your career and skills.',
};

export default function InternshipsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-gray-50 dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Internships</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Short-term programs and internships to jumpstart your career.</p>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
