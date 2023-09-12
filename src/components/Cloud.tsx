import './Cloud.css';
import { cloudAnimation } from '../motionConfigs/cloudMotion';
import { motion } from 'framer-motion';

const Cloud: React.FC = () => {
  return <motion.div animate={cloudAnimation} className="cloud" />;
};

export default Cloud;
