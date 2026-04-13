import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import LogTable from "../components/logs/HistoryLogTable";

// Halaman untuk menampilkan history log
export default function HistoryPage() {
  const [logs, setLogs] = useState({});

  useEffect(() => {
    const ref = db.ref("logs").limitToLast(50);
    ref.on("value", (snap) => {
      setLogs(snap.val() || {});
    });

    return () => ref.off();
  }, []);

  return (
    <div className="container mt-4">

      <div className="bg-white p-4 rounded-3 shadow">
        <h4 className="mb-3 flex items-center gap-2">
          <i className="fas fa-history text-purple-500"></i>
          History Log (50 Data Terakhir)
        </h4>

        <div className="table-responsive">
          <LogTable logs={logs} />
        </div>
      </div>
    </div>
  );
}