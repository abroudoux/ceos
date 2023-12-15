import React from "react";
import { createRoot } from "react-dom/client";
import { useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/config/theme-provider";

import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Auth from "@/pages/Auth";
import Search from "@/pages/Search";
import Course from "@/pages/Course";
import Welcome from "@/pages/Welcome";
import FavLessons from "@/pages/FavLessons";
import FinishedLessons from "@/pages/FinishedLessons";
import Podcasts from "@/pages/Podcasts";

import Navbar from "@/components/Nav/Navbar";
import Loader from "@/components/Loader/Loader";

import "@/style/index.css";


const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer!);

const AppRoutes = () => {
    const location = useLocation();
    const showNavBar = ["/", "/search", "/profile"];
    const shouldShowNavBar = showNavBar.includes(location.pathname);

    const [showLoader, setShowLoader] = React.useState(true);

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/courses/:id" element={<Course />}></Route>
                <Route path="/welcome" element={<Welcome />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/profile/favourites" element={<FavLessons />}></Route>
                <Route path="/profile/finished" element={<FinishedLessons />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/podcasts" element={<Podcasts />}></Route>
            </Routes>
            {showLoader && <Loader />}
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
