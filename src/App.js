import React, { useState } from "react";
import MainBody from "./Components/Mainbody";

function App() {
  const [BgColor, setBgcolor] = useState("black")
  setTimeout(()=>{
    setBgcolor("white");
  },3000)
  return (
    <div className="App" style={{backgroundColor:`${BgColor}`}}>
      <MainBody/>
    </div>
  );
}

export default App;
