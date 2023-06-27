import { motion, useTime, useTransform } from "framer-motion";
import "./Reel.css";

const LOWER_Y_BOUND = 360;

const children = Array.from({ length: 8 }).map((_, i) => (
  <motion.li
    children={i}
    key={i}
    style={{
      width: "1rem",
      height: "1rem",
      backgroundColor: "red",
      borderRadius: "50%",
      margin: "0.5rem",
    }}
  />
));

function Reel() {
  const time = useTime();
  const translateTime = useTransform(time, [0, 4000], [0, LOWER_Y_BOUND], {
    clamp: false,
  });
  const yOne = useTransform(translateTime, (latest) => latest % LOWER_Y_BOUND);
  const yTwo = useTransform(
    translateTime,
    (latest) => (latest + LOWER_Y_BOUND / 2) % LOWER_Y_BOUND
  );

  return (
    <div className="Reel">
      <div className="window">
        <motion.ul
          children={children}
          style={{
            marginTop: "-90%",
            translateY: yOne,
            position: "absolute",
            width: "10rem",
            height: "10rem",
            // backgroundColor: "green",
          }}
        />
        <motion.ul
          children={children}
          style={{
            marginTop: "-90%",
            translateY: yTwo,
            position: "absolute",
            width: "10rem",
            height: "10rem",
            // backgroundColor: "blue",
          }}
        />
      </div>
    </div>
  );
}

export default Reel;
