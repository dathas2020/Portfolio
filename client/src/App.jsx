import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Research from "./pages/Research/Research";
import Journey from "./pages/Journey/Journey";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import Navbar from './components/layout/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;