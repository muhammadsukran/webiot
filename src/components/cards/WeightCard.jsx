// Kartu untuk menampilkan berat sampah dengan indikator warna dan ikon

export default function WeightCard({ data }) {
  // ambil weight dari berbagai kemungkinan field
  const rawWeight = parseFloat(
    data?.weight_kg ?? data?.weight ?? data?.berat ?? 0
  );

  // handle NaN & negatif
  const weight = isNaN(rawWeight) ? 0 : rawWeight;
  const safeWeight = Math.max(0, weight);

  //ambil volume
  const volume = data?.volume ?? 0;

  // hitung rasio visual
  const ratio = Math.min(safeWeight / 5, 1);
  const height = 25 - ratio * 17;

  return (
    <div className="card-modern border-l-4 border-red-500">

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Berat</p>

        <div className="icon-box bg-red-500 text-white">
          <i className="fas fa-weight"></i>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-2">
        {weight.toFixed(2)} g
      </h2>

      <div className="relative w-20 h-28 mx-auto mt-4 bg-gray-200 rounded overflow-hidden">
        <div
          className="absolute bottom-0 w-full transition-all duration-500"
          style={{
            height: `${volume}%`,
            background:
              volume >= 90
                ? "#e74c3c"
                : volume >= 50
                ? "#f39c12"
                : "#27ae60",
          }}
        />
      </div>

      <div className="mt-3 flex flex-col items-center">
        <div
          className="w-16 bg-gray-400 rounded transition-all"
          style={{ height: `${height}px` }}
        />
        <div className="w-20 h-2 bg-gray-500 mt-1 rounded"></div>
      </div>

    </div>
  );
}