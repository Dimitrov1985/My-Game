import { easeOut } from "motion";

export const iconVariants = {
    hidden: {
        opacity: 0,
        x: 50
    },
    visible:(i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut"
        }
    }),
}

export const motionVariants = {
     hidden: {
        opacity: 0,
        x: -50
    },
     visible:(i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.5,
            ease: "easeOut"
        }
    }),

}

export const imgVariants = {
     hidden: {
        opacity: 0,
        x: 150
    },
     visible:(i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.3,
            duration: 0.9,
            ease: "easeOut"
        }
    }),

}