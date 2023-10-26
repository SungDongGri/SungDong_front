import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Admin
import Admin_Mento from "./pages/Admin_Mento/Admin_Mento";
import Admin_Menti from "./pages/Admin_Menti/Admin_Menti";

//Member
import Notice from "./pages/Member_Page/Notice";
import Mentoring from "./pages/Member_Page/Mentoring";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/Notice" element={<Notice /> } />
            <Route path="/Mentoring" element={<Mentoring /> } />
            <Route path="/Admin_Mento" element={<Admin_Mento /> } />
            <Route path="/Admin_Menti" element={<Admin_Menti />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
