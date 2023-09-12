import { innerSunAnimation, outerSunAnimation } from '../motionConfigs/sunMotion';
import './Sun.css';
import { motion } from 'framer-motion';

const Sun: React.FC = () => {
  return (
    <>
      <motion.div animate={innerSunAnimation} className="inner-sun" />
      <motion.div animate={outerSunAnimation} className="outer-sun" />
    </>
  );
};

export default Sun;
