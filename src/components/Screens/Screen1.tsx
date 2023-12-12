import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";


export default function Screen1() {
    return (
        <div className="w-full h-full absolute left-0 py-8 px-6 flex-col-center justify-between bg-bg-blue">
            <h1 className="text-6xl font-rammetto text-blue">
                Céos, la plateforme pour apprendre tous les jours
            </h1>
            <div className="flex-row-center justify-end">
                <Button variant={"outline"}>
                    <Link to="/welcome/2">Suivant</Link>
                </Button>
            </div>
        </div>
    );
};