import { selectHelpState } from "../store/help/helpSlice";
import { useAppSelector } from "../store/hooks";
import "./HelpMenu.css";
import HowToMenuItem from "./HowToMenuItem";
import HelpMenuTitleSwitch from "./HelpMenuTitleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

interface Props {}

const HelpMenu: React.FC<Props> = () => {
  const activeMenu = useAppSelector(selectHelpState).activeMenu;

  return (
    <div className="help-menu-container">
      <HelpMenuTitleSwitch />
      {activeMenu === "HOW_TO" && (
        <ul className="how-to-list">
          <HowToMenuItem itemName="LEVER" />
          <HowToMenuItem itemName="STOP_BUTTON" />
          <HowToMenuItem itemName="REEL" />
          <HowToMenuItem itemName="LOCK_SWITCH" />
          <HowToMenuItem itemName="DISPLAY" />
        </ul>
      )}
      {activeMenu === "ABOUT" && (
        <p className="about-summary left-aligned">
          <div className="custom-line-break" />
          <span>
            My name is <strong>Rio Edwards</strong>. My goal here was to create
            a fun and interactive way to generate pseudo-random coding
            challenges. I hope you enjoy it and find it useful!
            <div className="custom-line-break" />
            <div className="custom-line-break" />
            I'm currently
            <strong> looking for a full-time job</strong> as a software
            developer! If you are interested in hiring me, or just want to say
            hi, please reach out using the links below.
            <div className="custom-line-break" />
          </span>
          <div className="links">
            <a
              className="link"
              href="https://github.com/rioredwards/code-challenge-generator"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                className="icon github"
                size="2x"
                icon={icon({ name: "github", style: "brands" })}
              />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/rio-edwards/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                className="icon linkedin"
                size="2x"
                icon={icon({ name: "linkedin", style: "brands" })}
              />
            </a>
            <a
              className="link"
              href="https://youtube.com/@rioredwards?si=Z95LbMxsy0lowObz"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                className="icon youtube"
                size="2x"
                icon={icon({ name: "youtube", style: "brands" })}
              />
            </a>
          </div>
        </p>
      )}
    </div>
  );
};

export default HelpMenu;
