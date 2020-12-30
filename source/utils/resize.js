import { CONFIG } from "@/config";

export const calculateScale = () =>
  Math.min(window.innerWidth / CONFIG.canvasWidth, window.innerHeight / CONFIG.canvasHeight);

export const handleResize = (canvas, stage) => {
  const scale = calculateScale();

  const width = CONFIG.canvasWidth * scale;
  const height = CONFIG.canvasHeight * scale;

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  stage.scaleX = scale;
  stage.scaleY = scale;
};
