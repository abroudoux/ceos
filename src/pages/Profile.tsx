import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCheck, faPodcast } from "@fortawesome/free-solid-svg-icons";

import { ModeToggle } from "@/components/ui/mode-toggle";


import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';



export default function Profile() {

    const username = "Antonio";

    return (
        <section className="page">
            <div className="w-full flex-row-center-between mb-10">
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/115636685?v=4" />
                    <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <ModeToggle />
            </div>
            <h1 className="text-3xl mb-5">Hello, { username }</h1>
            <div className="w-full h-auto flex-row-center gap-2 mb-2">
                <Link to="/profile/favourites" className="w-48 h-48 bg-[#361530] rounded-2xl relative hover:cursor-pointer hover:rounded-3xl transition-all">
                    <FontAwesomeIcon icon={faHeart} className="text-[#F08CCC] text-5xl p-3 absolute top-0 right-0" />
                    <p className="text-[#F08CCC] bottom-0 absolute p-3 text-3xl font-base">
                        Favoris
                    </p>
                </Link>
                <Link to="/profile/lessons" className="w-48 h-48 bg-[#172F22] rounded-2xl relative hover:cursor-pointer hover:rounded-3xl transition-all">
                    <FontAwesomeIcon icon={faCheck} className="text-[#65E0AA] text-5xl p-3 absolute top-0 right-0" />
                    <p className="text-[#65E0AA] bottom-0 absolute p-3 text-3xl font-base">
                        Terminées
                    </p>
                </Link>
            </div>
            <Link to="/podcasts" className="w-full h-48 bg-[#0F3263] rounded-2xl relative hover:cursor-pointer hover:rounded-3xl transition-all">
                <FontAwesomeIcon icon={faPodcast} className="text-[#71B7F9] text-5xl p-3 absolute top-0 right-0" />
                <p className="text-[#71B7F9] bottom-0 absolute p-3 text-3xl font-base">
                    Podcasts
                </p>
            </Link>
        </section>
    );
};