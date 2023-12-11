import { createRoot } from "react-dom/client";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/config/theme-provider";

import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Auth from "@/pages/Auth";
import Courses from "@/pages/Courses";
import Course from "@/pages/Course";
import DesignSystem from "@/pages/DesignSystem";

import Navbar from "@/components/Nav/Navbar";

import "@/style/index.css";


const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

const AppRoutes = () => {
    const location = useLocation();
    const showNavBar = ["/", "/courses", "/profile"];
    const shouldShowNavBar = showNavBar.includes(location.pathname);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/courses" element={<Courses />}></Route>
                <Route path="courses/:id" element={<Course />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/ui" element={<DesignSystem />}></Route> 
            </Routes>
            {shouldShowNavBar && <Navbar />}
            <Toaster richColors />
        </ThemeProvider>
    );
};

root.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);
