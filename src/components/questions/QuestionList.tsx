import React, { useState } from "react";
interface QuestionInterface {
  subQuestion: string;
  maxMarks: number;
  examMarks: number;
  checked: boolean;
}

interface QuestionListProps {
  selectedQuestion: string | null;
  setSelectedQuestion: (value: string | null) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({
  selectedQuestion,
  setSelectedQuestion,
}) => {
  const maxMark = 10;
  const subQuestions = ["1(a)", "1(b)", "2(a)", "2(b)", "3(a)", "3(b)"]; // Example sub-questions

  // Generate mark entries
  const [questionList, setQuestionList] = useState<QuestionInterface[]>(
    subQuestions.map((sub, index) => ({
      subQuestion: sub,
      maxMarks: maxMark,
      examMarks: index * 1.5, // Example marks (Modify as needed)
      checked: false,
    }))
  );
  const toggleCheck = (index: number) => {
    setQuestionList((prevQuestion) =>
      prevQuestion.map((question, i) =>
        i === index ? { ...question, checked: !question.checked } : question
      )
    );
  };
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
              <td className="text-center font-semibold border border-gray-300 p-1 bg-gray-300">
                Checked
              </td>
            </tr>
          </thead>
          <tbody>
            {questionList.map((question, index) => (
              <tr
                key={index}
                onClick={() => {
                  setSelectedQuestion(question.subQuestion);
                }}
                className="cursor-pointer"
              >
                <td
                  className={`${
                    selectedQuestion === question.subQuestion ? "bg-gray-200" : ""
                  } text-center border border-gray-300 text-gray-700 p-1`}
                >
                  {question.subQuestion}
                </td>
                <td
                  className={`${
                    selectedQuestion === question.subQuestion ? "bg-gray-200" : ""
                  } text-center border border-gray-300 text-gray-700 p-1`}
                >
                  {question.maxMarks}
                </td>
                <td
                  className={`${
                    selectedQuestion === question.subQuestion ? "bg-gray-200" : ""
                  } text-center border border-gray-300 text-gray-700 p-1`}
                >
                  {question.examMarks}
                </td>
                <td
                  className={`${
                    selectedQuestion === question.subQuestion ? "bg-gray-200" : ""
                  } text-center border border-gray-300 text-gray-700 p-1`}
                >
                  <input
                    type="checkbox"
                    checked={question.checked}
                    onChange={() => toggleCheck(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuestionList;
