// import "./App.css";
// import Footer from "./components/Footer";
// import Dashboard from "./components/Dashboard";
// import HomePage from "./components/HomePage";

// import PricingPage from "./components/PricingPage";
// import AboutDatabasePage from "./components/AboutDatabasePage";
// import Section2 from "./components/Section2";
// import Section3 from "./components/Section3";
// import BookTable from "./components/BookTable";

// function App() {
//   return (
//     <div className="App">
//       <HomePage />
//       <BookTable />
//       <AboutDatabasePage />
//       <PricingPage />
//       <Section2 />
//       <Section3 />

//       <Dashboard />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import backgroundImage from "./logo/background.jpg";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import PricingPage from "./components/PricingPage";
import AboutDatabasePage from "./components/AboutDatabasePage";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import BookTable from "./components/BookTable";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import TestPage from "./components/TestPage";
import Tttt from "./components/Tttt";
import QuestionForm from "./components/QuestionForm";
import Admin from "./components/Admin";
import ChooseSubject from "./components/ChooseSubject";
import UserProgress from "./components/UserProgress";
import PrivateRoutes from "./components/PrivateRoutes";
import Success from "./components/Success";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Notification from "./components/Notification";
import AAA from "./components/AAA";
import SeeStudentProgress from "./components/SeeStudentProgress";
import AdminNotification from "./components/AdminNotification";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booktable" element={<BookTable />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/about" element={<AboutDatabasePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/section2" element={<Section2 />} />
          <Route path="/section3" element={<Section3 />} />
          <Route path="/aaa" element={<AAA />} />

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/tttt/:id" element={<Tttt />} /> */}
            <Route path="/progress" element={<UserProgress />} />
            <Route path="/question/:id" element={<QuestionForm />} />
            <Route path="/choose" element={<ChooseSubject />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/test/:id" element={<TestPage />} />
            <Route path="/seeprogress" element={<SeeStudentProgress />} />
            <Route path="/adminnotifiaction" element={<AdminNotification />} />
          </Route>
          <Route path="/admin" element={<Admin />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/test" element={<TestPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
