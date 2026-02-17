'use client';

import { MapPin, Calendar, Award, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Learnership, defaultLearnerships } from '@/lib/data';
import SidebarFilters from '../components/SidebarFilters';

export default function AllLearnerships() {
  const [learnerships, setLearnerships] = useState<Learnership[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  // Load learnerships from localStorage on mount
  useEffect(() => {
    const savedLearnerships = localStorage.getItem('learnershipsData');
    if (savedLearnerships) {
      try {
        setLearnerships(JSON.parse(savedLearnerships));
      } catch {
        setLearnerships(defaultLearnerships);
      }
    } else {
      setLearnerships(defaultLearnerships);
    }
  }, []);

  const filteredLearnerships = learnerships.filter(learnership => {
    const matchesSearch = learnership.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         learnership.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = learnership.location.toLowerCase().includes(locationFilter.toLowerCase()) || locationFilter === '';
    return matchesSearch && matchesLocation;
  }).reverse();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">All Learnership Programs</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Browse {learnerships.length} available learnership opportunities</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <SidebarFilters
            title="Filters"
            searchLabel="Program or Company"
            locationLabel="Location Type"
            searchValue={searchTerm}
            onSearchChange={setSearchTerm}
            locationValue={locationFilter}
            onLocationChange={setLocationFilter}
            count={filteredLearnerships.length}
            accent="green"
          />

          {/* Learnerships List */}
          <div className="lg:col-span-3 space-y-4">
            {filteredLearnerships.length > 0 ? (
              filteredLearnerships.map((learnership) => (
                <Link key={learnership.id} href={`/learnership/${learnership.id}`}>
                  <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6 hover:shadow-lg transition cursor-pointer">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{learnership.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{learnership.company}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {learnership.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {learnership.duration}
                          </div>
                          <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium">
                            {learnership.stipend}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{learnership.postedDate}</p>
                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg">No learnerships found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
