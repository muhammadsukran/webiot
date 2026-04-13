import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

//GRAFIK HARIAN
export default function DailyChart({ stats }) {
  const canvasRef = useRef();
  const chartRef = useRef();
  const [chartType, setChartType] = useState("line");

  useEffect(() => {
    if (!stats || Object.keys(stats).length === 0) return;

    if (chartRef.current) chartRef.current.destroy();

    const sorted = Object.values(stats).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    const labels = sorted.map((s) => s.date);
    const avg = sorted.map((s) => s.avg_volume || 0);
    const max = sorted.map((s) => s.max_volume || 0);

    const ctx = canvasRef.current.getContext("2d");

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 300);
    gradientBlue.addColorStop(0, "rgba(59,130,246,0.5)");
    gradientBlue.addColorStop(1, "rgba(59,130,246,0)");

    const gradientRed = ctx.createLinearGradient(0, 0, 0, 300);
    gradientRed.addColorStop(0, "rgba(239,68,68,0.5)");
    gradientRed.addColorStop(1, "rgba(239,68,68,0)");

    chartRef.current = new Chart(ctx, {
      type: chartType,
      data: {
        labels,
        datasets: [
          {
            label: "Rata-rata",
            data: avg,
            borderColor: "#3b82f6",
            backgroundColor:
              chartType === "line" ? gradientBlue : "rgba(59,130,246,0.7)",
            fill: chartType === "line",
            tension: 0.4,
          },
          {
            label: "Max",
            data: max,
            borderColor: "#ef4444",
            backgroundColor:
              chartType === "line" ? gradientRed : "rgba(239,68,68,0.7)",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 800,
          easing: "easeOutQuart",
        },
        plugins: {
          legend: {
            labels: {
              color: "#555",
            },
          },
        },
        scales: {
          y: {
            ticks: {
              color: "#666",
            },
          },
          x: {
            ticks: {
              color: "#666",
            },
          },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [stats, chartType]);

  return (
    <div className="glass p-3 md:p-4 rounded-2xl hover-lift">

      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-3">

        <h5 className="font-semibold flex items-center gap-2 text-sm md:text-base">
          <i className="fas fa-chart-line text-blue-500"></i>
          Grafik Volume Harian
        </h5>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setChartType("line")}
            className={`px-3 py-1 text-xs rounded-lg ${
              chartType === "line"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            <i className="fas fa-wave-square"></i>
          </button>

          <button
            onClick={() => setChartType("bar")}
            className={`px-3 py-1 text-xs rounded-lg ${
              chartType === "bar"
                ? "bg-red-500 text-white"
                : "bg-gray-100"
            }`}
          >
            <i className="fas fa-chart-bar"></i>
          </button>
        </div>
      </div>

      {/* CHART */}
      <div className="h-[220px] sm:h-[250px] md:h-[300px]">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}