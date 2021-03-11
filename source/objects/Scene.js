import { MainMenu } from "./MainMenu";
import { World } from "./World";
import { GameOver } from "./GameOver";

export class Scene {
  constructor(stage) {
    this.stage = stage;

    this.mainMenu = new MainMenu(stage, this.changeScene.bind(this));
    this.gameOver = new GameOver(stage, this.changeScene.bind(this));

    this.stage.addChild(this.mainMenu.container);
  }

  changeScene(scene) {
    this.stage.removeAllChildren();
    if (scene === "WORLD") {
      this.world = new World(this.stage, this.changeScene.bind(this));
      this.stage.addChild(this.world.container);
    } else if (scene === "MAIN_MENU") {
      this.stage.addChild(this.mainMenu.container);
    } else if (scene === "GAME_OVER") {
      this.stage.addChild(this.gameOver.container);
    }
  }
}
