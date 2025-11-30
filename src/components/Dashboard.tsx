'use client';

import { useState, useMemo } from 'react';
import { useUserStore } from '@/stores/userStore';
import { questions } from '@/data/questions';
import Sidebar from './Sidebar';
import QuizCard from './QuizCard';
import StatsView from './StatsView';
import RankingView from './RankingView';
import LearningView from './LearningView';

interface ExamResult {
  questionId: number;
  answer: string;
  isCorrect: boolean;
}

export default function Dashboard() {
  const { currentUser } = useUserStore();
  const [activeMode, setActiveMode] = useState<'learn' | 'exam' | 'stats' | 'ranking' | 'materials'>('materials');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [examStarted, setExamStarted] = useState(false);
  const [examResults, setExamResults] = useState<ExamResult[]>([]);
  const [examFinished, setExamFinished] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const shuffledQuestions = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 20);
  }, [examStarted]);

  const currentQuestion = activeMode === 'exam'
    ? shuffledQuestions[currentQuestionIndex]
    : questions[currentQuestionIndex];

  const totalQuestions = activeMode === 'exam'
    ? shuffledQuestions.length
    : questions.length;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      if (activeMode === 'exam') {
        setExamFinished(true);
      } else {
        setCurrentQuestionIndex(0);
      }
    }
  };

  const handleExamAnswer = (questionId: number, answer: string, isCorrect: boolean) => {
    setExamResults(prev => [...prev, { questionId, answer, isCorrect }]);
  };

  const startExam = () => {
    setExamStarted(true);
    setExamFinished(false);
    setExamResults([]);
    setCurrentQuestionIndex(0);
  };

  const resetExam = () => {
    setExamStarted(false);
    setExamFinished(false);
    setExamResults([]);
    setCurrentQuestionIndex(0);
  };

  const handleModeChange = (mode: 'learn' | 'exam' | 'stats' | 'ranking' | 'materials') => {
    setActiveMode(mode);
    setCurrentQuestionIndex(0);
    if (mode !== 'exam') {
      resetExam();
    }
  };

  if (!currentUser) return null;

  const examScore = examResults.filter(r => r.isCorrect).length;
  const examPercentage = Math.round((examScore / examResults.length) * 100) || 0;

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Sidebar
        activeMode={activeMode}
        onModeChange={handleModeChange}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header - compact */}
        <header className={`bg-white shadow-sm border-b border-gray-200 py-3 transition-all ${sidebarOpen ? 'px-6' : 'pl-16 pr-6'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {activeMode === 'materials' && 'Materiały'}
                {activeMode === 'learn' && 'Quiz'}
                {activeMode === 'exam' && 'Tryb Egzaminu'}
                {activeMode === 'stats' && 'Statystyki'}
                {activeMode === 'ranking' && 'Ranking'}
              </h2>
              <p className="text-xs text-gray-500">
                {activeMode === 'materials' && 'Przeglądaj streszczenia rozdziałów'}
                {activeMode === 'learn' && `Pytanie ${currentQuestionIndex + 1} z ${totalQuestions}`}
                {activeMode === 'exam' && examStarted && !examFinished && `Pytanie ${currentQuestionIndex + 1} z ${totalQuestions}`}
                {activeMode === 'exam' && !examStarted && 'Rozpocznij egzamin, aby sprawdzić swoją wiedzę'}
                {activeMode === 'stats' && 'Twoje postępy w nauce'}
                {activeMode === 'ranking' && 'Zobacz jak wypadasz na tle innych'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {currentUser.stats.currentStreak > 0 && (
                <div className="flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg text-sm">
                  <span>🔥</span>
                  <span className="font-semibold">{currentUser.stats.currentStreak} streak</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-sm">
                <span>⭐</span>
                <span className="font-semibold">{currentUser.stats.xp} XP</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content - reduced padding */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeMode === 'learn' && currentQuestion && (
            <QuizCard
              key={currentQuestion.id}
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={totalQuestions}
              onNext={handleNextQuestion}
              mode="learn"
            />
          )}

          {activeMode === 'exam' && !examStarted && (
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tryb Egzaminu</h3>
                <p className="text-sm text-gray-600 mb-5">
                  Sprawdź swoją wiedzę! Otrzymasz 20 losowych pytań.
                  Każde pytanie ma limit czasowy 60 sekund.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <div className="text-xl font-bold text-indigo-600">20</div>
                    <div className="text-xs text-gray-600">pytań</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-600">60s</div>
                    <div className="text-xs text-gray-600">na pytanie</div>
                  </div>
                  <div className="p-3 bg-pink-50 rounded-lg">
                    <div className="text-xl font-bold text-pink-600">🏆</div>
                    <div className="text-xs text-gray-600">wynik</div>
                  </div>
                </div>
                <button
                  onClick={startExam}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-md transition-all text-sm"
                >
                  Rozpocznij egzamin
                </button>
              </div>
            </div>
          )}

          {activeMode === 'exam' && examStarted && !examFinished && currentQuestion && (
            <QuizCard
              key={currentQuestion.id}
              question={currentQuestion}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={totalQuestions}
              onNext={handleNextQuestion}
              mode="exam"
              onExamAnswer={handleExamAnswer}
            />
          )}

          {activeMode === 'exam' && examFinished && (
            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-5xl mb-4">
                  {examPercentage >= 80 ? '🎉' : examPercentage >= 50 ? '👍' : '📚'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {examPercentage >= 80 ? 'Świetny wynik!' :
                   examPercentage >= 50 ? 'Dobra robota!' : 'Potrzebujesz więcej nauki'}
                </h3>
                <div className="text-5xl font-bold text-indigo-600 mb-2">
                  {examPercentage}%
                </div>
                <p className="text-sm text-gray-600 mb-5">
                  {examScore} z {examResults.length} poprawnych odpowiedzi
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{examScore}</div>
                    <div className="text-xs text-gray-600">poprawnych</div>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="text-xl font-bold text-red-600">{examResults.length - examScore}</div>
                    <div className="text-xs text-gray-600">błędnych</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={resetExam}
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:shadow-md transition-all text-sm"
                  >
                    Spróbuj ponownie
                  </button>
                  <button
                    onClick={() => handleModeChange('learn')}
                    className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-all text-sm"
                  >
                    Wróć do nauki
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeMode === 'materials' && <LearningView />}
          {activeMode === 'stats' && <StatsView />}
          {activeMode === 'ranking' && <RankingView />}
        </div>
      </main>
    </div>
  );
}
