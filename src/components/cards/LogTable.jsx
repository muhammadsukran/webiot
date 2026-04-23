//Tabel untuk menampilkan history log data dari Firebase
export default function LogTable({ logs }) {
  const data = Object.entries(logs).reverse();

  return (
    <table className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 border-l-4 border-blue-500">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="p-2">Waktu</th>
          <th>Volume</th>
          <th>Berat</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {data.map(([key, log]) => (
          <tr key={key} className="border-b text-center">
            <td>{log.timestamp}</td>
            <td>{log.volume}%</td>
            <td>{log.weight || log.berat} g</td>
            <td>{log.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}