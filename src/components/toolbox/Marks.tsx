import React from "react";

interface MarksProps {
  selectedMarks: number | null;
  setSelectedMarks: (value: number | null) => void;
}

const Marks: React.FC<MarksProps> = ({ selectedMarks, setSelectedMarks }) => {
  const maxMark = 10;
  const marks = [];

  for (let i = 0; i <= maxMark; i += 0.5) {
    marks.push(i);
  }

  const handleClick = (val: number) => {
    setSelectedMarks(val);
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold text-center">Marks</div>
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
      </div>
    </>
  );
};

export default Marks;
