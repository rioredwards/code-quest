import { MenuType, selectHelpState } from '../store/help/helpSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import './HelpMenuTitleSwitch.css';

interface Props {}

const HelpMenuTitleSwitch: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const activeMenu = useAppSelector(selectHelpState).activeMenu;

  function onClickMenuType(type: MenuType) {
    dispatch({ type: 'help/setActiveMenu', payload: type });
  }

  return (
    <div className="help-menu-title-container">
      <h2
        onClick={() => onClickMenuType('HOW_TO')}
        className={`help-menu-title-text left 
        ${activeMenu === 'HOW_TO' ? 'active-menu-title' : ''}`}
      >
        How To
      </h2>
      <h2
        onClick={() => onClickMenuType('ABOUT')}
        className={`help-menu-title-text right 
        ${activeMenu === 'ABOUT' ? 'active-menu-title' : ''}`}
      >
        About
      </h2>
    </div>
  );
};

export default HelpMenuTitleSwitch;
