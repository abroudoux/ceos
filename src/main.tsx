import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/config/theme-provider";

import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Auth from "@/pages/Auth";
import Courses from "@/pages/Courses";

import Navbar from "@/components/Nav/Navbar";

import "@/style/index.css";



const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement,).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/courses" element={<Courses />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
            </Routes>
            <Navbar/>
            <Toaster richColors />
        </BrowserRouter>
    </ThemeProvider>
);
