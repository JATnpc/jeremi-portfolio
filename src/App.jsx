import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import ComingSoonPage from "./components/ComingSoonPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>
      </Router>
      <SpeedInsights />
    </>
  );
}
