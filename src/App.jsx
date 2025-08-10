import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
