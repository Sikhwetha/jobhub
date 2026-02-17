'use client';

import { useParams } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Users, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Internship, defaultInternships } from '@/lib/data';

export default function InternshipDetail() {
  const params = useParams();
  const internshipId = params.id as string;
  const [internship, setInternship] = useState<Internship | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedInternships = localStorage.getItem('internshipsData');
    const internshipsData = savedInternships ? JSON.parse(savedInternships) : defaultInternships;
    const foundInternship = internshipsData.find((i: Internship) => i.id === internshipId);
    setInternship(foundInternship || null);
    setLoading(false);
  }, [internshipId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!internship) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Internship Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Internships
          </Link>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{internship.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">{internship.company}</p>
            </div>
            <a
              href={internship.applyUrl || 'https://learnship.jobnewstoday.co.za/internship/'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold h-fit inline-block text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                    <p className="font-bold text-gray-900 dark:text-white">{internship.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Stipend</p>
                    <p className="font-bold text-gray-900 dark:text-white">{internship.stipend}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-bold text-gray-900 dark:text-white">{internship.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Start Date</p>
                    <p className="font-bold text-gray-900 dark:text-white">{internship.startDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About The Internship</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{internship.description}</p>
            </div>

            {/* What You'll Do */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What You'll Do</h2>
              <ul className="space-y-3">
                {internship.overview.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {internship.learningOutcomes.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Requirements</h2>
              <ul className="space-y-3">
                {internship.requirements.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Perks & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {internship.perks.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Mentors */}
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Your Mentors</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{internship.mentors}</p>
              </div>

              {/* Deadline */}
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Application Deadline</p>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{internship.deadline}</p>
              </div>

              {/* Apply Button */}
              <a
                href={internship.applyUrl || 'https://learnship.jobnewstoday.co.za/internship/'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-indigo-600 text-white px-6 py-4 rounded-lg hover:bg-indigo-700 transition font-bold text-lg inline-block text-center"
              >
                Apply For This Internship
              </a>

              {/* Share */}
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Share Opportunity</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    LinkedIn
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    Twitter
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
