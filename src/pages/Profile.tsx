import { useEffect, useState } from "react";
import { faHeart, faCheck, faPodcast } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

import useStore from "@/lib/store";
import { supabase } from "@/lib/supabase";

import { ModeToggle } from "@/components/ui/mode-toggle";
import ColorCard from "@/components/ColorCard/ColorCard";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";



export default function Profile() {

    const { token, username, signOut } = useStore();
    const [firstLetterUsername, setFirstLetterUsername] = useState('');

    useEffect(() => {
        if (username && username.length > 0) {
            setFirstLetterUsername(username.charAt(0).toUpperCase());
        };
    }, [username]);

    if (!token) {
        return <Navigate to="/welcome" />;
    };

    async function signOutSession() {
		const { error } = await supabase.auth.signOut();
		signOut();
	};

    return (
        <section className="page w-full min-w-[28rem]">
            <div className="w-full flex-row-center-between mb-10">
                <Avatar>
                    <AvatarFallback>{ firstLetterUsername }</AvatarFallback>
                </Avatar>
                <div className="flex-row-center-center gap-2">
                    <ModeToggle />
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="secondary">Déconnexion</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Se déconnecter ?</AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Annuler</AlertDialogCancel>
                                <AlertDialogAction className="min-w-[16rem] bg-white text-background border-[1px] hover:bg-background hover:text-white" onClick={signOutSession}>
                                    Continuer
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
            <h1 className="text-4xl mb-2 font-fields">Hello, { username }</h1>
            <p className="text-md text-muted-foreground mb-5 font-light font-fields">Bienvenu sur votre profil, consultez votre activité</p>
            <div className="w-full h-auto flex-row-center gap-2 mb-2">
                <ColorCard path="/profile/favourites" title="Favoris" icon={ faHeart } color="pink" />
                <ColorCard path="/profile/finished" title="Terminées" icon={ faCheck } color="green" />
            </div>
            <ColorCard path="/podcasts" title="Podcasts" icon={ faPodcast } color="blue" />
        </section>
    );
};