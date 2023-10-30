import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/home"
import { Register } from "../Pages/register"
import { Login } from "../Pages/login"


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Register />}></Route>
        </Routes>
    )
}