import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          {/* <NavBar />
          <HomePage /> */}
          {/* <ExperiencePage /> */}
          {/* <ContactPage /> */}

          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Footer /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
