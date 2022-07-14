import React, { useState } from "react";
import AStyle from "../../../StyleComponents/QA_Styles/AStyle.jsx";

const AnswerPanel = ({ answer, onClickHelpful }) => {
  const [answerHelp, setAnswerHelp] = useState(false);
  return (
    <div>
      <AStyle.A>A: </AStyle.A>
      <AStyle.Input>{answer.body}</AStyle.Input>
      <br />
      <AStyle.Info>
        <AStyle.User>
          {`by ${answer.answerer_name}`}
        </AStyle.User>
        <AStyle.Date>{`| ${answer.date}`}</AStyle.Date>
        <AStyle.Helpful>| Helpful?</AStyle.Helpful>
        {answerHelp ? <li>{`| Yes (${answer.helpfulness})`}</li>
          : (
            <AStyle.Yes
              id={answer.id}
              type="answer"
              onClick={(e) => {
                onClickHelpful(e);
                setAnswerHelp(true);
              }}
            >
              {`| Yes (${answer.helpfulness})`}
            </AStyle.Yes>
          )}
        <AStyle.Reported>Reported</AStyle.Reported>
      </AStyle.Info>
    </div>
  );
};

export default AnswerPanel;