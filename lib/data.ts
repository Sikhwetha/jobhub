// Centralized data store for jobs, internships, and learships

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  applicants: number;
  applyUrl?: string;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  startDate: string;
  description: string;
  overview: string[];
  learningOutcomes: string[];
  requirements: string[];
  perks: string[];
  mentors: string;
  deadline: string;
  postedDate: string;
  applyUrl?: string;
}

export interface Learnership {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  startDate: string;
  description: string;
  programStructure: string[];
  modules: string[];
  outcomes: string[];
  requirements: string[];
  benefits: string[];
  jobPlacement: string;
  investmentRequired: string;
  deadline: string;
  postedDate: string;
  applyUrl?: string;
}

// Default data
export const defaultJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Developer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    salary: '$120K - $160K',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Looking for a talented Senior Developer to join our growing team and make an impact on our products.',
    responsibilities: ['Design and develop scalable backend systems', 'Lead technical discussions and code reviews', 'Mentor junior developers', 'Contribute to system architecture decisions', 'Optimize application performance'],
    requirements: ["Bachelor's degree in Computer Science", '5+ years of software development experience', 'Strong knowledge of JavaScript/TypeScript', 'Experience with React or Vue.js', 'Experience with Node.js and databases'],
    benefits: ['Competitive salary and equity', 'Health insurance', '401(k) matching', 'Flexible work hours', 'Remote work options'],
    postedDate: '2 days ago',
    applicants: 145
    ,
    applyUrl: 'https://jobnewstoday.co.za/find-the-latest-jobs-in-south-africa-2026-government-private-sector-vacancies/'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'New York, NY',
    salary: '$130K - $170K',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Join our Product team to shape the future of our platform.',
    responsibilities: ['Define product strategy and roadmap', 'Conduct user research and analyze metrics', 'Work with engineering to prioritize features', 'Present to stakeholders and investors', 'Drive product launches'],
    requirements: ["Bachelor's degree", '4+ years of product management experience', 'Strong analytical skills', 'Experience with data analysis', 'Excellent communication skills'],
    benefits: ['Competitive compensation', 'Health, dental, vision insurance', 'Stock options', 'Unlimited PTO', 'Learning budget'],
    postedDate: '1 week ago',
    applicants: 89
    ,
    applyUrl: 'https://jobnewstoday.co.za/'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Design Studio Co.',
    location: 'Los Angeles, CA',
    salary: '$90K - $130K',
    type: 'Full-time',
    experience: '3+ years',
    description: 'We are seeking a talented UX/UI Designer to create beautiful and intuitive user experiences.',
    responsibilities: ['Design user interfaces and experiences', 'Create wireframes and prototypes', 'Conduct user testing and interviews', 'Collaborate with product and engineering teams', 'Maintain design systems'],
    requirements: ["Bachelor's degree in Design or related field", '3+ years of UX/UI design experience', 'Proficiency in Figma/Adobe XD', 'Strong portfolio', 'Understanding of user research'],
    benefits: ['Creative work environment', 'Competitive salary', 'Health insurance', 'Remote work flexibility', 'Design tools budget'],
    postedDate: '3 days ago',
    applicants: 234
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/jobs/'
  }
];

export const defaultInternships: Internship[] = [
  {
    id: '1',
    title: 'Marketing Internship',
    company: 'Global Marketing Solutions',
    location: 'New York, NY',
    duration: '3 months',
    stipend: '$1,500/month',
    startDate: 'March 2026',
    description: 'Join our marketing team and gain hands-on experience in digital marketing, brand strategy, and campaign management.',
    overview: ['Learn digital marketing strategies and tools', 'Assist in social media content creation', 'Support campaign planning and execution', 'Conduct market research', 'Develop marketing presentations'],
    learningOutcomes: ['Digital marketing fundamentals', 'Social media marketing', 'Content strategy and creation', 'Analytics and data interpretation', 'Team collaboration skills'],
    requirements: ["Currently pursuing a Bachelor's degree", 'Strong communication skills', 'Basic knowledge of digital marketing', 'Ability to work 40 hours/week for 3 months'],
    perks: ['Monthly stipend of $1,500', 'Flexible work arrangements', 'Mentorship from marketing professionals', 'Free access to marketing tools', 'Certificate of completion'],
    mentors: 'Sarah Johnson & Mike Chen',
    deadline: '28 Feb, 2026',
    postedDate: '2 days ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/internship/'
  },
  {
    id: '2',
    title: 'Software Engineering Internship',
    company: 'TechStart Labs',
    location: 'San Francisco, CA',
    duration: '4 months',
    stipend: '$2,000/month',
    startDate: 'April 2026',
    description: 'Work alongside our engineering team to build features for our platform.',
    overview: ['Develop features using JavaScript/TypeScript', 'Write unit and integration tests', 'Participate in code reviews', 'Debug and fix bugs', 'Collaborate with the team on architecture'],
    learningOutcomes: ['Full-stack web development', 'Modern JavaScript/TypeScript', 'React/Vue.js frameworks', 'Backend API development', 'Database design'],
    requirements: ["Currently pursuing a degree in Computer Science", '1+ year of programming experience', 'Familiarity with JavaScript and web development', 'Ability to commit 40 hours/week'],
    perks: ['Monthly stipend of $2,000', 'Free lunch and snacks', 'Mentorship from senior engineers', 'Learning budget for courses', 'Strong chance of return offer'],
    mentors: 'Alex Martinez & Emma Wilson',
    deadline: '15 Mar, 2026',
    postedDate: '1 week ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/internship/'
  },
  {
    id: '3',
    title: 'Data Science Internship',
    company: 'Analytics Pro',
    location: 'Boston, MA',
    duration: '3 months',
    stipend: '$1,800/month',
    startDate: 'May 2026',
    description: 'Analyze large datasets and build predictive models.',
    overview: ['Exploratory data analysis', 'Build predictive models', 'Data visualization', 'SQL querying and optimization', 'Present findings to business teams'],
    learningOutcomes: ['Python programming', 'Statistical analysis', 'Machine learning fundamentals', 'SQL and databases', 'Data visualization tools'],
    requirements: ["Currently pursuing a degree in Data Science", 'Proficiency in Python', 'Understanding of statistics', 'Ability to work 40 hours/week'],
    perks: ['Monthly stipend of $1,800', 'Access to premium tools and platforms', 'Mentorship from data scientists', 'Conference attendance', 'Career development support'],
    mentors: 'David Park & Lisa Chen',
    deadline: '30 Mar, 2026',
    postedDate: '3 days ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/internship/'
  }
];

export const defaultLearnerships: Learnership[] = [
  {
    id: '1',
    title: 'Software Development Learnership',
    company: 'Tech Academy International',
    location: 'Online & Onsite',
    duration: '12 months',
    stipend: '$500/month',
    startDate: 'January 2026',
    description: 'A comprehensive learnership program combining theoretical knowledge with practical work experience.',
    programStructure: ['Month 1-3: Foundation modules', 'Month 4-7: Advanced development', 'Month 8-10: Specialization', 'Month 11-12: Capstone project'],
    modules: ['Frontend Development', 'Backend Development', 'Full-stack Development Capstone', 'Career Development & Interview Prep'],
    outcomes: ['Industry-recognized certification', 'Real-world project experience', 'Professional portfolio', 'Job placement assistance'],
    requirements: ['Minimum Senior School or equivalent', '18+ years old', 'Strong motivation to learn', 'Ability to commit 40 hours/week'],
    benefits: ['Monthly stipend of $500', 'Study materials provided', 'Laptop provided', 'Health and safety insurance', 'Professional certification'],
    jobPlacement: '95% of learners placed within 3 months',
    investmentRequired: '$0 (Paid learnership)',
    deadline: '15 Mar, 2026',
    postedDate: '2 days ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/learnship/'
  },
  {
    id: '2',
    title: 'Data Science Learnership',
    company: 'Analytics Academy',
    location: 'Hybrid',
    duration: '12 months',
    stipend: '$600/month',
    startDate: 'February 2026',
    description: 'Master data science through hands-on learning.',
    programStructure: ['Month 1-2: Python and fundamentals', 'Month 3-4: Statistics and probability', 'Month 5-7: Machine learning', 'Month 8-10: Advanced analytics'],
    modules: ['Python Programming', 'Statistical Analysis', 'Data Visualization', 'Machine Learning Fundamentals', 'SQL & Database Management'],
    outcomes: ['Python and SQL proficiency', 'Machine learning expertise', 'Portfolio with real projects', 'Industry certification'],
    requirements: ["Bachelor's degree in any field", 'Basic mathematics knowledge', 'Logical thinking ability', 'Commitment to 40 hours/week'],
    benefits: ['Monthly stipend of $600', 'Professional laptop provided', 'All course materials included', 'Industry-recognized certificate'],
    jobPlacement: 'Average salary: $55K-$70K | 92% placement',
    investmentRequired: '$0 (Fully paid)',
    deadline: '20 Mar, 2026',
    postedDate: '1 week ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/learnship/'
  },
  {
    id: '3',
    title: 'Business Management Learnership',
    company: 'Business Leaders Institute',
    location: 'Blended',
    duration: '12 months',
    stipend: '$550/month',
    startDate: 'March 2026',
    description: 'Develop business and management skills while working.',
    programStructure: ['Quarter 1: Business fundamentals', 'Quarter 2: Leadership training', 'Quarter 3: Strategic thinking', 'Quarter 4: Capstone'],
    modules: ['Business Fundamentals', 'Leadership & Management', 'Financial Management', 'Marketing & Sales', 'Strategic Planning'],
    outcomes: ['Management certification', 'Leadership experience', 'Business acumen', 'Professional network'],
    requirements: ['Matric or equivalent', 'Minimum 1 year work experience', 'Passion for business', '40 hours/week commitment'],
    benefits: ['Monthly stipend of $550', 'Business mentorship', 'Executive coaching sessions', 'Professional certification'],
    jobPlacement: 'Average promotion within 6 months',
    investmentRequired: '$0 (Company-sponsored)',
    deadline: '25 Mar, 2026',
    postedDate: '3 days ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/learnship/'
  }
];
