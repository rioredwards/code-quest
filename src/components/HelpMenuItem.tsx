import { HelpItemName, getHelpItemFromName } from "../store/help/helpSlice";
import "./HelpMenuItem.css";

interface Props {
  itemName: HelpItemName;
}

const HelpMenuItem: React.FC<Props> = ({ itemName }) => {
  const helpItem = getHelpItemFromName(itemName);

  return (
    <li className="help-item">
      <h2 className="help-item-name">{helpItem.displayName}</h2>
      <p className="help-item-divider">-</p>
      <p className="help-item-description">{helpItem.description}</p>
    </li>
  );
};

export default HelpMenuItem;
