import React from "react";
import { Question } from "../../types/types";

interface QuestionListProps {
  selectedQuestion: Question | null;
  setSelectedQuestion: (value: Question | null) => void;
  questions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({
  selectedQuestion,
  setSelectedQuestion,
  questions,
}) => {
  const totalMaxMarks = questions.reduce(
    (sum, item) => sum + item.max_marks,
    0
  );
  const totalExamMarks = questions.reduce(
    (sum, item) => sum + (item.exam_marks || 0),
    0
  );

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border border-gray-400 table-fixed">
          <thead>
            <tr>
              <td className="text-center font-semibold border border-gray-300 p-1 bg-gray-300">
                Sub Q. No.
              </td>
              <td className="text-center font-semibold border border-gray-300 p-1 bg-gray-300">
                Max. Marks
              </td>
              <td className="text-center font-semibold border border-gray-300 p-1 bg-gray-300">
                Exam Marks
              </td>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr
                key={index}
                onClick={() => {
                  setSelectedQuestion(question);
                }}
                className="cursor-pointer"
              >
                <td
                  className={`${
                    selectedQuestion?.id === question.id ? "bg-gray-200" : ""
                  } text-center border border-gray-300 text-gray-700 p-1`}
                >
                  {question.sub_question}
                </td>
                <td
                  className={`${
                    selectedQuestion?.id === question.id ? "bg-gray-200" : ""
                  } text-center border border-gray-300 text-gray-700 p-1`}
                >
                  {question.max_marks}
                </td>
                <td
                  className={`${
                    selectedQuestion?.id === question.id ? "bg-gray-200" : ""
                  } text-center border border-gray-300 text-gray-700 p-1`}
                >
                  {question.exam_marks !== null ? question.exam_marks : "-"}
                </td>
              </tr>
            ))}
            <tr>
              <th
                className={`bg-gray-100 text-center border border-gray-300 text-gray-700 p-1`}
              >
                Total
              </th>

              <th
                className={`bg-gray-100 text-center border border-gray-300 text-gray-700 p-1`}
              >
                {totalMaxMarks}
              </th>

              <th
                className={`bg-gray-100 text-center border border-gray-300 text-gray-700 p-1`}
              >
                {totalExamMarks}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuestionList;
