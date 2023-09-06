import "./Cloud.css";
import { Variant, motion } from "framer-motion";

const cloudAnimation: Variant = {
  x: [`-80vh`, `200vh`],
  transition: { duration: 50, ease: "linear", repeat: Infinity },
};

const Cloud: React.FC = () => {
  return <motion.div animate={cloudAnimation} className="cloud" />;
};

export default Cloud;
