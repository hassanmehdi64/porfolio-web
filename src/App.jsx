import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Work from "./components/myWork/Work";
// import UserReview from './components/testamonials/UserReview';
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Certificates from "./components/certification/Certificates";
import ViewMore from "./components/Viewmore/ViewMore";
import AllPages from "./components/allPages/AllPages";
// import ViewMore from './components/myWork/viewMore';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <AllPages/> */}
      <Routes>
        <Route path="/" element={<AllPages/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/viewmore" element={<ViewMore />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/experience" element={<Experience />} />
        {/* <UserReview/> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
