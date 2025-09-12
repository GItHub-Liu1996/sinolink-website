'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options?: { label: string; value: string }[];
  category: string;
  type?: 'single' | 'multiple' | 'text' | 'textarea';
  placeholder?: string;
}

interface Answer {
  questionId: string;
  answer: string;
  value: string;
}

const questions: Question[] = [
  {
    id: 'industry',
    question: 'What industry does your company belong to?',
    options: [
      { label: 'Technology/Internet', value: 'technology' },
      { label: 'Manufacturing', value: 'manufacturing' },
      { label: 'Financial Services', value: 'finance' },
      { label: 'Trade/Retail', value: 'trade' },
      { label: 'Education/Training', value: 'education' },
      { label: 'Other', value: 'other' }
    ],
    category: 'Basic Information'
  },
  {
    id: 'companySize',
    question: 'What is your company size?',
    options: [
      { label: '1-10 employees', value: 'small' },
      { label: '11-50 employees', value: 'medium' },
      { label: '51-200 employees', value: 'large' },
      { label: '200+ employees', value: 'enterprise' }
    ],
    category: 'Basic Information'
  },
  {
    id: 'entityType',
    question: 'What type of entity do you want to establish in China?',
    options: [
      { label: 'Wholly Foreign-Owned Enterprise (WFOE)', value: 'wfoe' },
      { label: 'Joint Venture (JV)', value: 'joint-venture' },
      { label: 'Representative Office', value: 'representative-office' },
      { label: 'Branch Office', value: 'branch' },
      { label: 'Not Sure', value: 'unsure' }
    ],
    category: 'Business Needs'
  },
  {
    id: 'timeline',
    question: 'How quickly do you want to complete the registration?',
    options: [
      { label: 'Within 1 month', value: 'urgent' },
      { label: 'Within 3 months', value: 'fast' },
      { label: 'Within 6 months', value: 'normal' },
      { label: 'Within 1 year', value: 'flexible' }
    ],
    category: 'Business Needs'
  },
  {
    id: 'budget',
    question: 'What is your budget range?',
    options: [
      { label: 'Under ¥50,000 RMB', value: 'low' },
      { label: '¥50,000 - ¥150,000 RMB', value: 'medium' },
      { label: '¥150,000 - ¥300,000 RMB', value: 'high' },
      { label: 'Above ¥300,000 RMB', value: 'premium' }
    ],
    category: 'Business Needs'
  },
  {
    id: 'services',
    question: 'What services do you need most?',
    options: [
      { label: 'Company Registration', value: 'registration' },
      { label: 'Bank Account Opening', value: 'banking' },
      { label: 'Tax Compliance', value: 'tax' },
      { label: 'Human Resources', value: 'hr' },
      { label: 'Legal Support', value: 'legal' },
      { label: 'Market Research', value: 'research' }
    ],
    category: 'Service Needs'
  },
  {
    id: 'companyName',
    question: 'Company Name',
    type: 'text',
    placeholder: 'Enter your company name'
  },
  {
    id: 'contactName',
    question: 'Contact Name',
    type: 'text',
    placeholder: 'Enter your name'
  },
  {
    id: 'email',
    question: 'Email Address',
    type: 'text',
    placeholder: 'Enter your email'
  },
  {
    id: 'phone',
    question: 'Phone Number',
    type: 'text',
    placeholder: 'Enter your phone number'
  },
  {
    id: 'message',
    question: 'Additional Message',
    type: 'textarea',
    placeholder: 'Tell us more about your specific needs or questions...'
  }
];

interface EmbeddedConsultationQuizProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  maxQuestions?: number;
}

export default function EmbeddedConsultationQuiz({ 
  title = "To Better Understand Your Needs",
  subtitle = "Answer a few questions to get personalized business consultation and recommendations",
  showTitle = true,
  maxQuestions = 11
}: EmbeddedConsultationQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: ''
  });

  const displayQuestions = questions.slice(0, maxQuestions);
  const currentQuestion = displayQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === displayQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const handleAnswer = (option: { label: string; value: string }) => {
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      answer: option.label,
      value: option.value
    };

    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
      return [...filtered, newAnswer];
    });
  };

  const handleTextInput = (value: string) => {
    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      answer: value,
      value: value
    };

    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
      return [...filtered, newAnswer];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < displayQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowContactForm(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Extract contact information from answers
      const companyNameAnswer = answers.find(a => a.questionId === 'companyName');
      const contactNameAnswer = answers.find(a => a.questionId === 'contactName');
      const emailAnswer = answers.find(a => a.questionId === 'email');
      const phoneAnswer = answers.find(a => a.questionId === 'phone');
      const messageAnswer = answers.find(a => a.questionId === 'message');

      const response = await fetch('/api/consultation-quiz/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers,
          companyName: companyNameAnswer?.value || '',
          contactName: contactNameAnswer?.value || '',
          email: emailAnswer?.value || '',
          phone: phoneAnswer?.value || '',
          message: messageAnswer?.value || ''
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentQuestion.id);
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / displayQuestions.length) * 100;
  };

  if (showSuccess) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-text-heading mb-2 font-sans">Submission Successful!</h3>
        <p className="text-gray-600 mb-6 font-body">
          Thank you for your participation! Our professional team will contact you within 24 hours to provide personalized consultation services.
        </p>
        <button
          onClick={() => {
            setShowSuccess(false);
            setCurrentQuestionIndex(0);
            setAnswers([]);
            setShowContactForm(false);
            setContactInfo({ companyName: '', contactName: '', email: '', phone: '' });
          }}
          className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-magenta text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          Start Over
        </button>
      </div>
    );
  }

  if (showContactForm) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="text-center mb-8">
          <MessageCircle className="w-12 h-12 text-accent-cyan mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text-heading mb-2 font-sans">Get Professional Consultation</h3>
          <p className="text-gray-600 font-body">Please provide your contact information, and we will arrange a professional consultant for you</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Company Name *</label>
              <input
                type="text"
                required
                value={contactInfo.companyName}
                onChange={(e) => setContactInfo(prev => ({ ...prev, companyName: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent font-body"
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Contact Name *</label>
              <input
                type="text"
                required
                value={contactInfo.contactName}
                onChange={(e) => setContactInfo(prev => ({ ...prev, contactName: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent font-body"
                placeholder="Enter contact name"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Email Address *</label>
              <input
                type="email"
                required
                value={contactInfo.email}
                onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent font-body"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 font-body">Phone Number</label>
              <input
                type="tel"
                value={contactInfo.phone}
                onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cyan focus:border-transparent font-body"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={() => setShowContactForm(false)}
              className="flex items-center px-4 py-2 text-gray-600 hover:text-accent-cyan hover:bg-accent-cyan/10 rounded-lg transition-all duration-300 font-body"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Quiz
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-body ${
                isSubmitting
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-8 border border-gray-200/30">
        {/* Title and Progress - Compact Version */}
        {showTitle && (
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-text-heading mb-2 font-sans">{title}</h2>
            <p className="text-gray-600 mb-4 font-body text-sm">{subtitle}</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200/50 rounded-full h-1.5 mb-2">
              <motion.div
                className="bg-gradient-to-r from-accent-cyan to-accent-magenta h-1.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${getProgressPercentage()}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-xs text-gray-500 font-body">
              Question {currentQuestionIndex + 1} / {displayQuestions.length}
            </p>
          </div>
        )}

        {/* Question Card - Long Strip Layout with Carousel Buttons */}
        <div className="relative">
          {/* Left Carousel Button */}
          <button
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isFirstQuestion
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white/90 backdrop-blur-sm text-accent-cyan hover:bg-accent-cyan hover:text-white shadow-lg hover:shadow-xl'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Carousel Button */}
          <button
            onClick={handleNext}
            disabled={isLastQuestion}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isLastQuestion
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white hover:shadow-lg hover:scale-105'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="px-12"
            >
              <div className="flex items-center gap-8">
                {/* Left Side: Question Information */}
                <div className="flex-1 min-w-0">
                  {/* Category Tag and Progress */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm font-medium font-body">
                      {currentQuestion.category}
                    </span>
                    <span className="text-sm text-gray-500 font-body">
                      {currentQuestionIndex + 1} / {displayQuestions.length}
                    </span>
                  </div>

                  {/* Question Title */}
                  <h3 className="text-xl font-semibold text-text-heading mb-6 font-sans">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Right Side: Options or Input Fields */}
                <div className="flex-1 min-w-0">
                  {currentQuestion.type === 'text' || currentQuestion.type === 'textarea' ? (
                    <div className="w-full">
                      {currentQuestion.type === 'textarea' ? (
                        <textarea
                          value={getCurrentAnswer()?.value || ''}
                          onChange={(e) => handleTextInput(e.target.value)}
                          placeholder={currentQuestion.placeholder}
                          className="w-full p-4 rounded-lg border border-gray-200 focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 font-body text-sm resize-none"
                          rows={4}
                        />
                      ) : (
                        <input
                          type="text"
                          value={getCurrentAnswer()?.value || ''}
                          onChange={(e) => handleTextInput(e.target.value)}
                          placeholder={currentQuestion.placeholder}
                          className="w-full p-4 rounded-lg border border-gray-200 focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 font-body text-sm"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {currentQuestion.options?.map((option, index) => {
                        const isSelected = getCurrentAnswer()?.value === option.value;
                        return (
                          <motion.button
                            key={option.value}
                            onClick={() => handleAnswer(option)}
                            className={`p-3 rounded-lg border transition-all duration-300 text-left font-body ${
                              isSelected
                                ? 'border-accent-cyan bg-accent-cyan/10 text-accent-cyan'
                                : 'border-gray-200 hover:border-accent-cyan/50 hover:bg-gray-50'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="font-medium font-body text-sm">{option.label}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {displayQuestions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentQuestionIndex
                  ? 'bg-accent-cyan'
                  : index < currentQuestionIndex
                  ? 'bg-accent-cyan/50'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Bottom Information - Compact Version */}
        <div className="text-center text-gray-500 text-xs font-body mt-4">
          <p>Your information will be kept strictly confidential</p>
        </div>
      </div>
    </div>
  );
}
