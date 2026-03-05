import { Routes, Route, Navigate } from "react-router-dom";
import TestApi from "./TestApi";

export default function App() {
  return (
    <Routes>
      <Route path="/test_api" element={<TestApi />} />
      {/* If user goes to /, send them to /test_api */}
      <Route path="/" element={<Navigate to="/test_api" replace />} />
    </Routes>
  );
}