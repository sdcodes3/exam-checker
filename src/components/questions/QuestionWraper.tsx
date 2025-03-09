import React from "react";
import QuestionList from "./QuestionList";

interface QuestionWraperProps {
  selectedQuestion: string | null;
  setSelectedQuestion: (value: string | null) => void;
}

const QuestionWraper: React.FC<QuestionWraperProps> = ({
  selectedQuestion,
  setSelectedQuestion,
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
        />
      </div>
    </>
  );
};

export default QuestionWraper;
