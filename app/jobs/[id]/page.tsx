'use client';

import { useParams } from 'next/navigation';
import { ArrowLeft, MapPin, DollarSign, Briefcase, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Job, defaultJobs } from '@/lib/data';

export default function JobDetail() {
  const params = useParams();
  const jobId = params.id as string;
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedJobs = localStorage.getItem('jobsData');
    const jobsData = savedJobs ? JSON.parse(savedJobs) : defaultJobs;
    const foundJob = jobsData.find((j: Job) => j.id === jobId);
    setJob(foundJob || null);
    setLoading(false);
  }, [jobId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Job Not Found</h1>
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
            <ArrowLeft className="w-4 h-4" /> Back to Jobs
          </Link>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">{job.company}</p>
            </div>
            <a
              href={job.applyUrl || 'https://jobnewstoday.co.za/find-the-latest-jobs-in-south-africa-2026-government-private-sector-vacancies/'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold h-fit inline-block text-center"
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
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Salary</p>
                    <p className="font-bold text-gray-900 dark:text-white">{job.salary}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Job Type</p>
                    <p className="font-bold text-gray-900 dark:text-white">{job.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p className="font-bold text-gray-900 dark:text-white">{job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                    <p className="font-bold text-gray-900 dark:text-white">{job.experience}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About The Role</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {job.benefits.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Job Stats */}
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-900 dark:text-white">{job.applicants} Applicants</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Posted {job.postedDate}</p>
              </div>

              {/* Apply Button */}
              <a
                href={job.applyUrl || 'https://jobnewstoday.co.za/find-the-latest-jobs-in-south-africa-2026-government-private-sector-vacancies/'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition font-bold text-lg inline-block text-center"
              >
                Apply For This Job
              </a>

              {/* Share */}
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Share Job</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    LinkedIn
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    Twitter
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 text-sm">
                    Facebook
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
