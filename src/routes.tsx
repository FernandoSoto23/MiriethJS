import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Login from "./views/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import { HomeView } from "./views/home/Home";
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<HomeView/>}/>
                     <Route path="/home" element={<HomeView/>}/>
                </Route>
            </Routes>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path="/auth/login" element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
