export const createDOMStage = () => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "stage");
  return canvas;
};

export const getDOMStage = () => document.getElementById("stage");
