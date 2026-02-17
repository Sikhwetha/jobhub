'use client';

import { Search, Briefcase, Users, BookOpen, ArrowRight, Star, MapPin, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Job, Internship, Learnership, defaultJobs, defaultInternships, defaultLearnerships } from '@/lib/data';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [internships, setInternships] = useState<Internship[]>([]);
  const [learnerships, setLearnerships] = useState<Learnership[]>([]);

  useEffect(() => {
    // Load from localStorage
    const savedJobs = localStorage.getItem('jobsData');
    const savedInternships = localStorage.getItem('internshipsData');
    const savedLearnerships = localStorage.getItem('learnershipsData');

    setJobs(savedJobs ? JSON.parse(savedJobs) : defaultJobs);
    setInternships(savedInternships ? JSON.parse(savedInternships) : defaultInternships);
    setLearnerships(savedLearnerships ? JSON.parse(savedLearnerships) : defaultLearnerships);
  }, []);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (searchLocation) params.set('location', searchLocation);
    const url = `/jobs${params.toString() ? `?${params.toString()}` : ''}`;
    router.push(url);
  };
  // Structured data for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'JobPortal',
    name: 'JobHub',
    description: 'Premier job portal for jobs, internships, and learnership opportunities',
    url: 'https://jobhub.com',
    image: 'https://jobhub.com/logo.png',
    sameAs: [
      'https://twitter.com/jobhub',
      'https://linkedin.com/company/jobhub',
      'https://facebook.com/jobhub'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-white dark:bg-slate-950">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">JobHub</span>
              </div>
              <div className="hidden md:flex gap-8">
                <Link href="/jobs" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Jobs</Link>
                <Link href="/internships" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Internships</Link>
                <Link href="/learnership" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Learnership</Link>
                <Link href="/admin" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Admin</Link>
              </div>
              <Link href="/cv-submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium inline-block">
                Submit Your Cv
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Find Your Next <span className="text-blue-600">Opportunity</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Discover thousands of jobs, internships, and learnership programs from top companies. Start your career journey with JobHub today.
                </p>
              </div>

              {/* Search Bar */}
              <div className="w-full max-w-2xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSearch(); } }}
                      placeholder="Job title, keywords, or company"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleSearch(); } }}
                      placeholder="City or remote"
                      className="w-full sm:w-40 pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <button onClick={handleSearch} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2">
                    Search <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Learnership Programs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Featured Jobs</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[...jobs].reverse().slice(0, 3).map((job) => (
                <Link key={job.id} href={`/jobs/${job.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                      </div>
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {job.description.substring(0, 80)}...
                    </p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                      View Details
                    </button>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/jobs" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold inline-flex items-center gap-2">
                View All Jobs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Users className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Internship Programs</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[...internships].reverse().slice(0, 3).map((internship) => (
                <Link key={internship.id} href={`/internships/${internship.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition cursor-pointer h-full">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{internship.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{internship.company}</p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{internship.location}</span>
                      </div>
                      <div className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
                        {internship.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 mb-4">
                      {internship.description.substring(0, 80)}...
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const url = internship.applyUrl || 'https://learnship.jobnewstoday.co.za/internship/';
                        window.open(url, '_blank', 'noopener');
                      }}
                      className="w-full border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition font-medium"
                    >
                      Apply Now
                    </button>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/internships" className="border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900 transition font-semibold inline-flex items-center gap-2">
                Explore More Internships <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Learnership Section */}
        <section id="learnership" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <BookOpen className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Learnership Programs</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[...learnerships].reverse().slice(0, 3).map((learnership) => (
                <Link key={learnership.id} href={`/learnership/${learnership.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition cursor-pointer h-full">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{learnership.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{learnership.company}</p>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{learnership.location}</span>
                      </div>
                      <div className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        {learnership.duration}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 mb-4">
                      {learnership.description.substring(0, 80)}...
                    </p>
                    <button className="w-full border-2 border-green-600 text-green-600 dark:text-green-400 py-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900 transition font-medium">
                      Learn More
                    </button>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/learnership" className="border-2 border-green-600 text-green-600 dark:text-green-400 px-8 py-3 rounded-lg hover:bg-green-50 dark:hover:bg-green-900 transition font-semibold inline-flex items-center gap-2">
                View All Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Why Choose JobHub?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Verified Jobs</h3>
                <p className="text-gray-600 dark:text-gray-400">Only legitimate opportunities from verified employers</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 dark:bg-indigo-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Expert Mentorship</h3>
                <p className="text-gray-600 dark:text-gray-400">Get guidance from industry professionals and mentors</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Career Growth</h3>
                <p className="text-gray-600 dark:text-gray-400">Develop skills and advance your career with us</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Success Stories</h3>
                <p className="text-gray-600 dark:text-gray-400">Join thousands of successful professionals</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Start Your Career Journey?</h2>
            <p className="text-xl text-blue-100">Join thousands of professionals finding their next opportunity on JobHub</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-bold">
                Get Started Free
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-bold">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <span className="text-xl font-bold text-white">JobHub</span>
                </div>
                <p className="text-sm">Your premier destination for career opportunities and growth.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#jobs" className="hover:text-blue-400">Jobs</a></li>
                  <li><a href="#internships" className="hover:text-blue-400">Internships</a></li>
                  <li><a href="#learnership" className="hover:text-blue-400">Learnership</a></li>
                  <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400">Career Tips</a></li>
                  <li><a href="#" className="hover:text-blue-400">Resume Builder</a></li>
                  <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Follow Us</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
                  <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
                  <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                <p>&copy; 2026 JobHub. All rights reserved.</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                  <a href="/" className="hover:text-blue-400">Privacy Policy</a>
                  <a href="/" className="hover:text-blue-400">Terms of Service</a>
                  <a href="/" className="hover:text-blue-400">Cookie Policy</a>
                  <a href="/admin" className="hover:text-blue-400 font-bold text-blue-400">Admin</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
