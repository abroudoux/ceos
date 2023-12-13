import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import tä from "@/assets/img/tä.png";

import { variantsSlideLeft } from "@/lib/animations";

import { Button } from "@/components/ui/button";


export default function Screen2() {
    return (
        <motion.div className="w-full h-full absolute left-0 py-8 px-6 flex-col-center justify-between bg-bg-green max-w-lg" initial="hidden" animate="visible" variants={ variantsSlideLeft }>
            <h1 className="text-7xl font-rammetto text-green">
                Le savoir à portée de main!
            </h1>
            <div className="w-full flex-row-center justify-end">
                <div className="flex flex-col">
                    <img src={ tä } alt="Tä" className="h-full w-52" />
                    <p className="ml-20 font-fields font-bold text-4xl mt-3">Tä</p>
                </div>
            </div>
            <div className="flex-row-center-center w-full">
                <Button variant={"outline"} size={"lg"}>
                    <Link to="/auth">Commencer</Link>
                </Button>
            </div>
        </motion.div>
    );
};