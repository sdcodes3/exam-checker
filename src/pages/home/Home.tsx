import React, { useEffect, useState } from "react";

// components import
import Toolbox from "../../components/toolbox/Toolbox";
import Marks from "../../components/toolbox/Marks";
import QuestionWraper from "../../components/questions/QuestionWraper";
import PageUtility from "../../components/utility/PageUtility";
import MyCanvas from "../../components/canvas/MyCanvas";
import api from "../../api/api";
import { Paper, Question } from "../../types/types";
import Loader from "../../components/loader/Loader";

interface HomeProps {
  selectedPaper: Paper;
}

const Home: React.FC<HomeProps> = ({ selectedPaper }) => {
  const [selectedShape, setSelectedShape] = useState<
    | "checkmark"
    | "cross"
    | "question"
    | "circle"
    | "horizontal-line"
    | "diagonal-line"
    | "rectangle"
    | "clear"
    | null
  >(null);
  const [selectedMarks, setSelectedMarks] = useState<number | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const [questions, setQuestions] = useState<Question[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(`/questions/paper/${selectedPaper.id}`);

      const data: Question[] = response.data;

      const formattedData: Question[] = data.map((item) => ({
        id: item.id,
        paper_id: item.paper_id,
        exam_marks: null,
        max_marks: item.max_marks,
        sub_question: item.sub_question,
      }));

      setQuestions(formattedData);
    } catch (error) {
      console.error("Error in fetching Questions : ", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="bg-gray-200">
        <div className="flex flex-col h-screen p-2">
          <div className="flex flex-col lg:flex-row gap-3 overflow-y-auto mb-2">
            <div className="w-full lg:w-[60%] min-h-fit lg:min-h-auto overflow-y-auto">
              <MyCanvas
                selectedShape={selectedShape}
                setSelectedShape={setSelectedShape}
                selectedMarks={selectedMarks}
                setSelectedMarks={setSelectedMarks}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
                questions={questions}
                setQuestions={setQuestions}
              />
            </div>
            <div className="flex lg:flex-col w-full lg:w-[10%] gap-3">
              <div className="w-full rounded shadow-md bg-white p-2">
                <Toolbox
                  selectedShape={selectedShape}
                  setSelectedShape={setSelectedShape}
                  setSelectedMarks={setSelectedMarks}
                />
              </div>
              <div className="w-full rounded shadow-md bg-white p-2">
                <Marks
                  selectedMarks={selectedMarks}
                  setSelectedMarks={setSelectedMarks}
                  setSelectedShape={setSelectedShape}
                  selectedQuestion={selectedQuestion}
                />
              </div>
            </div>
            <div className="w-full lg:w-[30%]">
              <div className="bg-white p-2 rounded shadow-md">
                <QuestionWraper
                  selectedQuestion={selectedQuestion}
                  setSelectedQuestion={setSelectedQuestion}
                  questions={questions}
                />
              </div>
            </div>
          </div>

          <div className="mt-auto bg-white rounded p-2 shadow-md">
            <PageUtility />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
