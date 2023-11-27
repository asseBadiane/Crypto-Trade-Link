import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import OAuth from "./pages/OAuth";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateOffer from "./pages/CreateOffer";
import UpdateOffer from "./pages/UpdateOffer";
import Footer from "./components/FooterComponent";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Trader from "./pages/Trader";
import Traders from "./pages/Traders";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/traders" element={<Traders />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-offer" element={<CreateOffer />} />
          <Route path="/update-offer" element={<UpdateOffer />} />
          <Route path="/trader" element={<Trader />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
