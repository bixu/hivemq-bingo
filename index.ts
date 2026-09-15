import {
  newGame,
  checkTimestamp,
} from "./resources/gamelogic";
import {
  addGenerateNewCard,
  addImageCopy,
  addImageDownload,
} from "./resources/ui";

const hivemqBingoTiles: string | null = localStorage.getItem("hivemqBingoTiles");
const hivemqBingoTime: string | null = localStorage.getItem("hivemqBingoTime");

if (hivemqBingoTime && hivemqBingoTiles) {
  checkTimestamp(hivemqBingoTime);
} else {
  newGame();
}


addImageDownload("download", "outerCard");
addImageCopy("copy", "outerCard");
addGenerateNewCard("generateNewCard");
