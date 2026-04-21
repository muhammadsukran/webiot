import { useState, useEffect } from "react";

//STATISTIC DETAIL COMPONENT
function useCountUp(value, duration = 800) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setDisplay(start);
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return display;
}

export default function StatsDetail({ stats }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (stats && Object.keys(stats).length > 0) {
      const lastKey = Object.keys(stats).reverse()[0];
      setSelected(lastKey);
    }
  }, [stats]);

  if (!stats || Object.keys(stats).length === 0) {
    return (
      <p className="text-gray-400 text-center py-6">
        Tidak ada data
      </p>
    );
  }

  const data = stats[selected] || {};

  const totalW =
  data.total_weight_kg ??
  data.total_berat ??
  data.avg_weight_kg ??
  0;

  return (
    <div className="glass p-3 md:p-4 rounded-2xl hover-lift">

      {/* FILTER */}
      <div className="mb-4">
        <label className="text-sm text-gray-500">
          Pilih Tanggal
        </label>

        <select
          className="w-full mt-1 p-2 rounded-lg border focus:ring-2 focus:ring-blue-400 text-sm"
          value={selected || ""}
          onChange={(e) => setSelected(e.target.value)}
        >
          {Object.keys(stats)
            .reverse()
            .map((k) => (
              <option key={k} value={k}>
                {stats[k].date || k}
              </option>
            ))}
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">

        <StatBox
          icon="fa-door-open"
          label="Buka Tutup"
          value={data.total_opens ?? 0}
          color="blue"
        />

        <StatBox
          icon="fa-arrow-up"
          label="Max Volume"
          value={data.max_volume ?? 0}
          suffix="%"
          color="red"
        />

        <StatBox
          icon="fa-arrow-down"
          label="Min Volume"
          value={data.min_volume ?? 0}
          suffix="%"
          color="green"
        />

        <StatBox
          icon="fa-weight-hanging"
          label="Total Berat"
          value={totalW}
          suffix=" kg"
          color="purple"
          isFloat
        />

      </div>
    </div>
  );
}

function StatBox({ icon, label, value, color, suffix = "", isFloat }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    red: "bg-red-100 text-red-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

  const animated = useCountUp(value);

  return (
    <div className="card-modern flex flex-col items-center text-center p-3">

      <div className={`p-3 rounded-full ${colors[color]} mb-2`}>
        <i className={`fas ${icon}`}></i>
      </div>

      <p className="text-xs text-gray-500">{label}</p>

      <h3 className="text-base md:text-lg font-bold mt-1 text-gradient">
        {isFloat
          ? animated.toFixed(2)
          : Math.floor(animated)}
        {suffix}
      </h3>
    </div>
  );
}