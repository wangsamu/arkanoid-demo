import { useState } from "react";
import Mob from "../../classes/Mob";
import Player from "../../classes/Player";
import Stage from "../../classes/Stage";
import Game from "../Game/Game";

const GameData = (): JSX.Element => {
  const [loadedAssets, setLoadedAssets] = useState(false);
  const player = new Player();
  const stage = new Stage(0);
  const mob = new Mob(2);

  mob.sprite.onload = () => {
    setLoadedAssets(true);
  };

  return (
    <>
      {loadedAssets ? <Game player={player} stage={stage} mob={mob} /> : null}
    </>
  );
};

export default GameData;
