import useThemeStore from "../../../context/ThemeStore/useThemeStore";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:cursor-pointer"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
        {darkMode ? '☀️' : '🌙'}
    </button>
  );
}
