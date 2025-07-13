import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </main>
  );
}

export default App;
