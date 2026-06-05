import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className="notFound" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: "#fff", padding: "20px" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
          
         
          <img 
            src="https://img.freepik.com/free-vector/order-confirmed-concept-illustration_114360-1486.jpg" 
            alt="success" 
            style={{ width: "100%", maxWidth: "320px", height: "auto", marginBottom: "10px" }} 
          />
          
          <h1 style={{ fontSize: "2.5rem", fontWeight: "600", color: "#111", letterSpacing: "1px" }}>
            RESERVATION SUCCESSFUL
          </h1>
          
          <p style={{ fontSize: "1.2rem", color: "#555", fontWeight: "300" }}>
            Redirecting to Home in <span style={{ color: "#f54748", fontWeight: "600" }}>{countdown}</span> seconds...
          </p>
          
          <button 
            onClick={() => navigate("/")} 
            style={{ 
              marginTop: "15px", 
              padding: "12px 32px", 
              background: "#111", 
              color: "#fff", 
              border: "none", 
              borderRadius: "30px", 
              fontSize: "16px", 
              fontWeight: "400",
              letterSpacing: "1px",
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center", 
              gap: "10px",
              transition: "0.3s"
            }}
          >
            Back To Home <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Success;