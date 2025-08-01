import { Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import Homepage from "./pages/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RegisterForm from "./homepage/RegisterForm";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <Routes>
      <Route index path="/" element={<Homepage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default App;
