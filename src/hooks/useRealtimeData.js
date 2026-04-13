import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { ref, onValue } from "firebase/database";

export default function useRealtimeData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, "tong_sampah");

    onValue(dbRef, (snap) => {
      setData(snap.val());
    });
  }, []);

  return data;
}