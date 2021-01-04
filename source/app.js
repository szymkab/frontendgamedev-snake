import "./polyfills";

import { Stage, Graphics, Shape, Ticker, Text } from "@createjs/EaselJS";

import { createDOMStage, getDOMStage, handleResize } from "@/utils";

import { CONFIG } from "@/config";

import "./styles.css";
import { World } from "./objects/World";

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

    new World(stage);

    handleResize(canvas, stage);
    window.onresize = () => handleResize(canvas, stage);
  };
};

init();
