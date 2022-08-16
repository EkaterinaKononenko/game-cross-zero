let area = document.getElementById("area");
let cell = document.getElementsByClassName("cell");

for (let i = 1; i <= 9; i += 1) {
  area.innerHTML += "div class='cell' pos=" + i + "></div>";
}
