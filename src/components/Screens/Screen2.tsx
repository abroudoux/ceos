import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { variantsSlideLeft } from "@/lib/animations";

import { Button } from "@/components/ui/button";


export default function Screen2() {
    return (
        <motion.div className="w-full h-full absolute left-0 py-8 px-6 flex-col-center justify-between bg-bg-green" initial="hidden" animate="visible" variants={ variantsSlideLeft }>
            <h1 className="text-6xl font-rammetto text-green">
                Un petit test pour voir si ça marche
            </h1>
            <div className="flex-row-center justify-end">
                <Button variant={"outline"}>
                    <Link to="/auth">Commencer</Link>
                </Button>
            </div>
        </motion.div>
    );
};