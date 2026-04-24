export default function DistanceCard({ data }) {
  const depth = 50; // kedalaman tong
  const distance = parseFloat(data.distance ?? data.jarak ?? 0);
  const space = Math.max(0, depth - distance);

  return (
    <div className="card-modern border-l-4 border-green-500">

      {/* Bagian utama (tetap) */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Ketinggian sampah</p>
          <h2 className="text-2xl font-bold">
            {distance.toFixed(1)} cm
          </h2>
        </div>

        <div className="icon-box bg-green-500 text-white">
          <i className="fas fa-ruler"></i>
        </div>
      </div>

      {/* Tambahan info bawah */}
      <div className="mt-4 border-t pt-3 text-sm text-gray-600 space-y-1">
        <div className="flex justify-between">
          <span>Kedalaman tong</span>
          <span>{depth} cm</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Sisa ruang</span>
          <span>{space.toFixed(1)} cm</span>
        </div>
      </div>

    </div>
  );
}