import { start } from "./scripts/Game";
import "./styles/main.scss";

start();
document.getElementById("restartButton").addEventListener("click", () => {
  document.getElementById("winnerOverlay").classList.remove("show");
  start();
});
