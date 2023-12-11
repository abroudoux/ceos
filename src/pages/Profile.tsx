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
            <h1 className="text-3xl">Hello, { username }</h1>
        </section>
    );
};