'use client';

import { useParams } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Users, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Learnership, defaultLearnerships } from '@/lib/data';

export default function LearnershipsDetail() {
  const params = useParams();
  const learnershipsId = params.id as string;
  const [learnership, setLearnership] = useState<Learnership | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedLearnerships = localStorage.getItem('learnershipsData');
    const learnershipsData = savedLearnerships ? JSON.parse(savedLearnerships) : defaultLearnerships;
    const foundLearnership = learnershipsData.find((l: Learnership) => l.id === learnershipsId);
    setLearnership(foundLearnership || null);
    setLoading(false);
  }, [learnershipsId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!learnership) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Learnership Not Found</h1>
          <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
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
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Learnership
          </Link>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{learnership.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">{learnership.company}</p>
            </div>
            <a
              href={learnership.applyUrl || 'https://learnship.jobnewstoday.co.za/learnship/'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold h-fit inline-block text-center"
            >
              Enroll Now
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
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                    <p className="font-bold text-gray-900 dark:text-white">{learnership.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Stipend</p>
                    <p className="font-bold text-gray-900 dark:text-white">{learnership.stipend}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-bold text-gray-900 dark:text-white">{learnership.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Start Date</p>
                    <p className="font-bold text-gray-900 dark:text-white">{learnership.startDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About The Program</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{learnership.description}</p>
            </div>

            {/* Program Structure */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program Structure</h2>
              <ul className="space-y-3">
                {learnership.programStructure.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modules You'll Study</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {learnership.modules.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What You'll Achieve</h2>
              <ul className="space-y-3">
                {learnership.outcomes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <Award className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Requirements</h2>
              <ul className="space-y-3">
                {learnership.requirements.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Benefits & Support</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {learnership.benefits.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Job Placement */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Job Placement</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{learnership.jobPlacement}</p>
              </div>

              {/* Investment */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Investment Required</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{learnership.investmentRequired}</p>
              </div>

              {/* Deadline */}
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Application Deadline</p>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{learnership.deadline}</p>
              </div>

              {/* Enroll Button */}
              <a
                href={learnership.applyUrl || 'https://learnship.jobnewstoday.co.za/learnship/'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition font-bold text-lg inline-block text-center"
              >
                Enroll In This Program
              </a>

              {/* Share */}
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Share Program</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    LinkedIn
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    Twitter
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    Email a Friend
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
