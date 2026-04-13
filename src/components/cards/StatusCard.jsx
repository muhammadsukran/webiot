//Kartu untuk menampilkan status sistem

export default function StatusCard({ data }) {
  const status = data.status || "Normal";

  let color = "text-green-500";
  let bg = "bg-green-100";
  let icon = "fa-check-circle";
  let blink = "";

  if (status.toLowerCase().includes("penuh")) {
    color = "text-red-500";
    bg = "bg-red-100";
    icon = "fa-exclamation-triangle";
    blink = "animate-pulse";
  }

  return (
    <div className="card-modern border-l-4 border-purple-500">

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Status Sistem</p>

        <div className={`icon-box ${bg}`}>
          <i className={`fas ${icon} ${color} ${blink}`}></i>
        </div>
      </div>

      <h2 className={`text-2xl font-bold mt-3 ${color} ${blink}`}>
        {status}
      </h2>
    </div>
  );
}