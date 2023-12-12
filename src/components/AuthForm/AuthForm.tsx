import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import useStore from "@/lib/store";
import loading from "@/lib/loading";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Icons } from "@/components/ui/icons";


export default function AuthForm() {

    const { token, username, signIn, setUsername } = useStore();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
		switch (e.target.id) {
			case 'name':
				setName(e.target.value);
			    break;
			case 'email':
				setEmail(e.target.value);
			    break;
            case 'password':
                setPassword(e.target.value);
                break;
			default:
			    break;
		};
	};

    const createUser = async () => {

        setIsLoading(true);
        await loading(2000);

        // if (name.length <= 1) {
        //     toast.error('Choose a username with 2 characters or more');
        // } else if (email.length <= 1) {
        //     toast.error('Choose an email with 2 characters or more');
        // } else if (password.length <= 1) {
        //     toast.error('Choose a password with 6 characters or more');
        // } else {
        //     try {
        //         const response = await fetch(`${BASE_URL}/users`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ name, email, password }),
        //           });

        //         if (response.ok) {
        //             navigate("/");
        //             setUsername(name);
        //             console.log(name, email, password)
        //             signIn();
        //         } else {
        //             toast.error('Failed during registration');
        //             throw new Error('Failed during registration');
        //         };

        //     } catch (error: any) {
        //         toast.error('Error during registration', error.message);
        //     } finally {
        //         setIsLoading(false);
        //     };
        // };

        setIsLoading(false);
    };

    async function login(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            navigate("/");
        }, 2000)
    };

    return (
        <Tabs defaultValue="signin" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Inscription</TabsTrigger>
                <TabsTrigger value="login">Connexion</TabsTrigger>
            </TabsList>
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
                                <Input autoComplete="off" id="name" type="text" value={name} placeholder="Votre nom" onChange={handleChange} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input autoComplete="off" id="email" type="email" value={email} placeholder="Votre email" onChange={handleChange} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input id="password" type="password" value={password} placeholder="Créez un mot de passe" onChange={handleChange} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={isLoading} onClick={createUser} variant={"outline"}>
                                {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Créer
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            <form onSubmit={login}>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>S'inscrire</CardTitle>
                            <CardDescription>
                                Accéder à votre espace
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Votre email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Mot de passe</Label>
                                <Input id="password" type="password" placeholder="Saisissez votre mot de passe" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={isLoading} variant={"outline"}>
                                {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Se Connecter
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </form>
        </Tabs>
    );
};