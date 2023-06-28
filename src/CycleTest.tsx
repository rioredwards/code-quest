import * as React from "react";
import { motion, useCycle } from "framer-motion";

export const CycleTest = () => {
  const [x, cycleX] = useCycle(0, 50, 100);

  return (
    <motion.div
      children={x}
      className="circle"
      animate={{ x: x }}
      onTap={() => cycleX()}
    />
  );
};
