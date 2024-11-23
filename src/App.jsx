import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/login/login"
import SignUp from "./pages/signUp/signup"
import Home from "./pages/home/home"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"


function App() {

  return (
    <>
      <Navbar />
      <Routes> 

          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />

          {/* Catch-all route for undefined URLs */}
          <Route path="*" element={<Home />} />

      </Routes>
      < Footer />
      <ToastContainer />
    </>
  );
}

export default App

