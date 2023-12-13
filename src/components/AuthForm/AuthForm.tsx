import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import useStore from "@/lib/store";
import loading from "@/lib/loading";
import { supabase } from "@/lib/supabase";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Icons } from "@/components/ui/icons";


export default function AuthForm() {

    const { token, username, signIn, setUsername } = useStore();
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [signinData, setSigninData] = useState({
        email: "",
        password: "",
    });

    const handleSignupChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignupData({...signupData, [e.target.id]: e.target.value});
    };

    const signUpNewUser = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({
                // name: signupData.name,
                email: signupData.email,
                password: signupData.password,
            });

            if (error) {
                console.error("Error signing up:", error);
                toast.error("Error signing up");
            } else {
                console.log("Sign up successful:", data);
                setUsername(signupData.email);
                signIn();
                navigate("/");
            };

        } catch (error: any) {
            console.error("Error signing up:", error.message);
            toast.error("Error signing up");
        }
    };

    const handleSigninChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSigninData({...signinData, [e.target.id]: e.target.value});
    };

    const signInExistingUser = async () => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: signinData.email,
                password: signinData.password,
            });

            if (error) {
                console.error("Error signing up:", error);
                toast.error("Error signing up");
            } else {
                console.log("Sign up successful:", data);
                navigate("/");
            };
        } catch (error: any) {
            console.error("Error signing up:", error.message);
            toast.error("Error signing up");
        };
    };

    return (
        <Tabs defaultValue="signin" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Inscription</TabsTrigger>
                <TabsTrigger value="login">Connexion</TabsTrigger>
            </TabsList>
            <form onSubmit={(e) => {e.preventDefault(); signUpNewUser();}}>
                <TabsContent value="signin">
                    <Card>
                        <CardHeader>
                            <CardTitle>S'inscrire</CardTitle>
                            <CardDescription>
                                Nouveau ici ? Créez un compte
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Nom</Label>
                                <Input autoComplete="off" id="name" type="text" placeholder="Votre nom" value={signupData.name} onChange={handleSignupChange} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input autoComplete="off" id="email" type="email" placeholder="Votre email" value={signupData.email} onChange={handleSignupChange} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input id="password" type="password" placeholder="Créez un mot de passe" value={signupData.password} onChange={handleSignupChange} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant={"outline"}>
                                {/* {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )} */}
                                Créer
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </form>
            <form onSubmit={(e) => {e.preventDefault(); signInExistingUser();}}>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Se connecter</CardTitle>
                            <CardDescription>
                                Accéder à votre espace
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Votre email" value={signinData.email} onChange={handleSigninChange} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input id="password" type="password" placeholder="Saisissez votre mot de passe" value={signinData.password} onChange={handleSigninChange} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant={"outline"}>
                                {/* {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )} */}
                                Se Connecter
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </form>
        </Tabs>
    );
};