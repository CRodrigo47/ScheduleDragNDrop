import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors h-full">
        <Sidebar />
        <div className="w-full">
          <Header />
          <Calendar />
        </div>
      </div>
    </>
  );
}

export default App;
