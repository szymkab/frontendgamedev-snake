import "./polyfills";

import { Stage, Ticker } from "@createjs/EaselJS";

import { createDOMStage, getDOMStage, handleResize } from "@/utils";

import { CONFIG } from "@/config";

import { Scene } from "@/objects/Scene";

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

    new Scene(stage);

    handleResize(canvas, stage);
    window.onresize = () => handleResize(canvas, stage);
  };
};

init();
