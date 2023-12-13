import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import { variantsSlideLeft } from "@/lib/animations";

import { Button } from "@/components/ui/button";
import scium from "@/assets/img/scium2.png";
import bâ from "@/assets/img/bâ.png";
import tä from "@/assets/img/tä.png";


export default function Welcome() {

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
    });

    return (
        <section>
            {step === 1 && (
                <div className="w-full h-full absolute left-0 py-8 px-6 flex-col-start-between bg-bg-blue max-w-lg" {...handlers}>
                    <h1 className="text-8xl font-rammetto text-blue flex-col-start">
                        Céos,
                        <br />
                        <span className="text-8xl font-rammetto text-white">1</span> jour
                        <br />
                        <span className="text-8xl font-rammetto text-white">1</span> leçon
                    </h1>
                    <div className="w-full flex-row-center justify-end">
                        <div className="flex flex-col">
                            <img src={ scium } alt="Scium" className="h-full w-52" />
                            <p className="ml-4 font-fields font-bold text-5xl mt-3">Scium</p>
                        </div>
                    </div>
                    <div className="flex-row-center-center w-full">
                        <Button variant={"outline"} size={"lg"} onClick={handleNext}>Suivant</Button>
                    </div>
                </div>
            )}

            {step === 2 && (
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
                        <Button variant={"outline"} size={"lg"} onClick={handleNext}>Suivant</Button>
                    </div>
                </motion.div>
            )}

            {step === 3 && (
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
                        <Link to="/auth">
                            <Button variant={"outline"} size={"lg"}>Commencer</Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </section>
    );
};