import { useEffect, useRef } from "react";

const MyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageSrc = "/your-image.jpg"; // Replace with your image path

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load Image
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      // Resize canvas to match image dimensions
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Draw Shapes on Image
      drawShapes(ctx);
    };
  }, []);

  const drawShapes = (ctx: CanvasRenderingContext2D) => {
    // 🔵 Draw a Circle
    ctx.beginPath();
    ctx.arc(150, 100, 40, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"; // Transparent Red
    ctx.fill();
    ctx.closePath();

    // 🟩 Draw a Rectangle
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)"; // Transparent Green
    ctx.fillRect(200, 200, 100, 50);

    // 📏 Draw a Line
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(250, 250);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
  };

  return (
    <div className="flex justify-center items-center p-5">
      <canvas ref={canvasRef} className="border border-gray-400 shadow-md" />
    </div>
  );
};

export default MyCanvas;
