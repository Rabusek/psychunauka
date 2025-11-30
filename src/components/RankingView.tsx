'use client';

import { useUserStore } from '@/stores/userStore';

export default function RankingView() {
  const { currentUser, getLeaderboard } = useUserStore();
  const leaderboard = getLeaderboard();

  if (!currentUser) return null;

  const currentUserRank = leaderboard.findIndex(u => u.username === currentUser.username) + 1;

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return { emoji: '🥇', bg: 'from-yellow-50 to-yellow-100', border: 'border-yellow-200' };
      case 2:
        return { emoji: '🥈', bg: 'from-gray-50 to-gray-100', border: 'border-gray-200' };
      case 3:
        return { emoji: '🥉', bg: 'from-orange-50 to-orange-100', border: 'border-orange-200' };
      default:
        return { emoji: null, bg: 'bg-gray-50', border: 'border-transparent' };
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Ranking</h2>
        <p className="text-gray-600 mt-1">Zobacz jak wypadasz na tle innych</p>
      </div>

      {/* Your Position */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
              {currentUser.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm opacity-90">Twoja pozycja</p>
              <p className="text-4xl font-bold">#{currentUserRank}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-90">Twoje XP</p>
            <p className="text-4xl font-bold">{currentUser.stats.xp}</p>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          Top gracze
        </h3>

        {leaderboard.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Brak graczy w rankingu
            </h3>
            <p className="text-gray-500">
              Zacznij odpowiadać na pytania, aby pojawić się w rankingu!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {leaderboard.map((user, index) => {
              const rank = index + 1;
              const badge = getRankBadge(rank);
              const isCurrentUser = user.username === currentUser.username;
              const accuracy = user.stats.totalQuestions > 0
                ? Math.round((user.stats.correctAnswers / user.stats.totalQuestions) * 100)
                : 0;

              return (
                <div
                  key={user.username}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition ${
                    isCurrentUser
                      ? 'bg-indigo-50 border-indigo-200'
                      : `bg-gradient-to-r ${badge.bg} ${badge.border}`
                  }`}
                >
                  {/* Rank */}
                  <div className="w-10 text-center">
                    {badge.emoji ? (
                      <span className="text-2xl">{badge.emoji}</span>
                    ) : (
                      <span className="font-bold text-gray-600">{rank}</span>
                    )}
                  </div>

                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                    isCurrentUser
                      ? 'bg-indigo-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {user.username.charAt(0).toUpperCase()}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 capitalize">
                      {user.username}
                      {isCurrentUser && <span className="text-indigo-600 text-sm ml-2">(Ty)</span>}
                    </div>
                    <div className="text-sm text-gray-600">
                      Poziom {user.stats.level} • {accuracy}% dokładności
                    </div>
                  </div>

                  {/* XP */}
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{user.stats.xp}</div>
                    <div className="text-sm text-gray-500">XP</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Stats comparison */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-md text-center">
          <div className="text-3xl font-bold text-indigo-600">{leaderboard.length}</div>
          <div className="text-sm text-gray-500 mt-1">Aktywnych graczy</div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-md text-center">
          <div className="text-3xl font-bold text-purple-600">
            {leaderboard.length > 0
              ? Math.round(leaderboard.reduce((sum, u) => sum + u.stats.xp, 0) / leaderboard.length)
              : 0}
          </div>
          <div className="text-sm text-gray-500 mt-1">Średnie XP</div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-md text-center">
          <div className="text-3xl font-bold text-pink-600">
            {leaderboard.length > 0
              ? Math.max(...leaderboard.map(u => u.stats.bestStreak))
              : 0}
          </div>
          <div className="text-sm text-gray-500 mt-1">Najlepsza seria</div>
        </div>
      </div>
    </div>
  );
}
