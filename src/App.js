import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavigationMenu from "./Pages/NavigationMenu";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Photographers from "./Pages/Photographers";
import Photographeroverview from "./Pages/Photographeroverview";
import Booking from "./Pages/Booking";
import Payment from "./Pages/Payment";
import About from "./Pages/About";
import Contactus from "./Pages/Contactus";
import CustomerAccountSetting from "./Pages/CustomerAccountSetting";
import Footernav from "./Pages/Footernav";
import Paymentsuccess from "./Pages/Paymentsuccess";
import Prewedding from "./Pages/Prewedding";
import Wedding from "./Pages/Wedding";
import Party from "./Pages/Party";

// import Dashboard from "./Pages/Photographerdashboard/Dashboard";
import Dash from "./Pages/Photographerdashboard/Dash";
import Upcoming from "./Pages/Photographerdashboard/Upcoming";
import EditProfile from "./Pages/Photographerdashboard/EditProfile";
// import MiniDrawer from "./Pages/Photographerdashboard/MiniDrawer";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavigationMenu /> */}

        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/Photographers" element={<Photographers />} />
          <Route
            path="/Photographeroverview"
            element={<Photographeroverview />}
          />
          <Route path="/Prewedding" element={<Prewedding />} />
          <Route path="/Wedding" element={<Wedding />} />
          <Route path="/Party" element={<Party />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Paymentsuccess" element={<Paymentsuccess />} />

          <Route path="/About" element={<About />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route
            path="/CustomerAccountSetting"
            element={<CustomerAccountSetting />}
          />
          <Route
            path="*"
            element={
              <h1 className="text-2xl lg:p-[210px] pt-[210px] pb-[210px] text-gray-600">
                Page Not Found
              </h1>
            }
          />

          {/*Photographer Dahsborad */}
          {/* <Route path="/" element={<Dash />} /> */}
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/EditProfile" element={<EditProfile />} />

          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route
            path="/PhotographerOverview"
            element={<PhotographerOverview />}
          /> */}
          {/* <Route path="/Portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/Contactus" element={<Contactus />} /> */}
          {/* <Route path="/Signin" element={<Signin />} /> */}
          {/* <Route path="/Signup" element={<Signup />} /> */}
          {/* <Route path="/Photographers" element={<Photographers />} /> */}

          {/* <Route path="/ContactUs" element={<Contactus />} /> */}

          {/* <Route path="/Upcoming" element={<Upcoming />} /> */}
        </Routes>

        <Footernav />
      </Router>
    </div>
  );
}

export default App;
