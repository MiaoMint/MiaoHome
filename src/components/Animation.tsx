import { motion } from "framer-motion";
import { HTMLProps, ReactNode } from "react";

interface AnimationProps {
    id: string
    children: ReactNode
}

export default function Animation(props: AnimationProps) {
    return (
        <motion.div
            key={props.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
        >
            {props.children}
        </motion.div>
    )
}