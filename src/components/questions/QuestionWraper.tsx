import React from "react";
import QuestionList from "./QuestionList";
import { Question } from "../../types/types";

interface QuestionWraperProps {
  selectedQuestion: Question | null;
  setSelectedQuestion: (value: Question | null) => void;
  questions: Question[];
}

const QuestionWraper: React.FC<QuestionWraperProps> = ({
  selectedQuestion,
  setSelectedQuestion,
  questions,
}) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold text-center">
          Question Paper Name
        </div>
        <div className="">Show selected values</div>
        <QuestionList
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
          questions={questions}
        />
      </div>
    </>
  );
};

export default QuestionWraper;
