import { selectHelpState } from "../store/help/helpSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import "./HelpMenu.css";
import GMailIcon from "../assets/gmail-icon.png";
import HowToMenuItem from "./HowToMenuItem";
import HelpMenuTitleSwitch from "./HelpMenuTitleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect } from "react";

interface Props {}

const HelpMenu: React.FC<Props> = () => {
  const activeMenu = useAppSelector(selectHelpState).activeMenu;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const escListener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch({ type: "help/closeHelpMenu" });
      }
    };

    document.addEventListener("keydown", escListener, { capture: true });
    return () => {
      document.removeEventListener("keypress", escListener, { capture: true });
    };
  }, [dispatch]);

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
            challenges. I hope you enjoy it and find it useful! If you have any
            questions for me or want to see the code, I've provided links below.
            <div className="custom-line-break" />
            <div className="custom-line-break" />
            I'm currently
            <strong> looking for a full-time job</strong> as a software
            developer! If you are interested in hiring me, or just want to say
            hi, please reach out on Linked-In or send me an Email.
            <div className="custom-line-break" />
          </span>
          <div className="links">
            <a
              className="link"
              href="mailto:rioredwards@gmail.com"
              target="_blank"
              rel="noreferrer">
              <img className="icon gmail" src={GMailIcon} alt="email" />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/rio-edwards/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                className="fa-icon linkedin"
                size="2x"
                icon={icon({ name: "linkedin", style: "brands" })}
              />
            </a>
            <a
              className="link"
              href="https://github.com/rioredwards/code-challenge-generator"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                className="fa-icon github"
                size="2x"
                icon={icon({ name: "github", style: "brands" })}
              />
            </a>
            <a
              className="link"
              href="https://youtube.com/@rioredwards?si=Z95LbMxsy0lowObz"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon
                className="fa-icon youtube"
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
