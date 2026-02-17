'use client';

import { MapPin, Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Internship, defaultInternships } from '@/lib/data';

export default function AllInternships() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Load internships from localStorage on mount
  useEffect(() => {
    const savedInternships = localStorage.getItem('internshipsData');
    if (savedInternships) {
      try {
        setInternships(JSON.parse(savedInternships));
      } catch {
        setInternships(defaultInternships);
      }
    } else {
      setInternships(defaultInternships);
    }
  }, []);

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = internship.location.toLowerCase().includes(locationFilter.toLowerCase()) || locationFilter === '';
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">All Internships</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Browse {internships.length} available internship opportunities</p>
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
                    Title or Company
                  </label>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>

                {/* Results Count */}
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing <span className="font-bold text-indigo-600 dark:text-indigo-400">{filteredInternships.length}</span> internships
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Internships List */}
          <div className="lg:col-span-3 space-y-4">
            {filteredInternships.length > 0 ? (
              filteredInternships.map((internship) => (
                <Link key={internship.id} href={`/internships/${internship.id}`}>
                  <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6 hover:shadow-lg transition cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{internship.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{internship.company}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {internship.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {internship.duration}
                          </div>
                          <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-xs font-medium">
                            {internship.stipend}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{internship.postedDate}</p>
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg">No internships found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
