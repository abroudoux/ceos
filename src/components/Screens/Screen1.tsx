import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";


export default function Screen1() {
    return (
        <div className="w-full h-full absolute py-8 px-6 flex-col-center justify-between">
            <h1 className="text-3xl max-w-xl">
                Bienvenu sur Céos, la plateforme pour apprendre tous les jours
            </h1>
            <div className="flex-row-center justify-end">
                <Button variant={"outline"}>
                    <Link to="/welcome/2">Suivant</Link>
                </Button>
            </div>
        </div>
    );
};