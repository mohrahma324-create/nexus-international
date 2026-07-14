import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-stone">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="border-t border-ink/10 py-8 text-center text-sm text-ink/50">
        © {new Date().getFullYear()} Nexus International
      </footer>
    </div>
  );
}
