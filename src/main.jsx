import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import ReactDOM from "react-dom/client";
import MainHome from "./Components/Main_Home/MainHome.jsx";
import HomeDash from "./Components/ADMIN PANEL/DASBOARD/HomeDash.jsx";
import AddMember from "./Components/ADMIN PANEL/ADD_MEMBER/AddMember.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Member from "./Components/ADMIN PANEL/DASBOARD/Homedash_work/Member/Member.jsx";
import Single_details from "./Components/ADMIN PANEL/ADD_MEMBER/Single_details/Single_details.jsx";
import Four from "./Components/Four0Four/Four.jsx";
import SignUpCom from "./Components/logreg/SignUpCom.jsx";
import AuthProvider from "./Components/logreg/AuthProvider.jsx";
import PrivateRoute from "./Components/logreg/PrivateRoute.jsx";
import Deactive from "./Components/ADMIN PANEL/deactive/Deactive.jsx";
import Due from "./Components/ADMIN PANEL/Due/Due.jsx";
const root = document.getElementById("root");
const queryClient = new QueryClient();
ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* public page */}
        <Route index element={<MainHome />} />
        <Route path="signup" element={<SignUpCom></SignUpCom>} />

        {/* admin dashboard with outlet start*/}
        <Route path="admin" element={<PrivateRoute><HomeDash></HomeDash></PrivateRoute>}>
          <Route path="mamber" element={<Member></Member>} />
          <Route path="add" element={<AddMember></AddMember>} />
          <Route path="d" element={<Deactive></Deactive>} />
          <Route path="due" element={<Due></Due>} />
          <Route path="membar/:id" element={<Single_details></Single_details>} />
        </Route>
        {/* admin dashboard with outlet end*/}
        {/* wrong route */}
        <Route path="*" element={<Four></Four>} />
        {/* wrong route */}
      </Routes>
    </QueryClientProvider>
    </AuthProvider>
  </BrowserRouter>
);
