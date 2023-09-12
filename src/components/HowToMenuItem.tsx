import { HelpItemName, getHelpItemFromName } from '../store/help/helpSlice';
import { useAppDispatch } from '../store/hooks';
import './HowToMenuItem.css';
import { motion } from 'framer-motion';

interface Props {
  itemName: HelpItemName;
}

const HelpMenuItem: React.FC<Props> = ({ itemName }) => {
  const helpItem = getHelpItemFromName(itemName);
  const dispatch = useAppDispatch();

  function onHoverStart() {
    dispatch({
      type: 'help/startHoveringOverHelpTarget',
      payload: itemName,
    });
  }

  function onHoverEnd() {
    dispatch({
      type: 'help/stopHoveringOverHelpTarget',
    });
  }

  return (
    <motion.li onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} className="help-item">
      <h2 className="help-item-name">{helpItem.displayName}</h2>
      <p className="help-item-divider">-</p>
      <p className="help-item-description">{helpItem.description}</p>
    </motion.li>
  );
};

export default HelpMenuItem;
