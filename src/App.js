import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./components/homepage";
import Newpage from "./components/addtaskpage";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newtask" element={<Newpage />} />
      </Routes>
    </BrowserRouter>
  );
}
