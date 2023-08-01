import React from "react";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Restaurant from "./pages/Restaurants";
import ThingsToDo from "./pages/ThingsToDo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel" element={<Hotels />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/ttd" element={<ThingsToDo />} />
      </Routes>
    </div>
  );
}

export default App;
