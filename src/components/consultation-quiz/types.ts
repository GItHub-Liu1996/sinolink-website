export interface Question {
  id: string;
  question: string;
  options?: { label: string; value: string }[];
  category: string;
  type?: 'single' | 'multiple' | 'text' | 'textarea';
  placeholder?: string;
}

export interface Answer {
  questionId: string;
  answer: string;
  value: string;
}

export interface EmbeddedConsultationQuizProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  maxQuestions?: number;
}
