import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Preferences from "./pages/Preferences";
import Saved from "./pages/Saved";
import ArticleDetails from "./pages/ArticleDetails";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;