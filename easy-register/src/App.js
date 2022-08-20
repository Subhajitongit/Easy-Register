import React from "react";
import { Route, Routes } from "react-router-dom";
import Decision from "./pages/decisionScreen";
import Student from "./pages/studentScreen";
import Teacher from "./pages/teacherScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route exact path="/" element={<Decision />} />
      </Routes>
    </div>
  );
}

export default App;
