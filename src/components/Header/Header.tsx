import ThemeToggle from "./ThemeToogle/ThemeToogle";

export default function Header() {
  return (
    <>
      <div className="min-h-12 relative flex items-center justify-center border">
        <h1>Header</h1>
        <div className="absolute right-4">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
