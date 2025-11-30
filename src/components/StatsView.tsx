'use client';

import { useUserStore } from '@/stores/userStore';

export default function StatsView() {
  const { currentUser, resetProgress } = useUserStore();

  if (!currentUser) return null;

  const accuracy = currentUser.stats.totalQuestions > 0
    ? Math.round((currentUser.stats.correctAnswers / currentUser.stats.totalQuestions) * 100)
    : 0;

  const xpToNextLevel = ((currentUser.stats.level) * 100) - currentUser.stats.xp;
  const levelProgress = ((currentUser.stats.xp % 100) / 100) * 100;

  const unlockedAchievements = currentUser.achievements.filter(a => a.unlockedAt);
  const lockedAchievements = currentUser.achievements.filter(a => !a.unlockedAt);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Statystyki</h2>
          <p className="text-gray-600 mt-1">Twoje postępy w nauce</p>
        </div>
        <button
          onClick={() => {
            if (confirm('Czy na pewno chcesz zresetować wszystkie postępy?')) {
              resetProgress();
            }
          }}
          className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
        >
          Resetuj postępy
        </button>
      </div>

      {/* Level Progress */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold opacity-90">Poziom {currentUser.stats.level}</h3>
            <p className="text-3xl font-bold">{currentUser.stats.xp} XP</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-75">Do następnego poziomu</p>
            <p className="text-xl font-bold">{xpToNextLevel} XP</p>
          </div>
        </div>
        <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${levelProgress}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500 mb-1">Pytania odpowiedziane</p>
          <p className="text-3xl font-bold text-gray-900">{currentUser.stats.totalQuestions}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-sm text-gray-500 mb-1">Poprawne odpowiedzi</p>
          <p className="text-3xl font-bold text-green-600">{currentUser.stats.correctAnswers}</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500 mb-1">Dokładność</p>
          <p className="text-3xl font-bold text-purple-600">{accuracy}%</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🔥</span>
          </div>
          <p className="text-sm text-gray-500 mb-1">Najlepsza seria</p>
          <p className="text-3xl font-bold text-orange-600">{currentUser.stats.bestStreak}</p>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          Osiągnięcia ({unlockedAchievements.length}/{currentUser.achievements.length})
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {unlockedAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white"
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className="font-semibold">{achievement.name}</h4>
              <p className="text-sm opacity-90">{achievement.description}</p>
            </div>
          ))}
          {lockedAchievements.map((achievement) => (
            <div
              key={achievement.id}
              className="p-4 bg-gray-100 rounded-xl"
            >
              <div className="text-3xl mb-2 opacity-30">{achievement.icon}</div>
              <h4 className="font-semibold text-gray-400">{achievement.name}</h4>
              <p className="text-sm text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Informacje o koncie</h3>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Nazwa użytkownika</span>
            <span className="font-medium capitalize">{currentUser.username}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Data utworzenia</span>
            <span className="font-medium">
              {new Date(currentUser.createdAt).toLocaleDateString('pl-PL')}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Ostatnia aktywność</span>
            <span className="font-medium">
              {currentUser.stats.lastPlayedAt
                ? new Date(currentUser.stats.lastPlayedAt).toLocaleDateString('pl-PL')
                : 'Brak'}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Unikalne pytania</span>
            <span className="font-medium">{currentUser.answeredQuestions.length} / 183</span>
          </div>
        </div>
      </div>
    </div>
  );
}
