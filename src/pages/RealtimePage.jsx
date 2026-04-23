import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { handleStatusUpdate } from "../services/telegram";

import VolumeCard from "../components/cards/VolumeCard";
import DistanceCard from "../components/cards/DistanceCard";
import StatusCard from "../components/cards/StatusCard";
import WeightCard from "../components/cards/WeightCard";
import DailyChart from "../components/stats/DailyChart";
import StatsDetail from "../components/stats/StatsDetail";

export default function RealtimePage() {
  const [data, setData] = useState({});
  const [stats, setStats] = useState({});

  useEffect(() => {
    const refTong = db.ref("tong_sampah");
    const refStats = db.ref("daily_stats");

    const handleTong = (snap) => {
      const val = snap.val();

      if (val) {
        setData(val);

        if (val.status) {
          handleStatusUpdate(val.status);
        }
      }
    };

    const handleStats = (snap) => {
      const val = snap.val();
      if (val) setStats(val);
    };

    refTong.on("value", handleTong);
    refStats.on("value", handleStats);

    return () => {
      refTong.off("value", handleTong);
      refStats.off("value", handleStats);
    };
  }, []);

  return (
    <div className="p-4 md:p-6 space-y-6">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-gray-700">
          <i className="fas fa-chart-line text-blue-500"></i>
          Dashboard Monitoring
        </h2>

        <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full animate-pulse shadow w-fit">
          LIVE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <div className="lg:col-span-2 glass p-4 md:p-5 hover-lift">
          <h5 className="mb-3 md:mb-4 flex items-center gap-2 text-gray-600 font-semibold text-sm md:text-base">
            <i className="fas fa-chart-area text-blue-500"></i>
            Grafik Volume Harian
          </h5>

          <DailyChart stats={stats} />
        </div>


        <div className="glass p-4 md:p-5 hover-lift">
          <h5 className="mb-3 md:mb-4 flex items-center gap-2 text-gray-600 font-semibold text-sm md:text-base">
            <i className="fas fa-chart-bar text-green-500"></i>
            Statistik Detail
          </h5>

          <div className="space-y-3">
            <StatsDetail stats={stats} />
          </div>
        </div>

      </div>

      <div className="glass p-4 md:p-5 hover-lift">

        <h5 className="mb-4 flex items-center gap-2 text-gray-600 font-semibold text-sm md:text-base">
          <i className="fas fa-layer-group text-purple-500"></i>
          Monitoring Realtime
        </h5>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <VolumeCard data={data} />
          <DistanceCard data={data} />
          <StatusCard data={data} />
          <WeightCard data={data} />
        </div>

      </div>

    </div>
  );
}