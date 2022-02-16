import React,  {useState, useEffect} from 'react';

// import {CopyToClipBoard} from 'react-copy-to-clipboard'

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
    "#ec015a"
  ];

  const [background, setBackground] = useState("#071415");
  const [current, setCurrent] = useState(null);

  return (
    <div className="App" style={{background: background}}>
      {current !== null && <h1>Copied {current}</h1>}
      <div className="container">
        {colors.map((color, index) => (
          <div key={index} className='card'>
            <div className="box">

            </div>
          </div>
        ))}
      </div>     
    </div>
  );
}