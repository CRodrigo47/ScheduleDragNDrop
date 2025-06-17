import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemePersist, ThemeState } from './types';

const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      darkMode: false,
      initialized: false,
      
      // Inicializar con preferencia del sistema si no hay preferencia guardada
      initialize: () => {
        const { initialized } = get();
        if (!initialized) {
          const hasStoredPreference = localStorage.getItem('theme-preference');
          if (!hasStoredPreference) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            set({ darkMode: mediaQuery.matches, initialized: true });
          } else {
            set({ initialized: true });
          }
        }
      },
      
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setDarkMode: (value) => set({ darkMode: value }),
    }),
    {
      name: 'theme-preference',
      // Solo persistir darkMode, no initialized
      partialize: (state) => ({ darkMode: state.darkMode })
    } as ThemePersist
  )
);

export default useThemeStore;