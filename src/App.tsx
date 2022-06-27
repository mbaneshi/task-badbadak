import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import Layout from "./layouts/Layput";

function App() {
  return (
    <>
      <h1>Badbadak</h1>
      <Navbar />
      <Layout />
      <Task />

      <Footer />
    </>
  );
}

export default App;
