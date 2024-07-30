import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [h1Text, setH1Text] = useState("");
  const [newH1Text, setNewH1Text] = useState("");

  useEffect(() => {
    axios
      .get("https://fastvertbackend.onrender.com/api/h1")
      .then((response) => {
        if (response.data) {
          setH1Text(response.data.text);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChangeH1 = () => {
    axios
      .post("https://fastvertbackend.onrender.com/api/h1", { text: newH1Text })
      .then((response) => {
        setH1Text(response.data.text);
        setNewH1Text("");
      })
      .catch((error) => console.error(error));
  };

  const gradientTextStyle = {
    background: 'linear-gradient(to right, #ff6f61, #d083c8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    marginTop: '1rem'
  };

  return (
    <>
      <div className="App container d-flex justify-content-center mt-4 input-group w-50">
        <input
          type="text"
          value={newH1Text}
          onChange={(e) => setNewH1Text(e.target.value)}
          placeholder="New H1 Text"
          className="form-control text-center rounded"
        />
        <button onClick={handleChangeH1} className="btn btn-primary">
          Change H1 Text
        </button>
      </div>
      <h1 className="mt-4 text-center" style={gradientTextStyle}>{h1Text}</h1>
    </>
  );
}

export default App;
