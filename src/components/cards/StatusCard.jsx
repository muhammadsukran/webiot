export default function StatusCard({ data }) {
  const status = data.status || "Normal";
  const tutup = data.tutup ?? false; // true = terbuka
  const gerakan = data.gerakan ?? false; // true = ada gerakan

  let color = "text-green-500";
  let bg = "bg-green-100";
  let icon = "fa-check-circle";
  let blink = "";

  if (status.toLowerCase().includes("penuh")) {
    color = "text-red-500";
    bg = "bg-red-100";
    icon = "fa-exclamation-triangle";
    blink = "animate-pulse";
  } else if (status.toLowerCase().includes("sedang")) {
    color = "text-yellow-500";
    bg = "bg-yellow-100";
    icon = "fa-exclamation-circle";
    blink = "animate-pulse";
  }

  return (
    <div className="card-modern border-l-4 border-purple-500">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Status Sistem</p>

        <div className={`icon-box ${bg}`}>
          <i className={`fas ${icon} ${color} ${blink}`}></i>
        </div>
      </div>

      {/* Status utama */}
      <h2 className={`text-2xl font-bold mt-3 ${color} ${blink}`}>
        {status}
      </h2>

      {/* Tambahan info */}
      <div className="mt-4 border-t pt-3 text-sm space-y-2">

        <div className="flex justify-between">
          <span className="text-gray-500">Tutup Tong</span>
          <span className={tutup ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}>
            {tutup ? "Terbuka" : "Tertutup"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Gerakan</span>
          <span className={gerakan ? "text-yellow-500 font-semibold animate-pulse" : "text-gray-400"}>
            {gerakan ? "Ada" : "Tidak Ada"}
          </span>
        </div>

      </div>
    </div>
  );
}