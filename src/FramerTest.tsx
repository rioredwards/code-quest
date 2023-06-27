import { motion } from "framer-motion";

export const FramerTest: React.FC = () => {
  return (
    <motion.div
      className="circle"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 3.5 }}
    />
  );
};

export default FramerTest;
