import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/Context";
import Home from "./Pages/Home/HomePages";
import TopBar from "./components/TopPar/TopPar";
import Single from "./Pages/Home/Single/Single";
import Write from "./Pages/Home/Write/Write";
import Settings from "./Pages/Home/Settings/Settings";
import Login from "./Pages/Home/Login/Login";
import Register from "./Pages/Home/Register/Register";
import { Outlet } from "react-router-dom";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        
      </Routes>
    </>
  );
}

export default App;
