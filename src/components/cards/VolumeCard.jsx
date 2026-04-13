//Kartu untuk menampilkan volume sampah dengan indikator warna dan ikon

export default function VolumeCard({ data }) {
  const volume = data.volume || 0;

  let color = "bg-green-500";
  let icon = "fa-check";
  let label = "Normal";

  if (volume >= 90) {
    color = "bg-red-500";
    icon = "fa-exclamation";
    label = "Penuh";
  } else if (volume >= 50) {
    color = "bg-yellow-500";
    icon = "fa-exclamation-circle";
    label = "Sedang";
  }

  return (
    <div className="card-modern border-l-4 border-blue-500">

      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-sm text-gray-500">Volume Sampah</p>
          <h2 className="text-3xl font-bold text-gradient">
            {volume}%
          </h2>
        </div>

        <div className={`icon-box ${color} text-white shadow`}>
          <i className={`fas ${icon}`}></i>
        </div>
      </div>


      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className={`${color} h-2 transition-all duration-500`}
          style={{ width: `${volume}%` }}
        ></div>
      </div>

      <p className="text-xs text-gray-400 mt-2">{label}</p>
    </div>
  );
}