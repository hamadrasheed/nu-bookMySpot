import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Company from "./pages/company/company"
import Login from "./pages/login/login"
import SignUp from "./pages/signUp/signup"
import Home from "./pages/home/home"
import CreateParkingSpot from "./pages/createSpot/createParkingSpot"
import OwnerSpots from "./pages/spot/spot"

import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import ContactUs from "./components/contactUs/contact"
import ProtectedRoute from "./components/protectedRoute/protectedRoute"


function App() {

  return (
    <>
      <Navbar />
      <Routes> 

          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="company" element={<Company />} />
          <Route path="help" element={<ContactUs />} />
          <Route path="find-parking" element={<OwnerSpots />} />

          <Route
          path="/rent-space"
          element={
            <ProtectedRoute allowedRoles={['owner']}>
              <CreateParkingSpot />
            </ProtectedRoute>
            }
          />

        <Route
          path="/owner-listing"
          element={
            <ProtectedRoute allowedRoles={['owner']}>
              <OwnerSpots ownerOnly={true} />
            </ProtectedRoute>
          }
        />


          {/* Catch-all route for undefined URLs */}
          <Route path="*" element={<Home />} />

      </Routes>
      < Footer />
      <ToastContainer />
    </>
  );
}

export default App

