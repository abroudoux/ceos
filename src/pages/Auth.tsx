import { motion } from "framer-motion";

import { variantsSlideLeft } from "@/lib/animations";

import AuthForm from "@/components/AuthForm/AuthForm";
import scium from "@/assets/img/scium2.png";


export default function Auth() {
    return (
        <motion.section className="page" initial="hidden" animate="visible" variants={ variantsSlideLeft }>
            <div className="mb-8">
                <h1 className="text-4xl font-fields font-semibold">Bienvenu sur Céos!</h1>
                <p className="text-lg font-coolvetica text-muted-foreground font-light">Créez un compte ou connectez vous pour commencer à utiliser l'aplication</p>
            </div>
            <AuthForm />
            <div className="w-full h-auto flex-row-center-center mt-12">
                <img src={ scium } alt="Scium" className="h-full w-52" />
            </div>
        </motion.section>
    );
};