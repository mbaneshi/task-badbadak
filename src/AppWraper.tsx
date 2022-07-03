import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResortList from "./components/ResortList";
import Task from "./components/Task";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootState } from "./app/store";
import { useAppSelector } from "./app/hooks";
import FavoriteList from "./components/FavoriteList";

function AppWraper() {
  const { data, selected } = useAppSelector((state: RootState) => state.mydata);

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            index
            element={<ResortList data={data} selected={selected} />}
          />
          <Route path="task" element={<Task />} />
          <Route
            path="fav"
            element={<FavoriteList data={data} selected={selected} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppWraper;
