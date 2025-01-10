import React, { useState, useEffect } from "react";

const DatabasePage = () => {
  const getText = () => {
    return "55";
  };

  const [text, setText] = useState("");

  useEffect(() => {
    setText(getText());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default DatabasePage;