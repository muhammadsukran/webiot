export default function VolumeCard({ data }) {
  const volume = data.volume || 0;

  let color = "bg-green-500";
  let dotColor = "bg-green-500";
  let label = "Normal";

  if (volume >= 80) {
    color = "bg-red-500";
    dotColor = "bg-red-500";
    label = "Penuh";
  } else if (volume >= 50) {
    color = "bg-yellow-500";
    dotColor = "bg-yellow-500";
    label = "Sedang";
  }

  return (
    <div className="card-modern border-l-4 border-blue-500">

      {/* HEADER */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">Volume Sampah</p>
        <h2 className="text-3xl font-bold text-gradient">
          {volume}%
        </h2>
      </div>

      {/* GARIS + DOT */}
      <div className="relative w-full flex items-center">

        {/* GARIS BACKGROUND */}
        <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>

        {/* GARIS AKTIF */}
        <div
          className={`h-2 rounded-full ${color} transition-all duration-500`}
          style={{ width: `${volume}%` }}
        ></div>

        {/* DOT 0% */}
        <div className="absolute left-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>

        {/* DOT 50% */}
        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>

        {/* DOT 100% */}
        <div className="absolute right-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300"></div>

        {/* DOT AKTIF (BERGERAK) */}
        <div
          className={`absolute w-5 h-5 rounded-full ${dotColor} border-2 border-white shadow-md transition-all duration-500`}
          style={{
            left: `calc(${volume}% - 10px)`
          }}
        ></div>
      </div>

      {/* LABEL */}
      <div className="flex justify-between text-xs text-gray-400 mt-2">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>

      {/* STATUS */}
      <p className="text-xs mt-3 text-gray-500">
        Status: <span className="font-semibold">{label}</span>
      </p>
    </div>
  );
}