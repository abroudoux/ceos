import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

    return (
        <section className="max-w-lg min-w-[32rem]">
            {step === 1 && (
                <div className="w-full h-screen py-8 px-14 flex-col-start-between bg-bg-blue min-w-[32rem]" >
                    <h1 className="text-6xl font-rammetto text-blue flex-col-start">
                        Céos,
                        <br />
                        <span className="text-8xl font-rammetto text-white">1</span> jour
                        <br />
                        <span className="text-8xl font-rammetto text-white">1</span> leçon
                    </h1>
                    <div className="w-full flex-row-center justify-end">
                        <div className="flex flex-col">
                            <img src={ scium } alt="Scium" className="h-full w-52" />
                        </div>
                    </div>
                    <div className="flex-row-center-center w-full mb-16">
                        <Button variant={"outline"} size={"xl"} onClick={handleNext}>Suivant</Button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <motion.div className="w-full h-screen py-10 px-14 flex-col-center justify-between bg-bg-orange min-w-[32rem]" initial="hidden" animate="visible" variants={ variantsSlideLeft }>
                    <h1 className="text-6xl font-rammetto text-orange">
                        Chaque problème a sa solution
                    </h1>
                    <div className="w-full flex-row-center justify-end">
                        <div className="flex flex-col">
                            <img src={ bâ } alt="Bâ" className="h-full w-52" />
                        </div>
                    </div>
                    <div className="flex-row-center-center w-full mb-16">
                        <Button variant={"outline"} size={"xl"} onClick={handleNext}>Suivant</Button>
                    </div>
                </motion.div>
            )}

            {step === 3 && (
                <motion.div className="w-full h-screen py-8 px-14 flex-col-center justify-between bg-bg-green min-w-[32rem]" initial="hidden" animate="visible" variants={ variantsSlideLeft }>
                    <h1 className="text-6xl font-rammetto text-green">
                        Le savoir à portée de main!
                    </h1>
                    <div className="w-full flex-row-center justify-end">
                        <div className="flex flex-col">
                            <img src={ tä } alt="Tä" className="h-full w-52" />
                        </div>
                    </div>
                    <div className="flex-row-center-center w-full mb-16">
                        <Link to="/auth">
                            <Button variant={"outline"} size={"xl"}>Commencer</Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </section>
    );
};