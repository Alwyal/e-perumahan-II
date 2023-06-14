import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "./1.png"

function Landing() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    axios
      .get("http://localhost:3069/")
      .catch((error) => {
        console.log(error);
      });

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="landing-container">
      <style>{`
        .landing-container {
            background-image: url(${img});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
        }
        .section-title {
          margin-top: 5px;
        }
        .animated-text {
          display: inline-block;
          animation: moveText 2s infinite;
        }
        @keyframes moveText {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .clock {
          text-align: center;
          color: #fff;
          margin-bottom : 5px
        }
        .bordered-button {
          display: inline-block;
          padding: 10px 20px;
          border: 2px solid #006400;
          border-radius: 4px;
          background-color: transparent;
          color: #006400;
          font-size: 18px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .bordered-button:hover {
          background-color: #006400;
          color: #fff;
        }
      `}</style>

      <section id="page-title-area" className="section-padding overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <div className="clock">
                <h1 className="text-center">{time.toLocaleTimeString()}</h1>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section id="car-list-area" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="car-list-content">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                        <h2 className="animated-text">Selamat Datang di E-Perumahan</h2><br></br>
                        <h6 className="animated-text">Housing Management System</h6>
              </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="carousel">
                      {/* Tambahkan kode carousel di sini */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="start-button">
                      <a href="/login" className="bordered-button">Start</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
