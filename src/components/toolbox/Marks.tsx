import React from "react";
import { Question } from "../../types/types";

interface MarksProps {
  selectedMarks: number | null;
  setSelectedMarks: (value: number | null) => void;
  setSelectedShape: (
    value:
      | "checkmark"
      | "cross"
      | "question"
      | "circle"
      | "horizontal-line"
      | "diagonal-line"
      | "rectangle"
      | "clear"
      | null
  ) => void;
  selectedQuestion: Question | null;
}

const Marks: React.FC<MarksProps> = ({
  selectedMarks,
  setSelectedMarks,
  setSelectedShape,
  selectedQuestion,
}) => {
  const maxMark = selectedQuestion?.max_marks ? selectedQuestion.max_marks : -1;
  const marks = [];

  for (let i = 0; i <= maxMark; i += 0.5) {
    marks.push(i);
  }

  const handleClick = (val: number) => {
    setSelectedMarks(val);
    setSelectedShape("checkmark");
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold text-center">Marks</div>
        {marks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-2 gap-2">
            {marks.map((mark, index) => (
              <div key={index}>
                <button
                  type="button"
                  className={`${
                    mark === selectedMarks ? "bg-blue-200" : "bg-blue-50"
                  } rounded border w-full border-blue-200 font-semibold px-1 cursor-pointer outline-0`}
                  onClick={() => handleClick(mark)}
                >
                  {mark}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-sm">
            Select question to view marks
          </div>
        )}
      </div>
    </>
  );
};

export default Marks;
