'use client';

import { useState, useEffect } from 'react';
import { Trash2, Edit2, Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { defaultJobs, defaultInternships, defaultLearnerships, Job, Internship, Learnership } from '@/lib/data';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'internships' | 'learships'>('jobs');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [internships, setInternships] = useState<Internship[]>([]);
  const [learnerships, setLearnerships] = useState<Learnership[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobsData');
    const savedInternships = localStorage.getItem('internshipsData');
    const savedLearnerships = localStorage.getItem('learnershipsData');

    setJobs(savedJobs ? JSON.parse(savedJobs) : defaultJobs);
    setInternships(savedInternships ? JSON.parse(savedInternships) : defaultInternships);
    setLearnerships(savedLearnerships ? JSON.parse(savedLearnerships) : defaultLearnerships);
  }, []);

  // Save jobs to localStorage
  const saveJobs = (updatedJobs: Job[]) => {
    localStorage.setItem('jobsData', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  // Save internships to localStorage
  const saveInternships = (updatedInternships: Internship[]) => {
    localStorage.setItem('internshipsData', JSON.stringify(updatedInternships));
    setInternships(updatedInternships);
  };

  // Save learnerships to localStorage
  const saveLearnerships = (updatedLearnerships: Learnership[]) => {
    localStorage.setItem('learnershipsData', JSON.stringify(updatedLearnerships));
    setLearnerships(updatedLearnerships);
  };

  // Delete functions
  const deleteJob = (id: string) => {
    if (confirm('Are you sure you want to delete this job?')) {
      saveJobs(jobs.filter(j => j.id !== id));
    }
  };

  const deleteInternship = (id: string) => {
    if (confirm('Are you sure you want to delete this internship?')) {
      saveInternships(internships.filter(i => i.id !== id));
    }
  };

  const deleteLearnership = (id: string) => {
    if (confirm('Are you sure you want to delete this learnership?')) {
      saveLearnerships(learnerships.filter(l => l.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Admin Dashboard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Manage all jobs, internships, and learshipdata</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-slate-800">
          <button
            onClick={() => {
              setActiveTab('jobs');
              setShowForm(false);
              setEditingId(null);
            }}
            className={`px-6 py-3 font-medium border-b-2 transition ${
              activeTab === 'jobs'
                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
            }`}
          >
            Jobs ({jobs.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('internships');
              setShowForm(false);
              setEditingId(null);
            }}
            className={`px-6 py-3 font-medium border-b-2 transition ${
              activeTab === 'internships'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
            }`}
          >
            Internships ({internships.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('learships');
              setShowForm(false);
              setEditingId(null);
            }}
            className={`px-6 py-3 font-medium border-b-2 transition ${
              activeTab === 'learships'
                ? 'border-green-600 text-green-600 dark:text-green-400'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
            }`}
          >
            Learnerships ({learnerships.length})
          </button>
        </div>

        {/* Add Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
              activeTab === 'jobs'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : activeTab === 'internships'
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            <Plus className="w-5 h-5" />
            {showForm ? 'Cancel' : `Add New ${activeTab === 'jobs' ? 'Job' : activeTab === 'internships' ? 'Internship' : 'Learnership'}`}
          </button>
        </div>

        {/* Content Area */}
        <div className="grid gap-4">
          {activeTab === 'jobs' && (
            <>
              {showForm && <JobForm onAdd={(job) => {
                saveJobs([...jobs, { ...job, id: Date.now().toString() }]);
                setShowForm(false);
              }} />}
              {jobs.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">No jobs added yet</p>
                </div>
              ) : (
                jobs.map(job => (
                  <div key={job.id} className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => deleteJob(job.id)}
                          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p><strong>Location:</strong> {job.location}</p>
                      <p><strong>Salary:</strong> {job.salary}</p>
                      <p><strong>Type:</strong> {job.type}</p>
                    </div>
                  </div>
                ))
              )}
            </>
          )}

          {activeTab === 'internships' && (
            <>
              {showForm && <InternshipForm onAdd={(internship) => {
                saveInternships([...internships, { ...internship, id: Date.now().toString() }]);
                setShowForm(false);
              }} />}
              {internships.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">No internships added yet</p>
                </div>
              ) : (
                internships.map(internship => (
                  <div key={internship.id} className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{internship.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{internship.company}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => deleteInternship(internship.id)}
                          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p><strong>Location:</strong> {internship.location}</p>
                      <p><strong>Duration:</strong> {internship.duration}</p>
                      <p><strong>Stipend:</strong> {internship.stipend}</p>
                    </div>
                  </div>
                ))
              )}
            </>
          )}

          {activeTab === 'learships' && (
            <>
              {showForm && <LearnershipsForm onAdd={(learnership) => {
                saveLearnerships([...learnerships, { ...learnership, id: Date.now().toString() }]);
                setShowForm(false);
              }} />}
              {learnerships.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">No learnerships added yet</p>
                </div>
              ) : (
                learnerships.map(learnership => (
                  <div key={learnership.id} className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{learnership.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{learnership.company}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => deleteLearnership(learnership.id)}
                          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p><strong>Location:</strong> {learnership.location}</p>
                      <p><strong>Duration:</strong> {learnership.duration}</p>
                      <p><strong>Stipend:</strong> {learnership.stipend}</p>
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Job Form Component
function JobForm({ onAdd }: { onAdd: (job: Job) => void }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Full-time',
    experience: '',
    description: '',
    applyUrl: '',
    postedDate: 'Today',
    applicants: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      id: Date.now().toString(),
      responsibilities: [],
      requirements: [],
      benefits: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Add New Job</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Title *</label>
          <input required type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company *</label>
          <input required type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location *</label>
          <input required type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Salary *</label>
          <input required type="text" value={formData.salary} onChange={(e) => setFormData({...formData, salary: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Experience *</label>
          <input required type="text" value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Type</label>
          <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Application URL</label>
          <input type="url" value={formData.applyUrl} onChange={(e) => setFormData({...formData, applyUrl: e.target.value})} placeholder="https://" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description *</label>
          <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" rows={3} />
        </div>
      </div>
      <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Add Job</button>
    </form>
  );
}

// Internship Form Component
function InternshipForm({ onAdd }: { onAdd: (internship: Internship) => void }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    duration: '',
    stipend: '',
    startDate: '',
    description: '',
    applyUrl: '',
    deadline: '',
    postedDate: 'Today',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      id: Date.now().toString(),
      overview: [],
      learningOutcomes: [],
      requirements: [],
      perks: [],
      mentors: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Add New Internship</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title *</label>
          <input required type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company *</label>
          <input required type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location *</label>
          <input required type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration *</label>
          <input required type="text" value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Stipend *</label>
          <input required type="text" value={formData.stipend} onChange={(e) => setFormData({...formData, stipend: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date *</label>
          <input required type="text" value={formData.startDate} onChange={(e) => setFormData({...formData, startDate: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Deadline *</label>
          <input required type="text" value={formData.deadline} onChange={(e) => setFormData({...formData, deadline: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Application URL</label>
          <input type="url" value={formData.applyUrl} onChange={(e) => setFormData({...formData, applyUrl: e.target.value})} placeholder="https://" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description *</label>
          <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" rows={3} />
        </div>
      </div>
      <button type="submit" className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium">Add Internship</button>
    </form>
  );
}

// Learnership Form Component
function LearnershipsForm({ onAdd }: { onAdd: (learnership: Learnership) => void }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    duration: '',
    stipend: '',
    startDate: '',
    description: '',
    applyUrl: '',
    deadline: '',
    postedDate: 'Today',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...formData,
      id: Date.now().toString(),
      programStructure: [],
      modules: [],
      outcomes: [],
      requirements: [],
      benefits: [],
      jobPlacement: '',
      investmentRequired: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Add New Learnership</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title *</label>
          <input required type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company *</label>
          <input required type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location *</label>
          <input required type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration *</label>
          <input required type="text" value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Stipend *</label>
          <input required type="text" value={formData.stipend} onChange={(e) => setFormData({...formData, stipend: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Date *</label>
          <input required type="text" value={formData.startDate} onChange={(e) => setFormData({...formData, startDate: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Deadline *</label>
          <input required type="text" value={formData.deadline} onChange={(e) => setFormData({...formData, deadline: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Application URL</label>
          <input type="url" value={formData.applyUrl} onChange={(e) => setFormData({...formData, applyUrl: e.target.value})} placeholder="https://" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description *</label>
          <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white" rows={3} />
        </div>
      </div>
      <button type="submit" className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition font-medium">Add Learnership</button>
    </form>
  );
}
