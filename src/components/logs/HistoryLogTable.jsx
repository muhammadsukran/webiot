export default function LogTable({ logs }) {
  const data = Object.entries(logs || {}).reverse();

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow border">
      <table className="w-full text-sm text-center border-collapse">

        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <tr>
            <th className="p-3 border-b">Waktu</th>
            <th className="p-3 border-b">Volume</th>
            <th className="p-3 border-b">Berat</th>
            <th className="p-3 border-b">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map(([key, log]) => {

            // 🔥 FIX: ambil semua kemungkinan field
            const rawWeight = parseFloat(
              log.weight_kg ?? log.weight ?? log.berat ?? 0
            );

            const weight = isNaN(rawWeight) ? 0 : rawWeight;
            const safeWeight = Math.max(0, weight);

            return (
              <tr
                key={key}
                className="border-t border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">
                  {log.timestamp || log.last_update || "-"}
                </td>

                <td className="p-3 font-semibold">
                  {log.volume ?? 0}%
                </td>

                <td className="p-3">
                  {/* 🔥 pilih mau tampil negatif atau tidak */}
                  {weight.toFixed(2)} kg
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      log.status?.toLowerCase().includes("penuh")
                        ? "bg-red-100 text-red-600"
                        : log.status?.toLowerCase().includes("sedang")
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {log.status || "-"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </div>
  );
}