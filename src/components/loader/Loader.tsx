import React from "react";

interface LoaderProps {
  msg?: string;
}

const Loader: React.FC<LoaderProps> = ({ msg = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-md z-50">
      <div className="p-4 flex items-center gap-4 text-gray-600">
        <div className="w-8 h-8 border-4 border-white-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="text-xl font-semibold">{msg}</div>
      </div>
    </div>
  );
};

export default Loader;
