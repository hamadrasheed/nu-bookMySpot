import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/login/login"
import SignUp from "./pages/signUp/signup"
import Navbar from "./components/navbar/navbar"

import PrivateLayout from "./components/layout/PrivateLayout";
import PublicLayout from "./components/layout/PublicLayout";


function App() {

  return (
    <>
      <Navbar />
      <Routes> 
        {/* <Route element={<PrivateLayout />}> */}
          {/* <Route path="/" element={<Home />} /> */}
        {/* </Route> */}

        {/* <Route element={<PublicLayout />}> */}
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        {/* </Route> */}
      </Routes>
      <ToastContainer />
    </>
  );
  // return (
  //   <div>
  //     <Navbar />
  //     <SignUp />
  //   </div>
  // )
}

export default App
