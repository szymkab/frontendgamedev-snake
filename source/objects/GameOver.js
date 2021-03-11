import { Container, Graphics, Shape, Text } from "@createjs/EaselJS";
import { CONFIG } from "@/config";

export class GameOver {
  constructor(stage, changeScene) {
    this.stage = stage;
    this.changeScene = changeScene;

    this.container = new Container();

    this.renderTitle();
    this.renderPlayButton();
  }

  renderTitle() {
    const text = new Text("Game Over", "100px Helvetica", "#336339");
    const bounds = text.getBounds();
    text.regX = bounds.width / 2;
    text.regY = bounds.height / 2;
    text.x = CONFIG.canvasWidth / 2;
    text.y = 200;
    this.container.addChild(text);
  }

  renderPlayButton() {
    const graphics = new Graphics()
      .beginFill("#333")
      .setStrokeStyle(1)
      .beginStroke("#000000")
      .drawRoundRect(CONFIG.canvasWidth / 2 - 375, CONFIG.canvasHeight / 2 - 100, 750, 200, 50);
    const clickToPlayButton = new Shape(graphics);
    clickToPlayButton.addEventListener("click", () => this.changeScene("WORLD"));

    const clickToPlayText = new Text("Click to play again", "72px Helvetica", "#eee");
    clickToPlayText.regX = clickToPlayText.getBounds().width / 2;
    clickToPlayText.regY = clickToPlayText.getBounds().height / 2;
    clickToPlayText.x = CONFIG.canvasWidth / 2;
    clickToPlayText.y = CONFIG.canvasHeight / 2;

    this.container.addChild(clickToPlayButton, clickToPlayText);
  }
}
