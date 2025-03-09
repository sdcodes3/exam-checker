import React, { useState } from "react";

// components import
import Toolbox from "../../components/toolbox/Toolbox";
import Marks from "../../components/toolbox/Marks";
import QuestionWraper from "../../components/questions/QuestionWraper";
import PageUtility from "../../components/utility/PageUtility";
import MyCanvas from "../../components/canvas/MyCanvas";

const Home: React.FC = () => {
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
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  // console.log("home page: ", selectedShape, selectedMarks, selectedQuestion)
  return (
    <>
      <div className="bg-gray-200">
        <div className="flex flex-col h-screen p-2">
          <div className="flex flex-col lg:flex-row gap-3 overflow-y-auto mb-2">
            <div className="w-full lg:w-[60%] min-h-screen lg:min-h-auto overflow-y-auto">
              <MyCanvas
                selectedShape={selectedShape}
                setSelectedShape={setSelectedShape}
                
                selectedMarks={selectedMarks}
                setSelectedMarks={setSelectedMarks}
                
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
              />
              {/* <img src={page} alt="paper page" className="w-full" /> */}
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
                />
              </div>
            </div>
            <div className="w-full lg:w-[30%]">
              <div className="bg-white p-2 rounded shadow-md">
                <QuestionWraper
                  selectedQuestion={selectedQuestion}
                  setSelectedQuestion={setSelectedQuestion}
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
