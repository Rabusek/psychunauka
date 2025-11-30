'use client';

import { useUserStore } from '@/stores/userStore';
import { questions } from '@/data/questions';

interface SidebarProps {
  activeMode: 'learn' | 'exam' | 'stats' | 'ranking' | 'materials';
  onModeChange: (mode: 'learn' | 'exam' | 'stats' | 'ranking' | 'materials') => void;
}

export default function Sidebar({ activeMode, onModeChange }: SidebarProps) {
  const { currentUser, logout } = useUserStore();

  if (!currentUser) return null;

  const accuracy = currentUser.stats.totalQuestions > 0
    ? Math.round((currentUser.stats.correctAnswers / currentUser.stats.totalQuestions) * 100)
    : 0;

  return (
    <aside className="w-64 bg-white shadow-lg flex flex-col border-r border-gray-200 h-screen">
      {/* Logo - compact */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">PsychoNauka</h1>
            <p className="text-xs text-gray-500">Psychologia Społeczna</p>
          </div>
        </div>
      </div>

      {/* User Stats - compact */}
      <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-10 h-10 rounded-full border-2 border-white/50 bg-white/20 flex items-center justify-center text-lg font-bold">
            {currentUser.username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold text-sm capitalize">{currentUser.username}</h3>
            <div className="flex items-center gap-1 text-xs opacity-90">
              <span className="text-yellow-300">★</span>
              <span>Poziom {currentUser.stats.level}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white/20 backdrop-blur rounded-lg py-2 px-1">
            <div className="text-lg font-bold">{currentUser.stats.totalQuestions}</div>
            <div className="text-[10px] opacity-90">Pytań</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg py-2 px-1">
            <div className="text-lg font-bold">{accuracy}%</div>
            <div className="text-[10px] opacity-90">Wynik</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg py-2 px-1">
            <div className="text-lg font-bold">🔥{currentUser.stats.currentStreak}</div>
            <div className="text-[10px] opacity-90">Streak</div>
          </div>
        </div>
      </div>

      {/* Navigation - compact */}
      <nav className="flex-1 p-3">
        <div className="space-y-1">
          <button
            onClick={() => onModeChange('materials')}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition text-sm ${
              activeMode === 'materials'
                ? 'bg-indigo-50 text-indigo-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Materiały</span>
          </button>
          <button
            onClick={() => onModeChange('learn')}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition text-sm ${
              activeMode === 'learn'
                ? 'bg-indigo-50 text-indigo-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Quiz</span>
          </button>
          <button
            onClick={() => onModeChange('exam')}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition text-sm ${
              activeMode === 'exam'
                ? 'bg-indigo-50 text-indigo-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>Tryb Egzaminu</span>
          </button>
          <button
            onClick={() => onModeChange('stats')}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition text-sm ${
              activeMode === 'stats'
                ? 'bg-indigo-50 text-indigo-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Statystyki</span>
          </button>
          <button
            onClick={() => onModeChange('ranking')}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg transition text-sm ${
              activeMode === 'ranking'
                ? 'bg-indigo-50 text-indigo-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>Ranking</span>
          </button>
        </div>

        {/* Course Info */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">Kurs</h4>
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-purple-900">Wprowadzenie do psychologii</span>
            </div>
            <div className="text-xs text-purple-700">{questions.length} pytań</div>
            <div className="mt-2 text-[10px] text-gray-600">
              Wojciszke, B., Grzyb, T. (2024)
            </div>
          </div>
        </div>
      </nav>

      {/* Logout - compact */}
      <div className="p-3 border-t border-gray-200">
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Wyloguj się</span>
        </button>
      </div>
    </aside>
  );
}
