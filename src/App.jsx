import { useState } from "react";
import Header from "./components/Header";
import RealtimePage from "./pages/RealtimePage";
import HistoryPage from "./pages/HistoryPage";

export default function App() {
  const [page, setPage] = useState("realtime");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header setPage={setPage} page={page} />

      <div className="p-4">
        {page === "realtime" ? <RealtimePage /> : <HistoryPage />}
      </div>
    </div>
  );
}