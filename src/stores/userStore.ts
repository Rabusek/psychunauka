'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserStats {
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  currentStreak: number;
  bestStreak: number;
  level: number;
  xp: number;
  lastPlayedAt: string | null;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string | null;
}

export interface User {
  username: string;
  createdAt: string;
  stats: UserStats;
  achievements: Achievement[];
  answeredQuestions: number[];
}

interface UserState {
  currentUser: User | null;
  allUsers: User[];
  isLoggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
  updateStats: (isCorrect: boolean, questionId: number) => void;
  resetProgress: () => void;
  getLeaderboard: () => User[];
}

const defaultAchievements: Achievement[] = [
  { id: 'brain-master', name: 'Mistrz Wiedzy', description: 'Odpowiedz poprawnie na 100 pytań', icon: '🧠', unlockedAt: null },
  { id: 'streak-10', name: 'Seria 10', description: 'Zdobądź serię 10 poprawnych odpowiedzi', icon: '🔥', unlockedAt: null },
  { id: 'fast', name: 'Szybki', description: 'Odpowiedz na 10 pytań w mniej niż 30 sekund każde', icon: '⚡', unlockedAt: null },
  { id: 'reader', name: 'Czytelnik', description: 'Przeczytaj 50 wyjaśnień', icon: '📚', unlockedAt: null },
  { id: 'perfect', name: 'Perfekcjonista', description: 'Zdobądź 100% w trybie egzaminu', icon: '🎯', unlockedAt: null },
  { id: 'king', name: 'Król Psychologii', description: 'Osiągnij poziom 10', icon: '👑', unlockedAt: null },
];

const createDefaultUser = (username: string): User => ({
  username,
  createdAt: new Date().toISOString(),
  stats: {
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
    level: 1,
    xp: 0,
    lastPlayedAt: null,
  },
  achievements: [...defaultAchievements],
  answeredQuestions: [],
});

const calculateLevel = (xp: number): number => {
  // Level up every 100 XP
  return Math.floor(xp / 100) + 1;
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      currentUser: null,
      allUsers: [],
      isLoggedIn: false,

      login: (username: string) => {
        const trimmedUsername = username.trim().toLowerCase();
        if (!trimmedUsername) return;

        const { allUsers } = get();
        let user = allUsers.find(u => u.username.toLowerCase() === trimmedUsername);

        if (!user) {
          // Create new user
          user = createDefaultUser(trimmedUsername);
          set(state => ({
            allUsers: [...state.allUsers, user!],
            currentUser: user,
            isLoggedIn: true,
          }));
        } else {
          // Return existing user
          set({
            currentUser: user,
            isLoggedIn: true,
          });
        }
      },

      logout: () => {
        set({
          currentUser: null,
          isLoggedIn: false,
        });
      },

      updateStats: (isCorrect: boolean, questionId: number) => {
        set(state => {
          if (!state.currentUser) return state;

          const xpGained = isCorrect ? 10 : 2;
          const newXp = state.currentUser.stats.xp + xpGained;
          const newLevel = calculateLevel(newXp);
          const newStreak = isCorrect ? state.currentUser.stats.currentStreak + 1 : 0;
          const newBestStreak = Math.max(newStreak, state.currentUser.stats.bestStreak);

          const updatedStats: UserStats = {
            ...state.currentUser.stats,
            totalQuestions: state.currentUser.stats.totalQuestions + 1,
            correctAnswers: state.currentUser.stats.correctAnswers + (isCorrect ? 1 : 0),
            incorrectAnswers: state.currentUser.stats.incorrectAnswers + (isCorrect ? 0 : 1),
            currentStreak: newStreak,
            bestStreak: newBestStreak,
            level: newLevel,
            xp: newXp,
            lastPlayedAt: new Date().toISOString(),
          };

          // Check achievements
          const updatedAchievements = [...state.currentUser.achievements];
          const now = new Date().toISOString();

          // Brain Master - 100 correct answers
          if (updatedStats.correctAnswers >= 100) {
            const idx = updatedAchievements.findIndex(a => a.id === 'brain-master');
            if (idx !== -1 && !updatedAchievements[idx].unlockedAt) {
              updatedAchievements[idx] = { ...updatedAchievements[idx], unlockedAt: now };
            }
          }

          // Streak 10
          if (newStreak >= 10) {
            const idx = updatedAchievements.findIndex(a => a.id === 'streak-10');
            if (idx !== -1 && !updatedAchievements[idx].unlockedAt) {
              updatedAchievements[idx] = { ...updatedAchievements[idx], unlockedAt: now };
            }
          }

          // King - Level 10
          if (newLevel >= 10) {
            const idx = updatedAchievements.findIndex(a => a.id === 'king');
            if (idx !== -1 && !updatedAchievements[idx].unlockedAt) {
              updatedAchievements[idx] = { ...updatedAchievements[idx], unlockedAt: now };
            }
          }

          const updatedUser: User = {
            ...state.currentUser,
            stats: updatedStats,
            achievements: updatedAchievements,
            answeredQuestions: [...new Set([...state.currentUser.answeredQuestions, questionId])],
          };

          // Update in allUsers array
          const updatedAllUsers = state.allUsers.map(u =>
            u.username === updatedUser.username ? updatedUser : u
          );

          return {
            currentUser: updatedUser,
            allUsers: updatedAllUsers,
          };
        });
      },

      resetProgress: () => {
        set(state => {
          if (!state.currentUser) return state;

          const resetUser: User = {
            ...state.currentUser,
            stats: {
              totalQuestions: 0,
              correctAnswers: 0,
              incorrectAnswers: 0,
              currentStreak: 0,
              bestStreak: 0,
              level: 1,
              xp: 0,
              lastPlayedAt: null,
            },
            achievements: [...defaultAchievements],
            answeredQuestions: [],
          };

          const updatedAllUsers = state.allUsers.map(u =>
            u.username === resetUser.username ? resetUser : u
          );

          return {
            currentUser: resetUser,
            allUsers: updatedAllUsers,
          };
        });
      },

      getLeaderboard: () => {
        const { allUsers } = get();
        return [...allUsers].sort((a, b) => b.stats.xp - a.stats.xp);
      },
    }),
    {
      name: 'psychunauka-storage',
    }
  )
);
