import React, { useState, useEffect } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const colors = [
    "#9853a1",
    "#f063a4",
    "#2dc5f4",
    "#fcee21",
    "#f16164",
    "#70327e",
    "#a42963",
    "#0b6a88",
    "#f89e4f",
    "#ec015a",
  ];

  const [background, setBackground] = useState("#071415");
  const [current, setCurrent,] = useState(null);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrent(null);

    }, 3000);
    return () => clearTimeout(timeoutId)
  }, [current]);

  return (
    <div className="App" style={{ background: background }}>
      {current !== null && <h1>Copied {current}</h1>}

      <div className="container">
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div
              style={{
                background: color,
                filter: "brightness(85%)",
                boxShadow: color === background ? "0 0 5px #000" : "",
              }}
              className="box"
              onClick={() => setBackground(color)}
            />
            <CopyToClipboard text={`color: ${color};`}>
              <p
                style={{ color: color === background ? '#fff' : color }}
                onClick={() => setCurrent(color)}
              >
                {color}
              </p>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
}
