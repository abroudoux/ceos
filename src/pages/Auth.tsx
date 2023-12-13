import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";

import { variantsSlideLeft } from "@/lib/animations";
import useStore from "@/lib/store";

import AuthForm from "@/components/AuthForm/AuthForm";


export default function Auth() {

    const { token } = useStore();

    if (token) {
        return <Navigate to="/" />;
    };

    return (
        <motion.section className="page" initial="hidden" animate="visible" variants={ variantsSlideLeft }>
            <div className="mb-8">
                <h1 className="text-4xl font-fields font-semibold">Bienvenu sur Céos!</h1>
                <p className="text-lg font-coolvetica text-muted-foreground font-light">Créez un compte ou connectez vous pour commencer à utiliser l'aplication</p>
            </div>
            <AuthForm />
        </motion.section>
    );
};