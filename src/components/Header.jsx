import { useEffect, useState } from "react";
import { db } from "../services/firebase";

export default function Header({ setPage, page }) {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const connRef = db.ref(".info/connected");

    connRef.on("value", (snap) => {
      setConnected(snap.val() === true);
    });

    return () => connRef.off();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg px-4 md:px-6 py-3">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        {/* KIRI */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">

          {/* 🔥 LOGO CLICKABLE */}
          <h1
            onClick={() => setPage("landing")}
            className="font-bold text-base md:text-lg flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
          >
            <i className="fas fa-trash-alt"></i>
            Smart Trash IoT
          </h1>

          {/* STATUS */}
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm w-fit">
            <span
              className={`w-2 h-2 rounded-full ${
                connected ? "bg-green-300 animate-pulse" : "bg-red-300"
              }`}
            ></span>

            <span className="font-semibold">
              {connected ? "Online" : "Terputus"}
            </span>
          </div>
        </div>

        {/* NAV */}
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={() => setPage("realtime")}
            className={`flex-1 md:flex-none flex justify-center items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
              page === "realtime"
                ? "bg-white text-blue-600 shadow"
                : "bg-blue-400 hover:bg-blue-300"
            }`}
          >
            <i className="fas fa-chart-line"></i>
            Realtime
          </button>

          <button
            onClick={() => setPage("history")}
            className={`flex-1 md:flex-none flex justify-center items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
              page === "history"
                ? "bg-white text-blue-600 shadow"
                : "bg-blue-400 hover:bg-blue-300"
            }`}
          >
            <i className="fas fa-history"></i>
            History
          </button>
        </div>

      </div>
    </div>
  );
}