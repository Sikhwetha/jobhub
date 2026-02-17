'use client';

import { Search, MapPin, DollarSign, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Job, defaultJobs } from '@/lib/data';

export default function AllJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const searchParams = useSearchParams();

  // Load jobs from localStorage on mount
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobsData');
    if (savedJobs) {
      try {
        setJobs(JSON.parse(savedJobs));
      } catch {
        setJobs(defaultJobs);
      }
    } else {
      setJobs(defaultJobs);
    }
  }, []);

  useEffect(() => {
    try {
      const s = searchParams.get('search') || '';
      const l = searchParams.get('location') || '';
      setSearchTerm(s);
      setLocationFilter(l);
    } catch {
      // ignore
    }
  }, [searchParams]);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = job.location.toLowerCase().includes(locationFilter.toLowerCase()) || locationFilter === '';
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">All Jobs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Browse {jobs.length} available positions</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Filters</h3>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Job Title or Company
                  </label>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="City or Remote"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Results Count */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing <span className="font-bold text-blue-600 dark:text-blue-400">{filteredJobs.length}</span> jobs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Jobs List */}
          <div className="lg:col-span-3 space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Link key={job.id} href={`/jobs/${job.id}`}>
                  <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6 hover:shadow-lg transition cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{job.company}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                          <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                            {job.type}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{job.postedDate}</p>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-sm">
                          View Job
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg">No jobs found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
