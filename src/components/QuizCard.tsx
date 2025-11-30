'use client';

import { useState, useEffect } from 'react';
import { Question } from '@/data/questions';
import { useUserStore } from '@/stores/userStore';

interface QuizCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onNext: () => void;
  mode: 'learn' | 'exam';
  onExamAnswer?: (questionId: number, answer: string, isCorrect: boolean) => void;
}

export default function QuizCard({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  mode,
  onExamAnswer
}: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const updateStats = useUserStore((state) => state.updateStats);

  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = Math.round((questionNumber / totalQuestions) * 100);

  useEffect(() => {
    if (mode !== 'exam' || showResult) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mode, showResult]);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(60);
  }, [question.id]);

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer && mode === 'learn') return;
    const finalAnswer = selectedAnswer || 'none';
    const correct = finalAnswer === question.correctAnswer;
    if (mode === 'learn') {
      updateStats(correct, question.id);
    } else if (onExamAnswer) {
      onExamAnswer(question.id, finalAnswer, correct);
    }
    setShowResult(true);
  };

  const getAnswerStyle = (answer: string) => {
    if (!showResult) {
      if (selectedAnswer === answer) return 'border-indigo-400 bg-indigo-50';
      return 'border-gray-200 hover:border-indigo-400 hover:bg-indigo-50';
    }
    if (answer === question.correctAnswer) return 'border-green-500 bg-green-50';
    if (selectedAnswer === answer && answer !== question.correctAnswer) return 'border-red-500 bg-red-50';
    return 'border-gray-200 opacity-50';
  };

  const getLetterStyle = (answer: string) => {
    if (!showResult) {
      if (selectedAnswer === answer) return 'bg-indigo-500 text-white';
      return 'bg-gray-100 group-hover:bg-indigo-500 group-hover:text-white';
    }
    if (answer === question.correctAnswer) return 'bg-green-500 text-white';
    if (selectedAnswer === answer && answer !== question.correctAnswer) return 'bg-red-500 text-white';
    return 'bg-gray-100';
  };

  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700',
  };

  const difficultyLabels = { easy: 'Łatwy', medium: 'Średni', hard: 'Trudny' };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar - compact */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-600">Postęp sesji</span>
          <span className="text-xs font-medium text-indigo-600">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question card - compact */}
      <div className="bg-white rounded-xl shadow-lg p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
              {question.category}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[question.difficulty]}`}>
              {difficultyLabels[question.difficulty]}
            </span>
          </div>
          {mode === 'exam' && !showResult && (
            <div className={`flex items-center gap-1 px-2 py-1 rounded-lg font-bold text-sm ${
              timeLeft <= 10 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-red-50 text-red-600'
            }`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{String(Math.floor(timeLeft / 60)).padStart(2, '0')}:{String(timeLeft % 60).padStart(2, '0')}</span>
            </div>
          )}
        </div>

        {/* Question */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
          {question.question}
        </h3>

        {/* Answers - compact */}
        <div className="space-y-2">
          {(['a', 'b', 'c', 'd'] as const).map((letter) => (
            <button
              key={letter}
              onClick={() => handleAnswerSelect(letter)}
              disabled={showResult}
              className={`w-full text-left p-3 rounded-lg border-2 transition-all group ${getAnswerStyle(letter)}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm transition ${getLetterStyle(letter)}`}>
                  {letter.toUpperCase()}
                </div>
                <span className="text-sm text-gray-800">{question.options[letter]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Explanation - compact */}
        {showResult && mode === 'learn' && (
          <div className={`mt-4 p-4 rounded-lg border ${
            isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-start gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                isCorrect ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {isCorrect ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-bold mb-1 ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                  {isCorrect ? 'Poprawna odpowiedź!' : `Poprawna: ${question.correctAnswer.toUpperCase()}`}
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed mb-2">
                  {question.explanation}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>{question.source}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action button - compact */}
        <div className="mt-4 mb-safe">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer && mode === 'learn'}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Zatwierdź odpowiedź
            </button>
          ) : (
            <button
              onClick={onNext}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-md transition-all text-sm"
            >
              {questionNumber < totalQuestions ? 'Następne pytanie' : 'Zakończ'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
