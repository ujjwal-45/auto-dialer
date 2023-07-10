import { Variants } from "framer-motion";

export const staggerContainer : Variants = ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1.2,
      delayChildren: 1.1,
    },
  },
});

export const textVariant = (delay: any): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});