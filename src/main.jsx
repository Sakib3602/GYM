import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import ReactDOM from "react-dom/client";
import MainHome from "./Components/Main_Home/MainHome.jsx";
import HomeDash from "./Components/ADMIN PANEL/DASBOARD/HomeDash.jsx";
import MainDash from "./Components/ADMIN PANEL/DASBOARD/OUTLET_HERE/MainDash.jsx";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {/* public page */}
      <Route index element={<MainHome />} />

      {/* admin dashboard with outlet start*/}
      <Route path="admin" element={<HomeDash></HomeDash>}>
        <Route path="mamber" element={<MainDash></MainDash>} />
      </Route>
      {/* admin dashboard with outlet end*/}
    </Routes>
  </BrowserRouter>
);
