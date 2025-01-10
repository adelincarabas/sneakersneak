import React from "react";
import { useNavigate } from "react-router-dom";

const Toolbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/database");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        padding: "10px",
        width: "100%",
        height: "7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#123456",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          marginLeft: "1rem",
          lineHeight: "7rem",
        }}
      >
        Test
      </div>

      <div
        style={{
          fontSize: "1rem",
          marginLeft: "5rem",
          lineHeight: "7rem",
        }}
      >
        Test
      </div>
      <img src="/sneakersneak.webp" alt="" 
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "100%",
        maxHeight: "100%",
      }}/>
    <div
        onClick={handleClick}
        style={{
          fontSize: "1rem",
          marginLeft: "auto",
          marginRight: "5rem",
          lineHeight: "7rem",
        }}
      >
        Database
      </div>

      <div
        style={{
          fontSize: "1rem",
          marginRight: "3rem",
          lineHeight: "7rem",
        }}
      >
        Test
      </div>
    </div>
  );
};

export default Toolbar;
