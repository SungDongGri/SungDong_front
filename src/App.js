import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Admin
import Admin_Mento from "./pages/Admin_Mento/Admin_Mento";
import Admin_Menti from "./pages/Admin_Menti/Admin_Menti";

//Member
import Home from "./pages/Member_Page/Home";
import Education from "./pages/Member_Page/Education";
import RequestProgram from "./pages/Member_Page/Request_Program";
import Mypage from "./pages/Member_Page/Mypage";
import Notice from "./pages/Member_Page/Notice";
import Mentoring from "./pages/Member_Page/Mentoring";
import ApplyMento from "./pages/Member_Page/Apply_Mento";
import ApplyMenti from "./pages/Member_Page/Apply_Menti";
import Login from "./pages/Member_Page/Login";
import Join from "./pages/Member_Page/Join";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Mentoring" element={<Mentoring /> } />
            <Route path="/Education" element={<Education /> } />
            <Route path="/Request_Program" element={<RequestProgram />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/Notice" element={<Notice /> } />
            <Route path="/Apply_Mento" element={<ApplyMento /> } />
            <Route path="/Apply_Menti" element={<ApplyMenti /> } />
            <Route path="/Login" element={<Login /> } />
            <Route path="/Join" element={<Join /> } />

            <Route path="/Admin_Mento" element={<Admin_Mento /> } />
            <Route path="/Admin_Menti" element={<Admin_Menti />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
