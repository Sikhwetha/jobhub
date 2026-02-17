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
    title: 'Restaurant Manager',
    company: 'The Hustle Kitchen - Johannesburg',
    location: 'Johannesburg, South Africa',
    salary: 'R18,000 - R24,000 pm',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join The Hustle Kitchen as a Restaurant Manager. Lead our team in a vibrant, fast-paced restaurant environment in the heart of Johannesburg.',
    responsibilities: ['Manage daily restaurant operations', 'Staff recruitment, training and scheduling', 'Maintain food quality and service standards', 'Handle customer complaints and feedback', 'Manage inventory and food costs', 'Ensure health and safety compliance'],
    requirements: ['Grade 12 / Matric certificate', '3+ years restaurant management experience', 'Strong leadership and communication skills', 'Knowledge of food safety regulations', 'Ability to work evenings and weekends'],
    benefits: ['Competitive salary and performance bonus', 'Staff meals provided', 'Health and safety insurance', 'Career development opportunities', 'Staff discounts on food'],
    postedDate: '2 days ago',
    applicants: 45
    ,
    applyUrl: 'https://jobnewstoday.co.za/'
  },
  {
    id: '2',
    title: 'Head Chef',
    company: 'Taste of South Africa - Cape Town',
    location: 'Cape Town, South Africa',
    salary: 'R22,000 - R30,000 pm',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead our culinary team at Taste of South Africa restaurant in the beautiful Cape Town. Create innovative menus featuring traditional and modern South African cuisine.',
    responsibilities: ['Plan and design menus', 'Prepare and cook food', 'Train and supervise kitchen staff', 'Maintain food quality and presentation', 'Order ingredients and manage kitchen supplies', 'Ensure kitchen hygiene standards'],
    requirements: ['NQF Level 4 or higher in Culinary Arts', '5+ years professional cooking experience', 'Knowledge of South African cuisine', 'Strong food safety knowledge', 'Leadership and team management skills'],
    benefits: ['Competitive chef salary', 'Food provision during shifts', 'Staff training and development', 'Health insurance', 'Pension fund contribution'],
    postedDate: '1 week ago',
    applicants: 78
    ,
    applyUrl: 'https://jobnewstoday.co.za/'
  },
  {
    id: '3',
    title: 'Food & Beverage Supervisor',
    company: 'Urban Spice - Pretoria',
    location: 'Pretoria, South Africa',
    salary: 'R12,000 - R16,000 pm',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Supervise dining operations at Urban Spice restaurant. Ensure excellent customer service and food quality.',
    responsibilities: ['Greet and seat customers', 'Oversee table service', 'Handle reservations and walk-ins', 'Ensure table cleanliness and presentation', 'Manage customer complaints', 'Monitor service quality'],
    requirements: ['Grade 12 or equivalent', '2+ years hospitality/restaurant experience', 'Excellent customer service skills', 'Communication in English and local languages', 'Ability to stand for long periods'],
    benefits: ['Salary plus tips and gratuity', 'Staff meals provided', 'Flexible scheduling', 'Health and safety coverage', 'Career growth opportunities'],
    postedDate: '3 days ago',
    applicants: 102
    ,
    applyUrl: 'https://jobnewstoday.co.za/'
  },
  {
    id: '4',
    title: 'Bakery Technician',
    company: 'Golden Loaf Bakery - Durban',
    location: 'Durban, South Africa',
    salary: 'R10,000 - R14,000 pm',
    type: 'Full-time',
    experience: '1+ years',
    description: 'Join Golden Loaf Bakery as a Bakery Technician. Work with traditional baking techniques and modern equipment.',
    responsibilities: ['Prepare dough and batter', 'Operate baking equipment', 'Monitor baking times and temperatures', 'Package baked products', 'Maintain bakery hygiene', 'Package fresh bread and pastries'],
    requirements: ['Grade 10 or higher', '1+ year baking experience', 'Physical ability to lift heavy items', 'Attention to detail', 'Food safety knowledge'],
    benefits: ['Competitive hourly rate', 'Fresh bakery products', 'Training provided', 'Health and safety insurance', 'Shift allowances'],
    postedDate: '5 days ago',
    applicants: 67
    ,
    applyUrl: 'https://jobnewstoday.co.za/'
  }
];

export const defaultInternships: Internship[] = [
  {
    id: '1',
    title: 'Restaurant Management Internship',
    company: 'Spur Steak Ranches - Johannesburg',
    location: 'Johannesburg, South Africa',
    duration: '3 months',
    stipend: 'R2,500/month',
    startDate: 'March 2026',
    description: 'Gain hands-on experience in restaurant operations at one of South Africa\'s leading steakhouse chains.',
    overview: ['Learn restaurant daily operations', 'Assist in staff management and scheduling', 'Support customer service excellence', 'Learn food and beverage inventory management', 'Understand restaurant financial operations'],
    learningOutcomes: ['Restaurant operations management', 'Staff coordination and team leadership', 'Customer service excellence', 'Food safety and hygiene standards', 'Point of Sale (POS) system training'],
    requirements: ['Currently pursuing Hospitality or Business degree', 'Grade 12 minimum', 'Strong communication skills', 'Ability to work weekends and evenings', 'Ability to work 40 hours/week for 3 months'],
    perks: ['Monthly stipend of R2,500', 'Staff meals provided', 'Flexible shift arrangements', 'Mentorship from experienced managers', 'Letter of recommendation upon completion'],
    mentors: 'James Mthembu & Linda Nkosi',
    deadline: '28 Feb, 2026',
    postedDate: '2 days ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/internship/'
  },
  {
    id: '2',
    title: 'Culinary Arts Internship',
    company: 'Nando\'s - Cape Town',
    location: 'Cape Town, South Africa',
    duration: '4 months',
    stipend: 'R3,000/month',
    startDate: 'April 2026',
    description: 'Work in the kitchen at Nando\'s and learn professional cooking and food preparation techniques.',
    overview: ['Learn professional cooking techniques', 'Practice food preparation and plating', 'Understand kitchen organization and efficiency', 'Learn food safety protocols', 'Participate in menu preparation'],
    learningOutcomes: ['Professional cooking skills', 'Food preparation and presentation', 'Kitchen safety and hygiene', 'Team coordination in fast-paced environments', 'Quality control for food products'],
    requirements: ['Currently pursuing Culinary Arts or Hospitality', 'Grade 10 or higher', 'Physical ability to work in kitchen', 'Passion for cooking and food', 'Ability to commit 40 hours/week'],
    perks: ['Monthly stipend of R3,000', 'Staff meals provided daily', 'Training in professional kitchen equipment', 'Mentorship from head chefs', 'Strong chance of employment offer'],
    mentors: 'Chef David Olivier & Chef Amanda Khumalo',
    deadline: '15 Mar, 2026',
    postedDate: '1 week ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/internship/'
  },
  {
    id: '3',
    title: 'Hospitality & Food Service Internship',
    company: 'Mugg & Bean - Pretoria',
    location: 'Pretoria, South Africa',
    duration: '3 months',
    stipend: 'R2,200/month',
    startDate: 'May 2026',
    description: 'Learn food service excellence and customer relations at a leading South African café chain.',
    overview: ['Train in food service and customer care', 'Learn beverage preparation skills', 'Understand food hygiene standards', 'Manage point-of-sale systems', 'Build customer relationship skills'],
    learningOutcomes: ['Food service and customer service excellence', 'Beverage preparation and barista skills', 'Food hygiene and safety', 'Cash handling and POS systems', 'Team communication and collaboration'],
    requirements: ['Currently studying Hospitality or Food Service', 'Fluency in English and local languages', 'Excellent customer service attitude', 'Ability to work flexible shifts', 'Commitment to 40 hours/week'],
    perks: ['Monthly stipend of R2,200', 'Free meals and beverages', 'Barista training provided', 'Staff discount on products', 'Performance-based bonus potential'],
    mentors: 'Thabo Dlamini & Zanele Ngubane',
    deadline: '30 Mar, 2026',
    postedDate: '3 days ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/internship/'
  }
];

export const defaultLearnerships: Learnership[] = [
  {
    id: '1',
    title: 'Culinary Arts & Food Production Learnership',
    company: 'South African Food Institute',
    location: 'Johannesburg, South Africa',
    duration: '12 months',
    stipend: 'R3,500/month',
    startDate: 'January 2026',
    description: 'A comprehensive learnership program in culinary arts combining classroom learning with practical work in leading South African restaurants.',
    programStructure: ['Months 1-3: Kitchen fundamentals and food safety', 'Months 4-7: Advanced cooking techniques and menu planning', 'Months 8-10: Specialization in South African cuisine', 'Months 11-12: Capstone project in restaurant production'],
    modules: ['Food Safety and Hygiene', 'Basic Cooking Techniques', 'Advanced Culinary Skills', 'South African Traditional Cuisine', 'Modern Plating & Presentation', 'Menu Development'],
    outcomes: ['NQF Level 3 in Culinary Arts certification', 'Professional cooking portfolio', 'Experience in commercial kitchens', 'Job placement in restaurants and food production'],
    requirements: ['Grade 10 or equivalent', '18+ years old', 'Passion for cooking and food', 'Physical ability to work in kitchen environments', 'Ability to commit 40 hours/week'],
    benefits: ['Monthly stipend of R3,500', 'Workwear and kitchen safety equipment provided', 'Training in professional kitchens', 'Health and safety insurance', 'NQF-recognized certification'],
    jobPlacement: '88% placement within food industry',
    investmentRequired: 'R0 (Paid learnership - fully funded)',
    deadline: '15 Mar, 2026',
    postedDate: '2 days ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/learnship/'
  },
  {
    id: '2',
    title: 'Restaurant Management & Hospitality Learnership',
    company: 'Hospitality Excellence Academy',
    location: 'Cape Town, South Africa',
    duration: '12 months',
    stipend: 'R3,200/month',
    startDate: 'February 2026',
    description: 'Master restaurant management and hospitality operations through a blend of theoretical knowledge and practical experience.',
    programStructure: ['Months 1-2: Hospitality fundamentals and customer service', 'Months 3-4: Food service and beverage management', 'Months 5-7: Restaurant operations and staff management', 'Months 8-10: Financial management and control'],
    modules: ['Customer Service Excellence', 'Food & Beverage Service', 'Restaurant Operations', 'Staff Management & Leadership', 'Financial Control & Budgeting', 'Food Safety & Sanitation'],
    outcomes: ['NQF Level 4 Restaurant Management certification', 'Practical management experience', 'Leadership development', 'Career advancement in hospitality'],
    requirements: ['Grade 12 or equivalent', 'Minimum 1 year in hospitality/customer service', 'Basic communication skills in English', 'Commitment to 40 hours/week learning and work'],
    benefits: ['Monthly stipend of R3,200', 'Mentorship from restaurant managers', 'Formal certification upon completion', 'Health insurance coverage', 'Career advancement support'],
    jobPlacement: 'Average salary: R16,000-R22,000 | 90% placement rate',
    investmentRequired: 'R0 (Fully government and employer-funded)',
    deadline: '20 Mar, 2026',
    postedDate: '1 week ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/learnship/'
  },
  {
    id: '3',
    title: 'Baking & Pastry Production Learnership',
    company: 'Artisan Bakers Association',
    location: 'Durban, South Africa',
    duration: '12 months',
    stipend: 'R3,000/month',
    startDate: 'March 2026',
    description: 'Learn professional baking and pastry production techniques with hands-on training in commercial bakeries.',
    programStructure: ['Months 1-3: Baking fundamentals and dough production', 'Months 4-6: Bread and pastry making', 'Months 7-9: Advanced pastry decoration and creation', 'Months 10-12: Bakery management and production'],
    modules: ['Baking Chemistry & Technology', 'Bread Production', 'Pastry & Cake Making', 'Decoration & Plating', 'Baking Equipment & Safety', 'Bakery Production Planning'],
    outcomes: ['NQF Level 3 in Baking certification', 'Professional baking skills', 'Pastry decoration expertise', 'Employment-ready qualification'],
    requirements: ['Grade 10 or higher', '18+ years old', 'Physical fitness for standing and lifting', 'Attention to detail and precision', 'Commitment to 40 hours/week'],
    benefits: ['Monthly stipend of R3,000', 'Work uniform and safety shoes provided', 'Training in commercial bakeries', 'Professional baking certification', 'Pension contribution'],
    jobPlacement: 'Job placement in bakeries, hotels, and food production',
    investmentRequired: 'R0 (Fully subsidized learnership)',
    deadline: '25 Mar, 2026',
    postedDate: '3 days ago'
    ,
    applyUrl: 'https://learnship.jobnewstoday.co.za/learnship/'
  }
];
