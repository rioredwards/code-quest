import { useMotionValue, motion } from "framer-motion";
import "./Choice.css";

interface ChoiceProps {
  displayName: string;
  classes: string;
}

const Choice: React.FC<ChoiceProps> = ({ classes, displayName }) => {
  const y = useMotionValue("0vh");
  y.on("change", (latest) => {
    console.log(latest);
  });
  return (
    <motion.div style={{ y }} className={classes}>
      {displayName}
    </motion.div>
  );
};

export default Choice;
