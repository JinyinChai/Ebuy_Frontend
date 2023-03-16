import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {Route, Router, Routes, Navigate} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import UserProfile from "./pages/UserProfile";
import EditProfile from "./pages/EditProfile";


const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}>
                </Route>
                <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
                <Route path="/userProfile" element={<UserProfile/>}/>
                <Route path="/editProfile" element={<EditProfile/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;