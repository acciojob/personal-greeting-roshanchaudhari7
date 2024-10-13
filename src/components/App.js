import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState("")
  return (
    <div>
      {/* Do not remove the main div */}

      <label htmlFor="username">Enter your name: </label>
      <br />
      <input type="text" id="username" onChange={(e) => {
        setText(e.target.value);
      }}/>

      <p>{text && `Hello ${text}!`}</p>
    </div>
  )
}

export default App
