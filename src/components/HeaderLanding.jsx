import React from "react";

const HeaderLanding = ({ setPage }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top px-4 py-3">
      <div className="container-fluid">

        <button
          onClick={() => setPage("landing")}
          className="navbar-brand fw-bold text-dark d-flex align-items-center gap-2 border-0 bg-transparent"
        >
          <i className="fas fa-recycle text-success"></i>
          Smart Trash IoT
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>



          <button
            onClick={() => setPage("realtime")}
            className="btn btn-primary rounded-pill px-4"
          >
            <i className="fas fa-chart-line me-2"></i>
            Monitoring
          </button>

        </div>
    </nav>
  );
};

export default HeaderLanding;