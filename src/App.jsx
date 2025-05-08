import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import SingleTweet from "./pages/SingleTweet";
import DashboradLayout from "./pages/DashboradLayout";

function App() {
  return (
    <>
      <>
        <Router>
          <Header />
          <Routes>
            <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/homepage" element={<Navigate to="/" />} />
              <Route path="/About" element={<About />}></Route>
              <Route path="/About-us" element={<Navigate to="/About" />} />
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/store" element={<Store />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/timeline" element={<Timeline />}></Route>
              <Route path="/timeline/:id" element={<SingleTweet />}></Route>
              <Route path="/dashboard" element={<DashboradLayout />}>
              {/* children will be here */}
              <Route index element={<h1>Home DashBoard</h1>}/>
              <Route path="trash" element={<h1>Trash Side</h1>}/>
              <Route path="spam" element={<h1>Spam Side</h1>}/>
              </Route>
              
              <Route path="*" element={<NotFound />}></Route>
            </>
          </Routes>
          <Footer />
        </Router>
      </>
    </>
  );
}

export default App;
