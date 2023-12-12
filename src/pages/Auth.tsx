import { motion } from "framer-motion";

import { variantsSlideLeft } from "@/lib/animations";

import AuthForm from "@/components/AuthForm/AuthForm";


export default function Auth() {
    return (
        <motion.section className="page" initial="hidden" animate="visible" variants={ variantsSlideLeft }>
            <AuthForm />
        </motion.section>
    );
};