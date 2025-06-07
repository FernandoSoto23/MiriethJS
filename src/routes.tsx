import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/auth/Login";
import { HomeView } from "./views/home/Home";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas públicas o de login */}
                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<Login />} />
                </Route>

                {/* Rutas protegidas o principales */}
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/home" element={<HomeView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
