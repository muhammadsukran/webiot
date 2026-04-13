import { useEffect, useState } from "react";
import { db } from "../services/firebase";

//Fungsi Status koneksi Online/Offline
export default function ConnectionStatus() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const ref = db.ref(".info/connected");
    ref.on("value", (snap) => {
      setConnected(snap.val() === true);
    });

    return () => ref.off();
  }, []);

  return (
    <div className="fixed top-20 right-4 z-50">
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-white text-sm ${
          connected ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            connected ? "bg-white blink" : "bg-gray-300"
          }`}
        ></span>
        {connected ? "Online" : "Offline"}
      </div>
    </div>
  );
}