import { Question } from './types';

export const consultationQuestions: Question[] = [
  {
    id: 'industry',
    question: 'What industry does your company belong to?',
    category: 'Basic Information',
    type: 'single',
    options: [
      { label: 'Technology/Internet', value: 'technology' },
      { label: 'Manufacturing', value: 'manufacturing' },
      { label: 'Financial Services', value: 'financial' },
      { label: 'Trade/Retail', value: 'trade' },
      { label: 'Education/Training', value: 'education' },
      { label: 'Other', value: 'other' }
    ]
  },
  {
    id: 'company_size',
    question: 'What is your company size?',
    category: 'Basic Information',
    type: 'single',
    options: [
      { label: '1-10 employees', value: 'small' },
      { label: '11-50 employees', value: 'medium' },
      { label: '51-200 employees', value: 'large' },
      { label: '200+ employees', value: 'enterprise' }
    ]
  },
  {
    id: 'investment_amount',
    question: 'What is your planned investment amount in China?',
    category: 'Investment Planning',
    type: 'single',
    options: [
      { label: 'Under $100K', value: 'under_100k' },
      { label: '$100K - $500K', value: '100k_500k' },
      { label: '$500K - $1M', value: '500k_1m' },
      { label: 'Over $1M', value: 'over_1m' }
    ]
  },
  {
    id: 'business_stage',
    question: 'What stage is your business in?',
    category: 'Business Development',
    type: 'single',
    options: [
      { label: 'Planning to enter China', value: 'planning' },
      { label: 'Just started in China', value: 'startup' },
      { label: 'Expanding operations', value: 'expanding' },
      { label: 'Established operations', value: 'established' }
    ]
  },
  {
    id: 'main_challenges',
    question: 'What are your main challenges in China?',
    category: 'Challenges',
    type: 'multiple',
    options: [
      { label: 'Legal compliance', value: 'legal' },
      { label: 'Tax regulations', value: 'tax' },
      { label: 'HR and visa issues', value: 'hr' },
      { label: 'Market understanding', value: 'market' },
      { label: 'Banking and finance', value: 'banking' },
      { label: 'Intellectual property', value: 'ip' }
    ]
  },
  {
    id: 'timeline',
    question: 'When do you plan to start operations in China?',
    category: 'Timeline',
    type: 'single',
    options: [
      { label: 'Within 3 months', value: '3_months' },
      { label: '3-6 months', value: '6_months' },
      { label: '6-12 months', value: '12_months' },
      { label: 'Over 1 year', value: 'over_year' }
    ]
  },
  // Contact information questions
  {
    id: 'company_name',
    question: 'What is your company name?',
    category: 'Contact Information',
    type: 'text',
    placeholder: 'Enter your company name'
  },
  {
    id: 'contact_name',
    question: 'What is your name?',
    category: 'Contact Information',
    type: 'text',
    placeholder: 'Enter your full name'
  },
  {
    id: 'email',
    question: 'What is your email address?',
    category: 'Contact Information',
    type: 'text',
    placeholder: 'Enter your email address'
  },
  {
    id: 'phone',
    question: 'What is your phone number?',
    category: 'Contact Information',
    type: 'text',
    placeholder: 'Enter your phone number'
  },
  {
    id: 'message',
    question: 'Any additional message or questions?',
    category: 'Additional Information',
    type: 'textarea',
    placeholder: 'Tell us more about your needs...'
  }
];
