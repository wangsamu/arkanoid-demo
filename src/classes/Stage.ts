import stage00wall from "../img/stages/stage00wall.png";
import stage00floor from "../img/stages/stage00floor.png";

class Stage {
  wallSprite = new Image();
  floorSprite = new Image();
  wallWidthLeft: number = 0;
  wallWidthRight: number = 0;
  roofHeight: number = 0;
  stage;
  leftWallDestPos: number = 0;
  rightWallDestPos: number = 0;
  roofDestPos: number = 0;
  wallPositionLeft: number = -152;
  wallPositionRight: number = 312;
  roofPosition: number = -232;
  roofDifference: number = 32;
  constructor(stage: number) {
    this.stage = stage;
    this.wallSprite.src = stage00wall;
    this.floorSprite.src = stage00floor;
  }

  getWallWidth(mobPosX: number) {
    this.wallWidthLeft = Math.abs(mobPosX - 0) - 16;
    this.wallWidthRight = Math.abs(mobPosX - 0) - 16;
    this.leftWallDestPos = this.wallWidthLeft;
    this.rightWallDestPos = this.wallSprite.width - this.wallWidthRight;
  }

  getRoofHeight(mobPosY: number) {
    this.roofHeight = mobPosY - 4;
    this.roofDestPos = this.roofHeight;
  }

  drawStage(context: CanvasRenderingContext2D) {
    //left wall
    context.drawImage(
      this.wallSprite,
      this.wallPositionLeft,
      0,
      this.wallSprite.width,
      this.wallSprite.height
    );
    //right wall
    context.drawImage(
      this.wallSprite,
      this.wallPositionRight,
      0,
      this.wallSprite.width,
      this.wallSprite.height
    );
    //roof
    context.drawImage(
      this.wallSprite,
      0,
      this.roofPosition + this.roofDifference,
      this.wallSprite.width,
      this.wallSprite.height
    );
    context.drawImage(
      this.wallSprite,
      0 + this.wallSprite.width,
      this.roofPosition + this.roofDifference,
      this.wallSprite.width,
      this.wallSprite.height
    );
    //floor
    context.drawImage(
      this.floorSprite,
      0,
      240 - this.floorSprite.height,
      this.floorSprite.width,
      this.floorSprite.height
    );

    context.stroke();
  }
}

export default Stage;
