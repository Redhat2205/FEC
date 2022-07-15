import React, { useState } from "react";
import AStyle from "../../../StyleComponents/QA_Styles/AStyle.jsx";

const AnswerPanel = ({ answer, onClickHelpful, onReport }) => {
  const [answerHelp, setAnswerHelp] = useState(false);
  const [report, setReport] = useState(false);

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
        <AStyle.Reported
          id={answer.id}
          onClick={(e) => {
            setReport(true);
            onReport(e);
          }}
        >
          {report ? "Reported" : "Report"}
        </AStyle.Reported>
      </AStyle.Info>
    </div>
  );
};

export default AnswerPanel;