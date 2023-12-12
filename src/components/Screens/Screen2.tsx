import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";


export default function Screen2() {

    const variants = {
        hidden: {
            x: "100%",
            opacity: 1,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
            },
        },
    };


    return (
        <motion.div className="w-full h-full absolute py-8 px-6 flex-col-center justify-between" initial="hidden" animate="visible" variants={ variants }>
            <h1 className="text-3xl max-w-xl">
                Développez vos compétences
            </h1>
            <div className="flex-row-center justify-end">
                <Button variant={"outline"}>
                    <Link to="/">Commencer</Link>
                </Button>
            </div>
        </motion.div>
    );
};