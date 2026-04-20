import { useState } from "react";
import Header from "./components/Header";
import RealtimePage from "./pages/RealtimePage";
import HistoryPage from "./pages/HistoryPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  const [page, setPage] = useState("landing"); // ✅ mulai dari landing

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ✅ Header hanya tampil di dashboard */}
      {page !== "landing" && (
        <Header setPage={setPage} page={page} />
      )}

      {/* ✅ LANDING */}
      {page === "landing" && (
        <LandingPage setPage={setPage} />
      )}

      {/* ✅ DASHBOARD */}
      {page !== "landing" && (
        <div className="p-4">
          {page === "realtime" && <RealtimePage />}
          {page === "history" && <HistoryPage />}
        </div>
      )}

    </div>
  );
}