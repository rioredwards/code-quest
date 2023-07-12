import Choice from "./Choice";

interface Props {
  choices: string[];
  highlightedIdx: number | null;
}

const ChoiceList: React.FC<Props> = ({ choices, highlightedIdx }) => {
  return (
    <>
      {choices.map((choice, i) => (
        <Choice
          key={i}
          CSSclasses={getChoiceCSSClassName(i, highlightedIdx)}
          displayName={choice}
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

export default ChoiceList;
