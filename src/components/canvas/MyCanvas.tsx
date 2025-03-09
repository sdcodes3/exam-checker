import React, { useEffect, useRef } from "react";
import image from "./../../assets/one.png";

interface MyCanvasProps {
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

const MyCanvas: React.FC<MyCanvasProps> = ({
  selectedShape,
  setSelectedShape,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load Image
    const img = new Image();
    img.src = image;
    img.onload = () => {
      // Resize canvas to match image dimensions
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, []);

  // Function to draw the selected shape where the user clicks
  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!selectedShape) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Get click position relative to canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Draw the selected shape at the clicked position
    drawShape(ctx, selectedShape, x, y);
    setSelectedShape(null);
  };

  const drawShape = (
    ctx: CanvasRenderingContext2D,
    shape:
      | "checkmark"
      | "cross"
      | "question"
      | "circle"
      | "horizontal-line"
      | "diagonal-line"
      | "rectangle",
    x: number,
    y: number
  ) => {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)";

    if (shape === "checkmark") {
      // Draw a checkmark (✔)
      ctx.beginPath();
      ctx.moveTo(x - 15, y);
      ctx.lineTo(x - 5, y + 10);
      ctx.lineTo(x + 15, y - 10);
      ctx.stroke();
      ctx.closePath();
    } else if (shape === "cross") {
      // Draw a cross (✖)
      ctx.beginPath();
      ctx.moveTo(x - 10, y - 10);
      ctx.lineTo(x + 10, y + 10);
      ctx.moveTo(x + 10, y - 10);
      ctx.lineTo(x - 10, y + 10);
      ctx.stroke();
      ctx.closePath();
    } else if (shape === "question") {
      // Draw a question mark(❓)
      ctx.font = "bold 32px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "red";
      ctx.fillText("?", x, y + 5);
    } else if (shape === "circle") {
      // Draw a circle (⭕)
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
    } else if (shape === "horizontal-line") {
      // Draw a horizontal line (—)
      ctx.beginPath();
      ctx.moveTo(x - 15, y);
      ctx.lineTo(x + 15, y);
      ctx.stroke();
      ctx.closePath();
    } else if (shape === "diagonal-line") {
      // Draw a diagonal line (/)
      ctx.beginPath();
      ctx.moveTo(x - 15, y + 15);
      ctx.lineTo(x + 15, y - 15);
      ctx.stroke();
      ctx.closePath();
    } else if (shape === "rectangle") {
      // Draw a rectangle (▭)
      ctx.strokeRect(x - 15, y - 10, 30, 20);
    }
  };
  // const saveCanvas = () => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const imageURI = canvas.toDataURL("image/png"); // Convert canvas to PNG image

  //   // Create a link to download the image
  //   const link = document.createElement("a");
  //   link.href = imageURI;
  //   link.download = "canvas-drawing.png";
  //   link.click();
  // };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="border border-gray-400 shadow-md cursor-pointer max-w-full"
        onClick={handleCanvasClick}
      />

      {/* Save Button */}
      {/* <button
        onClick={saveCanvas}
        className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md"
      >
        Save Image
      </button> */}
    </div>
  );
};

export default MyCanvas;
