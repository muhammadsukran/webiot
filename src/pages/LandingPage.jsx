import React from "react";
import Header from "../components/HeaderLanding";

export default function LandingPage({ setPage }) {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <Header setPage={setPage} />

      <section
        className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 lg:px-20 gap-10"
        style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)",
          paddingTop: "110px",
        }}
      >
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Smart Waste Monitoring with{" "}
            <span className="text-blue-600">IoT Technology</span>
          </h1>

          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Sistem cerdas untuk memantau kapasitas sampah secara real-time,
            meningkatkan efisiensi, dan mendukung smart city modern.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center lg:justify-start">
            <button
              onClick={() => setPage("realtime")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🚀 Dashboard
            </button>

            <a
              href="#features"
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition no-underline"
            >
              Pelajari
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 text-xs sm:text-sm text-gray-400">
            <span>✔ Realtime</span>
            <span>✔ IoT Ready</span>
            <span>✔ Smart Analytics</span>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-xs">

            <div className="absolute -inset-3 bg-blue-200 rounded-3xl blur-2xl opacity-30"></div>

            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-6 relative">

              <div className="flex justify-between items-center mb-4">
                <h6 className="font-semibold">Smart Bin</h6>
                <span className="text-green-500 text-sm animate-pulse">● Online</span>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Kapasitas</p>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-500 h-3 rounded-full w-2/3 transition-all duration-500"></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">67% penuh</p>
              </div>

              <div className="flex justify-between text-sm">
                <span>Status</span>
                <span className="font-semibold text-blue-600">Aktif</span>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <span>Update</span>
                <span className="text-gray-500">Just now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-20 bg-gray-50">
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Fitur Unggulan</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Dirancang untuk efisiensi dan kemudahan monitoring
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-8 lg:px-20">
          {[
            {
              icon: "fa-wifi",
              title: "Realtime Monitoring",
              desc: "Pantau kondisi sampah secara langsung kapan saja",
            },
            {
              icon: "fa-hand-paper",
              title: "Touchless System",
              desc: "Teknologi tanpa sentuh untuk higienitas maksimal",
            },
            {
              icon: "fa-chart-line",
              title: "Data Analytics",
              desc: "Analisa penggunaan untuk keputusan lebih baik",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <i className={`fas ${item.icon} text-blue-600 text-2xl mb-4`}></i>
              <h5 className="font-semibold text-lg">{item.title}</h5>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Cara Kerja</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20 text-center">
          {[
            "Sensor membaca kapasitas sampah",
            "Data dikirim ke Firebase",
            "Dashboard menampilkan realtime",
          ].map((step, i) => (
            <div key={i}>
              <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 text-lg font-bold">
                {i + 1}
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{step}</p>
            </div>
          ))}
        </div>
      </section>


      <footer className="text-center py-6 text-gray-400 text-xs sm:text-sm">
        © 2025 Smart Trash IoT — Built with React & Firebase
      </footer>
    </div>
  );
}