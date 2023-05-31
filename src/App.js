import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "./context/search/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Navbar />
          <div className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile/:login" element={<Profile />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </SearchProvider>
    </>
  );
}

export default App;
