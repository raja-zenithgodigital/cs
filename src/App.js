import { Routes, Route } from "react-router-dom";
import UserLogin from "./Components/UserLogin.js";
import Dashboard from "./Components/Dashboard.js";
import AdminLogin from "./Components/AdminLogin.js";
import Certificates from "./Components/Certificates.js";
import Profile from "./Components/Profile.js";
import ChangePassword from "./Components/ChangePassword.js";
import ForgotPassword from "./Components/ForgotPassword.js";
import Exam from "./Components/Exam.js";
import Hoteldetails from "./Components/Hoteldetails.js";
import Employeedetalis from "./Components/Employeedetalis.js";
import Details from "./Components/Details.js";
import Completecourse from "./Components/Completecourse.js";
import Pendingdetails from "./Components/Pendingdetails.js";
import EmployeeCompleteCourse from "./Components/EmployeeCompleteCourse.js";
import EmployeePendingCourse from "./Components/EmployeePendingCourse.js";
import HotelComleteCourse from "./Components/HotelComleteCourse.js";
import HotelPendingCourse from "./Components/HotelPendingCourse.js";
import EmployeeComplete from "./Components/EmployeeComplete.js";
import EmployeePending from "./Components/EmployeePending.js";
import AdminChangePassword from "./Components/AdminChangePassword.js";
import "./App.css";

// Employee dashboard
import EmployeeDashboard from "./Components/EmployeeDashboard.js";
import EmployeeChangePassword from "./Components/EmployeeChangePassword.js";
import EmployeeCertificate from "./Components/EmployeeCertificate.js";
import EmployeeViewdetails from "./Components/EmployeeViewdetails.js";
import EmployeeExam from "./Components/EmployeeExam.js";
import EmployeeCourse from "./Components/EmployeeCourse.js";
import EmployeeProfile from "./Components/EmployeeProfile.js";
import EmployeeEditdetails from "./Components/EmployeeEditdetails.js";
import Requestdetails from "./Components/Requestdetails.js";
import EmployeePlaylist from "./Components/EmployeePlaylist.js";

//Hotel Dashboard
import HotelDashboard from "./Components/HotelDashboard.js";
import Hoteluser from "./Components/Hoteluser.js";
import Hotelcourse from "./Components/Hotelcourse.js";
import HotelViewdetails from "./Components/HotelViewdetails.js";
import HotelChangePassword from "./Components/HotelChangePassword.js";
import HotelCertificate from "./Components/HotelCertificate.js";
import HotelExam from "./Components/HotelExam.js";
import Hotelprofile from "./Components/Hotelprofile.js";
import HotelEditdetails from "./Components/HotelEditdetails.js";
import Hotelplaylist from "./Components/Hotelplaylist.js";

function App() {
  return (
    <div className="App">
      {/* Admin  */}
      <Routes>
        <Route extact path="/" element={<Dashboard />}></Route>
        <Route extact path="/login" element={<UserLogin />}></Route>
        <Route extact path="/adminlogin" element={<AdminLogin />}></Route>
        <Route extact path="/certificate" element={<Certificates />}></Route>
        <Route extact path="/profile" element={<Profile />}></Route>
        <Route
          extact
          path="/changepassword"
          element={<ChangePassword />}
        ></Route>
        <Route
          extact
          path="/forgotpassword"
          element={<ForgotPassword />}
        ></Route>
        <Route extact path="/exam" element={<Exam />}></Route>
        <Route extact path="/details" element={<Details />}></Route>
        <Route
          extact
          path="/hcomplete"
          element={<HotelComleteCourse />}
        ></Route>
        <Route
          extact
          path="/HotelPendingCourse"
          element={<HotelPendingCourse />}
        ></Route>
        <Route
          extact
          path="/employeecomplete"
          element={<EmployeeComplete />}
        ></Route>
        <Route
          extact
          path="/employeepending"
          element={<EmployeePending />}
        ></Route>
        <Route extact path="/change" element={<AdminChangePassword />}></Route>
        <Route
          extact
          path="/Hotelcomplete"
          element={<Completecourse />}
        ></Route>
        <Route extact path="/hotelpending" element={<Pendingdetails />}></Route>
        <Route
          extact
          path="/employeecomplete"
          element={<EmployeeCompleteCourse />}
        ></Route>
        <Route
          extact
          path="/employeependingcourse"
          element={<EmployeePendingCourse />}
        ></Route>
        <Route
          extact
          path="/employeedetails"
          element={<Employeedetalis />}
        ></Route>
        <Route extact path="/hoteldetails" element={<Hoteldetails />}></Route>
        <Route extact path="/hotelplaylist" element={<Hotelplaylist />}></Route>
      </Routes>
      {/* Employee  */}
      <Routes>
        <Route extact path="/employee" element={<EmployeeDashboard />}></Route>
        <Route
          extact
          path="/echange"
          element={<EmployeeChangePassword />}
        ></Route>
        <Route
          extact
          path="/ecertificate"
          element={<EmployeeCertificate />}
        ></Route>
        <Route
          extact
          path="/edetails"
          element={<EmployeeViewdetails />}
        ></Route>
        <Route extact path="/employeeexam" element={<EmployeeExam />}></Route>
        <Route
          extact
          path="/employeecourse"
          element={<EmployeeCourse />}
        ></Route>
        <Route
          extact
          path="/employeeprofile"
          element={<EmployeeProfile />}
        ></Route>
        <Route
          extact
          path="/employeeedetails"
          element={<EmployeeEditdetails />}
        ></Route>
        <Route
          extact
          path="/employeeplaylist"
          element={<EmployeePlaylist />}
        ></Route>
        <Route
          extact
          path="/requestdetails"
          element={<Requestdetails />}
        ></Route>
      </Routes>
      {/* Hotel  */}
      <Routes>
        <Route extact path="/hotel" element={<HotelDashboard />}></Route>
        <Route extact path="/hotelexam" element={<HotelExam />}></Route>
        <Route extact path="/hotelcourse" element={<Hotelcourse />}></Route>
        <Route extact path="/hoteluser" element={<Hoteluser />}></Route>
        <Route extact path="/hdetails" element={<HotelViewdetails />}></Route>
        <Route extact path="/hchange" element={<HotelChangePassword />}></Route>
        <Route
          extact
          path="/HotelCertificate"
          element={<HotelCertificate />}
        ></Route>
        <Route extact path="/Hotelprofile" element={<Hotelprofile />}></Route>
        <Route extact path="/ehdetails" element={<HotelEditdetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
