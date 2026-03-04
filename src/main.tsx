import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import BecomeATutor from "./pages/BecomeATutor.tsx";
import TutoringRulesPage from "./pages/TutoringRulesPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/become-a-tutor" element={<BecomeATutor />} />
        <Route path="/tutoring-rules" element={<TutoringRulesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
