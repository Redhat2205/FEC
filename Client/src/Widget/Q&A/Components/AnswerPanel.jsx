import React, { useState } from "react";
import AStyle from "../../../StyleComponents/QA_Styles/AStyle.jsx";
import AnswerPhoto from "./AnswerPhoto.jsx";

const moment = require('moment');

const AnswerPanel = ({ answer, onClickHelpful, onReport }) => {
  const [answerHelp, setAnswerHelp] = useState(false);
  const [report, setReport] = useState(false);

  return (
    <div>
      <AStyle.A>A: </AStyle.A>
      <AStyle.Input>{answer.body}</AStyle.Input>
      <br />
      <AStyle.Info>
        <AStyle.User>by</AStyle.User>
        {answer.answerer_name.toLowerCase() === "seller"
          ? <AStyle.Seller>Seller</AStyle.Seller>
          : (
            <AStyle.User>
              {answer.answerer_name}
            </AStyle.User>
          )}
        <AStyle.Date>{`| ${moment(answer.date).format('MMMM Do YYYY')}`}</AStyle.Date>
        <AStyle.Helpful>| Helpful?</AStyle.Helpful>
        {answerHelp ? <AStyle.Helpful>{`| Yes (${answer.helpfulness})`}</AStyle.Helpful>
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
          type="answer"
          onClick={(e) => {
            setReport(true);
            onReport(e);
          }}
        >
          {report ? "Reported" : "Report"}
        </AStyle.Reported>
      </AStyle.Info>
      {answer.photos.length > 0 && (
        <ul display="inline-block">
          {answer.photos.map((photo, index) => (
            <AnswerPhoto
              key={index}
              url={photo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnswerPanel;