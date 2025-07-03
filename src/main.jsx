import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import ReactDOM from "react-dom/client";
import MainHome from "./Components/Main_Home/MainHome.jsx";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
    <Route index element={<MainHome />} />
    </Routes>
  </BrowserRouter>
);