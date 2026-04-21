import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { handleStatusUpdate } from "../services/telegram";

export default function useRealtimeData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ref = db.ref("tong_sampah");

    const handleValue = (snap) => {
      const val = snap.val();

      console.log("🔥 Firebase masuk:", val);

      if (val) {
        setData({ ...val });

        // TRIGGER TELEGRAM LANGSUNG
        if (val.status) {
          handleStatusUpdate(val.status);
        }
      }
    };

    ref.on("value", handleValue);

    return () => {
      ref.off("value", handleValue);
    };
  }, []);

  return data;
}