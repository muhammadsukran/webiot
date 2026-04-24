export default function LandingPage({ setPage }) {
  return (
    <>
      {/* STYLE */}
      <style>
        {`
        .trash-illustration {
          width: 300px;
          height: 360px;
          background: #ffffff;
          border-radius: 20px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 10px solid #ecf0f1;
        }

        .trash-lid-ill {
          width: 320px;
          height: 40px;
          background: #3498db;
          border-radius: 20px 20px 5px 5px;
          position: absolute;
          top: -40px;
          transform-origin: top right;
          animation: openLid 3s infinite ease-in-out;
        }

        @keyframes openLid {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
        }

        .trash-body-icon {
          font-size: 80px;
          color: #27ae60;
          margin-bottom: 20px;
        }

        .trash-status-badge {
          padding: 8px 20px;
          background: #e8f8f5;
          color: #27ae60;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
        }

        .feature-card {
          transition: 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .feature-icon-big {
          font-size: 50px;
          margin-bottom: 20px;
          color: #27ae60;
        }

        .step-card {
          padding: 25px;
          border-radius: 15px;
          background: white;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: 0.3s;
          height: 100%;
        }

        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .step-icon {
          font-size: 45px;
          color: #3498db;
          margin-bottom: 15px;
        }
        `}
      </style>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top px-4">
        <div className="container-fluid">

          <span className="navbar-brand fw-bold">
            <i className="fas fa-recycle text-success me-2"></i>
            SmartBin IoT
          </span>

          <ul className="navbar-nav mx-auto d-flex flex-row gap-4">
            <li><a className="nav-link fw-medium" href="#home">Beranda</a></li>
            <li><a className="nav-link fw-medium" href="#features">Fitur</a></li>
            <li><a className="nav-link fw-medium" href="#how">Cara Kerja</a></li>
          </ul>

          <button
            onClick={() => setPage("realtime")}
            className="btn btn-primary rounded-pill px-4"
          >
            <i className="fas fa-chart-line me-2"></i>
            Dashboard
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="d-flex align-items-center"
        style={{
          minHeight: "85vh",
          background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h1 className="fw-bold mb-3">
                Revolusi Pengelolaan Sampah dengan{" "}
                <span className="text-primary">Teknologi IoT</span>
              </h1>

              <p className="text-muted mb-4">
                Pantau kapasitas tong sampah secara real-time, buka tutup otomatis tanpa sentuh,
                dan analisis data kebiasaan pembuangan sampah.
              </p>

              <button
                onClick={() => setPage("realtime")}
                className="btn btn-success px-4"
              >
                Mulai Monitoring
                <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>

            <div className="col-md-6 text-center mt-4 mt-md-0">
              <div className="trash-illustration mx-auto">
                <div className="trash-lid-ill"></div>

                <i className="fas fa-dumpster trash-body-icon"></i>

                <div className="trash-status-badge">
                  <i className="fas fa-circle-check me-1"></i> Aktif
                </div>

                <div style={{ marginTop: "15px", fontSize: "12px", color: "#aaa" }}>
                  <i className="fas fa-cloud me-1"></i> Terhubung ke Firebase
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FITUR */}
      <section id="features" className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-2">Kenapa Memilih Sistem Ini?</h2>
          <p className="text-muted mb-5">
            Integrasi IoT modern untuk efisiensi pengelolaan sampah
          </p>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="card feature-card border-0 shadow-sm h-100">
                <div className="card-body">
                  <i className="fas fa-wifi feature-icon-big"></i>
                  <h5>Monitoring Real-time</h5>
                  <p className="small text-muted">
                    Data volume sampah dikirim langsung ke dashboard setiap detik melalui koneksi internet yang stabil.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card feature-card border-0 shadow-sm h-100">
                <div className="card-body">
                  <i className="fas fa-hand-sparkles feature-icon-big"></i>
                  <h5>Sensor Tanpa Sentuh</h5>
                  <p className="small text-muted">
                    Tutup tong sampah terbuka otomatis saat mendeteksi gerakan tangan.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card feature-card border-0 shadow-sm h-100">
                <div className="card-body">
                  <i className="fas fa-chart-line feature-icon-big"></i>
                  <h5>Analisis Statistik</h5>
                  <p className="small text-muted">
                    Grafik harian dan log riwayat membantu memahami pola pembuangan sampah.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card feature-card border-0 shadow-sm h-100">
                <div className="card-body">
                  <i className="fas fa-laptop-mobile feature-icon-big"></i>
                  <h5>Akses Multi-Platform</h5>
                  <p className="small text-muted">
                    Dashboard dapat diakses melalui Smartphone, Tablet, maupun Desktop.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CARA KERJA */}
      <section id="how" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">Cara Kerja Sistem</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="step-card">
                <i className="fas fa-microchip step-icon"></i>
                <h5>Deteksi Sensor</h5>
                <p className="small text-muted">
                  Sensor Ultrasonik mengukur volume kepenuhan, sementara Load Cell menghitung berat sampah secara akurat.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-card">
                <i className="fas fa-wifi step-icon"></i>
                <h5>Pengiriman Data</h5>
                <p className="small text-muted">
                  ESP32 mengirim data ke Google Firebase Database via WiFi.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-card">
                <i className="fas fa-chart-pie step-icon"></i>
                <h5>Visualisasi</h5>
                <p className="small text-muted">
                  Website mengambil data dan menampilkannya dalam grafik visual.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-5">
        <div className="container">

          <h5 className="fw-bold mb-3">SmartBin IoT</h5>

          <div className="mb-3">
            <a href="#home" className="text-secondary me-3">Beranda</a>
            <span
              onClick={() => setPage("realtime")}
              className="text-secondary me-3"
              style={{ cursor: "pointer" }}
            >
              Dashboard
            </span>
            <a className="text-secondary me-3">Dokumentasi API</a>
            <a className="text-secondary">Kontak</a>
          </div>

          <p className="small text-secondary">
            Proyek IoT ini dibuat untuk tujuan edukasi dan pengelolaan lingkungan yang lebih baik.
            Menggunakan teknologi ESP32, Firebase, dan Web Development.
          </p>

          <p className="small text-secondary mt-3">
            © 2023 - 2025 SmartBin IoT Project. All Rights Reserved.
          </p>

        </div>
      </footer>
    </>
  );
}