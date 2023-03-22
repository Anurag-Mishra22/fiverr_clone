import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import MyGigs from "./pages/myGigs/MyGigs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Orders from "./pages/orders/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/gig/:id" element={<Gig />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/myGigs" element={<MyGigs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/message" element={<Message />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
