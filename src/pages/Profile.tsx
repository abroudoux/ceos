import React, { useEffect, useState } from "react";
import { faHeart, faCheck, faPodcast } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

import useStore from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { ModeToggle } from "@/components/ui/mode-toggle";
import ColorCard from "@/components/ColorCard/ColorCard";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



export default function Profile() {

    const { token, username } = useStore();

    if (!token) {
        return <Navigate to="/welcome/1" />;
    };

    return (
        <section className="page w-full">
            <div className="w-full flex-row-center-between mb-10">
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/115636685?v=4" />
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <ModeToggle />
            </div>
            <h1 className="text-3xl mb-2 font-fields">Hello, { username }</h1>
            <p className="text-md text-muted-foreground mb-5 font-light font-fields">Bienvenu sur votre profil, consultez votre activité</p>
            <div className="w-full h-auto flex-row-center gap-2 mb-2">
                <ColorCard path="/profile/favourites" title="Favoris" icon={ faHeart } color="pink" />
                <ColorCard path="/profile/finished" title="Terminées" icon={ faCheck } color="green" />
            </div>
            <ColorCard path="/podcasts" title="Podcasts" icon={ faPodcast } color="blue" />
        </section>
    );
};