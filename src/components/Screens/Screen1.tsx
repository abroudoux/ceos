import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import scium from "@/assets/img/scium2.png";
import sciumGif from "@/assets/videos/scium.gif";



export default function Screen1() {
    return (
        <div className="w-full h-full absolute left-0 py-8 px-6 flex-col-start-between bg-bg-blue max-w-lg">
            <h1 className="text-8xl font-rammetto text-blue flex-col-start">
                Céos,
                <br />
                <span className="text-8xl font-rammetto text-white">1</span> jour
                <br />
                <span className="text-8xl font-rammetto text-white">1</span> leçon
            </h1>
            <div className="w-full flex-row-center justify-end">
                <div className="flex flex-col">
                    {/* <video autoPlay loop muted className="h-full w-52">
                        <source src={ sciumGif } type="image/gif" />
                    </video> */}
                    <img src={ scium } alt="Scium" className="h-full w-52" />
                    <p className="ml-4 font-fields font-bold text-5xl mt-3">Scium</p>
                </div>
            </div>
            <div className="flex-row-center-center w-full">
                <Link to="/welcome/2">
                    <Button variant={"outline"} size={"lg"}>
                        Suivant
                    </Button>
                </Link>
            </div>
        </div>
    );
};