import type { PersistOptions } from "zustand/middleware";

export type ThemeState = {
  darkMode: boolean;
  initialized: boolean;
  initialize: () => void;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
}

export type ThemePersist = PersistOptions<ThemeState> & {
  name: string;
};