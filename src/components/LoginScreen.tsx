'use client';

import { useState } from 'react';
import { useUserStore } from '@/stores/userStore';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const login = useUserStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = username.trim();

    if (trimmed.length < 2) {
      setError('Nazwa użytkownika musi mieć minimum 2 znaki');
      return;
    }

    if (trimmed.length > 20) {
      setError('Nazwa użytkownika może mieć maksimum 20 znaków');
      return;
    }

    login(trimmed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PsychoNauka</h1>
              <p className="text-sm text-gray-500">Psychologia Społeczna</p>
            </div>
          </div>

          {/* Welcome text */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Witaj!</h2>
            <p className="text-gray-600 text-sm">
              Podaj swoją nazwę użytkownika, aby rozpocząć naukę.
              <br />
              <span className="text-indigo-600">Możesz wrócić do swoich postępów wpisując tę samą nazwę.</span>
            </p>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Nazwa użytkownika
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError('');
                }}
                placeholder="np. Anna, Jan123, Student..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-gray-800 placeholder-gray-400"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Rozpocznij naukę
            </button>
          </form>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p>
                <strong>Bez hasła!</strong> Twoje postępy są zapisywane lokalnie na tym urządzeniu. Wpisz tę samą nazwę, aby kontynuować naukę.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center text-xs">
            <div className="p-3 bg-indigo-50 rounded-xl">
              <div className="text-2xl mb-1">📚</div>
              <div className="text-gray-600">176 pytań</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-xl">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-gray-600">Tryb nauki</div>
            </div>
            <div className="p-3 bg-pink-50 rounded-xl">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-gray-600">Ranking</div>
            </div>
          </div>
        </div>

        {/* Source info */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Wojciszke, B., Grzyb, T. (2024) - Psychologia Społeczna
        </p>
      </div>
    </div>
  );
}
