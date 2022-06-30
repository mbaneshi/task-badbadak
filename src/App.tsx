import CssBaseline from "@mui/material/CssBaseline";
import data from "./models/mydata";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResortList from "./components/ResortList";
import Task from "./components/Task";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import FavoriteItem from "./components/FavoriteItem";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />

          <Routes>
            <Route index element={<ResortList data={data} />} />
            <Route path="task" element={<Task />} />
            <Route path="fav" element={<FavoriteItem />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
