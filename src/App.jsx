import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Company from "./pages/company/company"
import Login from "./pages/login/login"
import SignUp from "./pages/signUp/signup"
import Home from "./pages/home/home"
import CreateParkingSpot from "./pages/createSpot/createParkingSpot"
import OwnerSpots from "./pages/spot/spot"
import AdminUserList from "./pages/adminUserList/adminUserList"

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
          <Route path="find-parking" element={<OwnerSpots role="listing" />} />

          {/* <Route path="users" element={<AdminUserList />} /> */}

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
              <OwnerSpots ownerOnly={true} role="owner" />
              
            </ProtectedRoute>
          }
        />

        <Route
          path="/driver-listing"
          element={
            <ProtectedRoute allowedRoles={['driver']}>
              <OwnerSpots ownerOnly={true} role="driver" />
              
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminUserList />    
            </ProtectedRoute>
          }
        />


        <Route
          path="/all-bookings"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <OwnerSpots ownerOnly={true} role="admin-all-bookings" />
            </ProtectedRoute>
          }
        />

        <Route
          path="/all-parking-spots"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <OwnerSpots ownerOnly={true} role="admin-all-parkings" />
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

