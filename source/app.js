import "./polyfills";

import { Stage, Graphics, Shape, Ticker, Text } from "@createjs/EaselJS";

import { createDOMStage, getDOMStage, handleResize } from "@/utils";

import { CONFIG } from "@/config";

import "./styles.css";

const init = () => {
  const body = document.getElementsByTagName("body")[0];
  const canvas = createDOMStage();
  body.append(canvas);

  window.onload = () => {
    Ticker.framerate = CONFIG.framerate;
    Ticker.on("tick", () => {
      stage.update();
    });

    const canvas = getDOMStage();
    const stage = new Stage(canvas);

    const graphics = new Graphics()
      .beginFill("#EBE97A")
      .drawRect(CONFIG.canvasWidth / 2, CONFIG.canvasHeight / 2, 380, 100);
    const shape = new Shape(graphics);
    shape.regX = 190;
    shape.regY = 50;

    const welcomeText = new Text("CreateJS Boilerplate", "26px Courier", "#EB4646");
    welcomeText.regX = welcomeText.getBounds().width / 2;
    welcomeText.regY = welcomeText.getBounds().height / 2;
    welcomeText.x = CONFIG.canvasWidth / 2;
    welcomeText.y = CONFIG.canvasHeight / 2;

    stage.addChild(shape, welcomeText);

    handleResize(canvas, stage);
    window.onresize = () => handleResize(canvas, stage);
  };
};

init();
