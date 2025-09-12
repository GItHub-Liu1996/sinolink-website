'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string }[];
  category: string;
}

interface Answer {
  questionId: string;
  answer: string;
  value: string;
}

const questions: Question[] = [
  {
    id: 'industry',
    question: '您的公司属于哪个行业？',
    options: [
      { label: '科技/互联网', value: 'technology' },
      { label: '制造业', value: 'manufacturing' },
      { label: '金融服务', value: 'finance' },
      { label: '贸易/零售', value: 'trade' },
      { label: '教育/培训', value: 'education' },
      { label: '其他', value: 'other' }
    ],
    category: '基本信息'
  },
  {
    id: 'companySize',
    question: '您的公司规模如何？',
    options: [
      { label: '1-10人', value: 'small' },
      { label: '11-50人', value: 'medium' },
      { label: '51-200人', value: 'large' },
      { label: '200人以上', value: 'enterprise' }
    ],
    category: '基本信息'
  },
  {
    id: 'entityType',
    question: '您希望在中国设立什么类型的实体？',
    options: [
      { label: '外商独资企业(WFOE)', value: 'wfoe' },
      { label: '中外合资企业(JV)', value: 'joint-venture' },
      { label: '代表处', value: 'representative-office' },
      { label: '分公司', value: 'branch' },
      { label: '不确定', value: 'unsure' }
    ],
    category: '业务需求'
  },
  {
    id: 'timeline',
    question: '您希望多快完成注册？',
    options: [
      { label: '1个月内', value: 'urgent' },
      { label: '3个月内', value: 'fast' },
      { label: '6个月内', value: 'normal' },
      { label: '1年内', value: 'flexible' }
    ],
    category: '业务需求'
  },
  {
    id: 'budget',
    question: '您的预算范围是？',
    options: [
      { label: '5万以下', value: 'low' },
      { label: '5-15万', value: 'medium' },
      { label: '15-30万', value: 'high' },
      { label: '30万以上', value: 'premium' }
    ],
    category: '业务需求'
  },
  {
    id: 'services',
    question: '您最需要哪些服务？',
    options: [
      { label: '公司注册', value: 'registration' },
      { label: '银行开户', value: 'banking' },
      { label: '税务合规', value: 'tax' },
      { label: '人力资源', value: 'hr' },
      { label: '法律支持', value: 'legal' },
      { label: '市场调研', value: 'research' }
    ],
    category: '服务需求'
  }
];

export default function ConsultationQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
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

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
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
      const response = await fetch('/api/consultation-quiz/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers,
          companyName: '咨询问卷用户',
          contactName: '问卷用户',
          email: 'questionnaire@example.com'
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        console.error('提交失败');
      }
    } catch (error) {
      console.error('提交错误:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentAnswer = () => {
    return answers.find(a => a.questionId === currentQuestion.id);
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text-heading mb-2 font-sans">提交成功！</h3>
          <p className="text-gray-600 mb-6 font-body">
            感谢您的参与！我们的专业团队将在24小时内联系您，为您提供个性化的咨询服务。
          </p>
          <button
            onClick={() => {
              setShowSuccess(false);
              setCurrentQuestionIndex(0);
              setAnswers([]);
            }}
            className="w-full px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-magenta text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            重新开始
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题和进度 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-heading mb-4 font-sans">智能咨询问卷</h2>
          <p className="text-gray-600 mb-6 font-body">通过几个简单问题，我们为您提供最合适的服务方案</p>
          
          {/* 进度条 */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <motion.div
              className="bg-gradient-to-r from-accent-cyan to-accent-magenta h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${getProgressPercentage()}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-sm text-gray-500 font-body">
            问题 {currentQuestionIndex + 1} / {questions.length}
          </p>
        </div>

        {/* 问题卡片 */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          {/* 分类标签 */}
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm font-medium font-body">
              {currentQuestion.category}
            </span>
            <span className="text-sm text-gray-500 font-body">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>

          {/* 问题标题 */}
          <h3 className="text-2xl font-semibold text-text-heading mb-8 font-sans">
            {currentQuestion.question}
          </h3>

          {/* 选项 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map((option, index) => {
              const isSelected = getCurrentAnswer()?.value === option.value;
              return (
                <motion.button
                  key={option.value}
                  onClick={() => handleAnswer(option)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left font-body ${
                    isSelected
                      ? 'border-accent-cyan bg-accent-cyan/10 text-accent-cyan'
                      : 'border-gray-200 hover:border-accent-cyan/50 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium font-body">{option.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* 导航按钮 */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 font-body ${
                isFirstQuestion
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-accent-cyan hover:bg-accent-cyan/10'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              上一题
            </button>

            {isLastQuestion ? (
              <button
                onClick={handleSubmit}
                disabled={!getCurrentAnswer() || isSubmitting}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-body ${
                  getCurrentAnswer() && !isSubmitting
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? '提交中...' : '提交问卷'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!getCurrentAnswer()}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-body ${
                  getCurrentAnswer()
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                下一题
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </motion.div>

        {/* 底部信息 */}
        <div className="text-center text-gray-500 text-sm font-body">
          <p>您的信息将被严格保密，仅用于为您提供专业服务</p>
        </div>
      </div>
    </div>
  );
}