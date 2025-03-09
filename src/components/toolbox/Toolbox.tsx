import {
  Check,
  Circle,
  Eraser,
  HelpCircle,
  Minus,
  Slash,
  Square,
  X,
} from "lucide-react";
import React from "react";

interface ToolboxProps {
  selectedShape:
    | "checkmark"
    | "cross"
    | "question"
    | "circle"
    | "horizontal-line"
    | "diagonal-line"
    | "rectangle"
    | null;
  setSelectedShape: (
    value:
      | "checkmark"
      | "cross"
      | "question"
      | "circle"
      | "horizontal-line"
      | "diagonal-line"
      | "rectangle"
      | null
  ) => void;
}

const Toolbox: React.FC<ToolboxProps> = ({
  selectedShape,
  setSelectedShape,
}) => {
  const handleClick = (
    val:
      | "checkmark"
      | "cross"
      | "question"
      | "circle"
      | "horizontal-line"
      | "diagonal-line"
      | "rectangle"
      | null
  ) => {
    setSelectedShape(val);
  };
  const data: {
    id:
      | "checkmark"
      | "cross"
      | "question"
      | "circle"
      | "horizontal-line"
      | "diagonal-line"
      | "rectangle"
      | null;
    symbol: any;
  }[] = [
    {
      id: "checkmark",
      symbol: <Check className="size-4" />,
    },
    {
      id: "cross",
      symbol: <X className="size-4" />,
    },
    {
      id: "question",
      symbol: <HelpCircle className="size-4" />,
    },
    {
      id: "circle",
      symbol: <Circle className="size-4" />,
    },
    {
      id: "horizontal-line",
      symbol: <Minus className="size-4" />,
    },
    {
      id: "diagonal-line",
      symbol: <Slash className="size-4" />,
    },
    {
      id: "rectangle",
      symbol: <Square className="size-4" />,
    },
    {
      id: null,
      symbol: <Eraser className="size-4" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold text-center">Toolbox</div>
        <div className="flex flex-wrap gap-3 justify-evenly">
          {data.map((element, index) => (
            <button
              className={`${
                element.id === selectedShape ? "bg-orange-200" : "bg-orange-50"
              } border border-orange-200 flex items-center justify-center rounded p-2 cursor-pointer outline-0`}
              type="button"
              onClick={() => handleClick(element.id)}
              key={index}
            >
              {element.symbol}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Toolbox;
