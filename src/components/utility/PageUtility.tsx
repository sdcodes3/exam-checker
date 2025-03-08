import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import React, { useState } from "react";

const PageUtility: React.FC = () => {
  const totalPage = 29;
  const [curPage, setCurPage] = useState<number>(0);
  return (
    <>
      <div className="flex gap-3 items-center flex-wrap">
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={curPage}
            className="w-[3rem] border border-gray-400 text-center rounded"
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val < 1) setCurPage(1);
              else if (val > totalPage) setCurPage(totalPage);
              else setCurPage(val);
            }}
          />
          <input
            type="text"
            className="w-[3rem] border border-gray-400 text-center rounded bg-gray-200"
            disabled
            value={totalPage}
          />
          <button
            type="button"
            className="hover:bg-green-300 bg-green-200 p-2 rounded-full border-green-300 border cursor-pointer"
          >
            <ArrowLeft className="size-5" />
          </button>

          <button
            type="button"
            className="hover:bg-green-300 bg-green-200 p-2 rounded-full border-green-300 border cursor-pointer"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="hover:bg-blue-300 bg-blue-200 border border-blue-400 rounded-full p-2 flex items-center cursor-pointer"
          >
            <ZoomIn className="size-5" />
          </button>
          <button
            type="button"
            className="hover:bg-blue-300 bg-blue-200 border border-blue-400 rounded-full p-2 flex items-center cursor-pointer"
          >
            <ZoomOut className="size-5" />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="hover:bg-red-300 bg-red-200 border border-red-400 rounded-full p-2 flex items-center cursor-pointer"
          >
            <RotateCcw className="size-5" />
          </button>
          <button
            type="button"
            className="hover:bg-red-300 bg-red-200 border border-red-400 rounded-full p-2 flex items-center cursor-pointer"
          >
            <RotateCw className="size-5" />
          </button>
        </div>
        <div className="ms-auto">
          <button className="hover:bg-blue-300 bg-blue-200 p-2 px-4 rounded-md font-semibold cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default PageUtility;
