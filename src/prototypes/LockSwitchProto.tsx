import { useEffect, useState } from "react";
import "./LockSwitchProto.css";
import { motion } from "framer-motion";

interface LockSwitchProtoProps {}

const LockSwitchProto: React.FC<LockSwitchProtoProps> = () => {
  const [locked, setLocked] = useState(false);

  const spring = {
    type: "spring",
    bounce: 0.2,
    duration: 0.3,
  };

  useEffect(() => {
    if (locked) {
      console.log("locked");
    } else {
      console.log("unlocked");
    }
  }, [locked]);

  return (
    <motion.div
      onClick={() => setLocked(!locked)}
      className="lock-switch-container">
      <motion.div
        animate={{ x: locked ? "20vh" : "0vh" }}
        transition={spring}
        className="knob"
      />
      <div className="lock-switch-housing" />
      <div className="lock-icons" />
      <motion.div
        animate={{ x: locked ? "20vh" : "0vh" }}
        transition={spring}
        className="under-panel"
      />
    </motion.div>
  );
};

export default LockSwitchProto;
