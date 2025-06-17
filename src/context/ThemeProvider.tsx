import { useEffect } from 'react';
import useThemeStore from './ThemeStore/useThemeStore';
import type { ThemeProviderProps } from './types';

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const darkMode = useThemeStore((state) => state.darkMode);
  const initialize = useThemeStore((state) => state.initialize);

  useEffect(() => {
    // Inicializar el tema una sola vez
    initialize();
  }, [initialize]);

  useEffect(() => {
    // Aplicar clase al elemento html
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return children;
}