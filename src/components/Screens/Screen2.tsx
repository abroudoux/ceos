import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { variantsSlideLeft } from "@/lib/animations";

import { Button } from "@/components/ui/button";

import bâ from "@/assets/img/bâ.png";


export default function Screen2() {
    return (
        <motion.div className="w-full h-full absolute left-0 py-8 px-6 flex-col-center justify-between bg-bg-orange max-w-lg" initial="hidden" animate="visible" variants={ variantsSlideLeft }>
            <h1 className="text-7xl font-rammetto text-orange">
                Chaque problème a sa solution
            </h1>
            <div className="w-full flex-row-center justify-end">
                <div className="flex flex-col">
                    <img src={ bâ } alt="Bâ" className="h-full w-36" />
                    <p className="ml-12 font-fields font-bold text-4xl mt-2">Bâ</p>
                </div>
            </div>
            <div className="flex-row-center-center w-full">
                <Button variant={"outline"} size={"lg"}>
                    <Link to="/welcome/3">Suivant</Link>
                </Button>
            </div>
        </motion.div>
    );
};