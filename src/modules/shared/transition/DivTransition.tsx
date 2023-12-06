import { motion } from "framer-motion";
import { ReactElement } from "react";

interface Props {
  className?: string;
  position?: "x" | "y";
  point?: number;
  children: ReactElement | ReactElement[];
}

export default function DivTransition({
  position = "y",
  className,
  point = -50,
  children,
}: Props): JSX.Element {
  return (
    <motion.div
      initial={{
        y: position === "x" ? 0 : point,
        x: position === "x" ? point : 0,
        opacity: 0.5,
      }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
