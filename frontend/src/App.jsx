import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import OAuth from "./pages/OAuth";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateTrader from "./pages/CreateTrader";
import UpdateTrader from "./pages/UpdateTrader";
import Footer from "./components/FooterComponent";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Trader from "./pages/Trader";
import Traders from "./pages/Traders";
// import { useSelector } from "react-redux";

function App() {
  // const { currentUser } = useSelector((state) => state.user);
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
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/update-trader/:traderId" element={<UpdateTrader />} />
            <Route path="/create-trader" element={<CreateTrader />} />
            <Route path="/trader/:traderId" element={<Trader />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
