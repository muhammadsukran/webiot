import React, { useEffect, useState } from "react";
import Header from "../components/HeaderLanding";
import { db } from "../services/firebase";

export default function LandingPage({ setPage }) {
  const [status, setStatus] = useState("OFFLINE");
  const [lidOpen, setLidOpen] = useState(false);

  // 🔥 ANIMASI TUTUP
  useEffect(() => {
    const interval = setInterval(() => {
      setLidOpen((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // 🔥 FIREBASE STATUS
  useEffect(() => {
    const ref = db.ref("tong_sampah");

    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) setStatus(data.sys_arduino_status || "OFFLINE");
    });

    return () => ref.off();
  }, []);

  const scrollToFitur = () => {
    document.getElementById("fitur").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">

      <style>{`
        @keyframes colorCycle {
          0% { color: #22c55e; }
          25% { color: #eab308; }
          50% { color: #ef4444; }
          75% { color: #3b82f6; }
          100% { color: #22c55e; }
        }
        .animate-color {
          animation: colorCycle 6s infinite linear;
        }
      `}</style>

      <Header setPage={setPage} />

      {/* 🔥 BACKGROUND ICON */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <i
            key={i}
            className={`fas ${
              ["fa-recycle", "fa-trash", "fa-leaf"][i % 3]
            } animate-color absolute opacity-10`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 40}px`,
            }}
          />
        ))}
      </div>

      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-20 pt-28">

<div className="w-full max-w-xl text-left mr-auto">

  <h1 className="text-5xl font-extrabold">
    Revolusi Pengelolaan Sampah dengan
    <span className="block text-blue-600">Teknologi IoT</span>
  </h1>

  <p className="text-gray-500 mt-5 text-lg">
    Pantau kapasitas tong sampah secara real-time, buka tutup otomatis tanpa sentuh,
    dan analisis data kebiasaan pembuangan sampah.
  </p>

<div className="flex flex-col sm:flex-row gap-5 mt-10">

  <button
    onClick={() => setPage("realtime")}
    className="flex items-center justify-center gap-3 w-52 h-14 
               bg-gradient-to-r from-blue-600 to-indigo-600 
               text-white rounded-2xl 
               border-2 border-blue-600
               shadow-lg hover:shadow-blue-400/40
               hover:scale-105 active:scale-95
               transition-all duration-300"
  >
    <i className="fas fa-chart-line text-lg"></i>
    <span className="font-semibold">Monitoring</span>
  </button>

  <button
    onClick={scrollToFitur}
    className="flex items-center justify-center gap-3 w-52 h-14 
               bg-white text-blue-600 
               rounded-2xl 
               border-2 border-blue-600
               shadow-lg hover:shadow-blue-300/40
               hover:bg-blue-600 hover:text-blue
               hover:scale-105 active:scale-95
               transition-all duration-300"
  >
    <i className="fas fa-book-open text-lg"></i>
    <span className="font-semibold">Pelajari</span>
  </button>

</div>
</div>

<div className="flex flex-col items-center mr-auto lg:ml-10 -ml-6">

  <div className="relative h-64">

    <div className="relative">

      <div
        className="absolute -top-5 left-2 w-36 h-10 bg-[#00BFFF] rounded-t-full"
        style={{
          transformOrigin: "right bottom",
          transform: lidOpen
            ? "rotate(110deg) translate(25px,-20px)"
            : "rotate(0deg)",
          transition: "0.7s",
        }}
      ></div>

     <div className="w-40 h-6 bg-[#5F9EA0] rounded-t-xl"></div>

<div className="w-40 h-44 bg-gradient-to-b from-[#B4CFEC] to-[#045D5D] rounded-b-3xl flex flex-col items-center justify-center gap-3 shadow-xl">

  <i className="fas fa-recycle text-5xl animate-spin animate-color"></i>

  <div className="font-semibold">
    <span
      className={`flex items-center gap-2 ${
        status === "ONLINE" ? "text-green-500" : "text-red-500"
      }`}
    >
      <span className="w-3 h-3 rounded-full bg-current animate-pulse"></span>
      {status}
    </span>
  </div>

</div>
</div>

      <div className="flex justify-between px-4 mt-1">
        <div className="w-6 h-2 bg-gray-700 rounded"></div>
        <div className="w-6 h-2 bg-gray-700 rounded"></div>
      </div>

    </div>
  </div>

      </section>

      <section id="fitur" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-14">Fitur Unggulan</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
          {[
            { icon: "fa-wifi", text: "Realtime Monitoring" },
            { icon: "fa-bell", text: "Notifikasi Otomatis" },
            { icon: "fa-robot", text: "Otomatisasi" },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow hover:-translate-y-3 transition">
              <i className={`fas ${item.icon} text-blue-600 text-3xl mb-4 animate-bounce`}></i>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Cara Kerja</h2>

        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Pantau kapasitas tong sampah secara real-time, buka tutup otomatis tanpa sentuh,
          dan analisis data kebiasaan pembuangan sampah.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
          {[
            { icon: "fa-microchip", text: "Sensor membaca kapasitas" },
            { icon: "fa-cloud-upload-alt", text: "Data dikirim ke Firebase" },
            { icon: "fa-desktop", text: "Dashboard realtime" },
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow hover:scale-105 transition">
              <i className={`fas ${step.icon} text-blue-600 text-3xl mb-4 animate-pulse`}></i>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-gray-400 text-sm">
        © 2026 Smart Bin IoT
      </footer>
    </div>
  );
}