import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import ReactDOM from "react-dom/client";
import MainHome from "./Components/Main_Home/MainHome.jsx";
import HomeDash from "./Components/ADMIN PANEL/DASBOARD/HomeDash.jsx";
import AddMember from "./Components/ADMIN PANEL/ADD_MEMBER/AddMember.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Member from "./Components/ADMIN PANEL/DASBOARD/Homedash_work/Member/Member.jsx";
const root = document.getElementById("root");
const queryClient = new QueryClient();
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* public page */}
        <Route index element={<MainHome />} />

        {/* admin dashboard with outlet start*/}
        <Route path="admin" element={<HomeDash></HomeDash>}>
          <Route path="mamber" element={<Member></Member>} />
          <Route path="add" element={<AddMember></AddMember>} />
        </Route>
        {/* admin dashboard with outlet end*/}
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>
);
