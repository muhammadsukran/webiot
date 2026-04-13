//Kartu untuk menampilkan jarak sensor dengan indikator warna dan ikon

export default function DistanceCard({ data }) {
  const distance = parseFloat(data.distance ?? data.jarak ?? 0);
  const space = Math.max(0, 50 - distance);

  return (
    <div className="card-modern border-l-4 border-green-500">

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Jarak Sensor</p>
          <h2 className="text-2xl font-bold">
            {distance.toFixed(1)} cm
          </h2>
        </div>

        <div className="icon-box bg-green-500 text-white">
          <i className="fas fa-ruler"></i>
        </div>
      </div>

      <div className="mt-4 text-sm flex justify-between text-gray-500">
        <span>Sisa</span>
        <span>{space.toFixed(1)} cm</span>
      </div>
    </div>
  );
}