import { translateChosenIdxDownByReelCopy } from "../motionConfigs/reelMotion";
import { Choice as ChoiceType } from "../types";
import { repeatArray } from "../utils/genUtils";
import Choice from "./Choice";

interface Props {
  choices: readonly ChoiceType[];
  chosenIdx: number | null;
  highlightChosen: boolean;
}

const ChoiceList: React.FC<Props> = ({
  choices,
  chosenIdx,
  highlightChosen,
}) => {
  const repeatedChoices = repeatArray(choices, 5); // Needed for infinite scrolling behavior
  let highlightedIdx: number | null = null;

  if (highlightChosen && chosenIdx !== null) {
    highlightedIdx = getHighlightedChoiceIdx(chosenIdx, choices.length);
  }

  return (
    <>
      {repeatedChoices.map((choice, i) => (
        <Choice
          key={i}
          CSSclasses={getChoiceCSSClassName(i, highlightedIdx)}
          displayName={choice.name}
        />
      ))}
    </>
  );
};

function getChoiceCSSClassName(
  i: number,
  highlightedIdx: number | null
): string {
  const base = "choice";
  let chosenClass = "";
  if (highlightedIdx !== null && i === highlightedIdx)
    chosenClass = "choiceVarChosen";
  const altClass = i % 2 === 0 ? "choiceVar1" : "choiceVar2";
  const classesStr = `${base} ${altClass} ${chosenClass}`;

  return classesStr;
}

function getHighlightedChoiceIdx(
  chosenIdx: number,
  choicesLength: number
): number | null {
  return translateChosenIdxDownByReelCopy(chosenIdx, choicesLength, 1);
}

export default ChoiceList;
