let cells = document.querySelectorAll('.row > div');
let player = "X"
let moves = O
let gameover = false


for (let i = O; i < cells.length; i++) {

cells[i].addEventListener(click, cellclicked)

Function cellclicked(e) {
    EventTarget .textcontent = player
    toggleplayer ()

Function toggleplayer() {
if (player === "X") {
player="O"
} else {
    player = "X"

 Function cellclicked(e) {
     turns++
     console.log(turns)
     EventTarget.textcontent= player
     toggleplayer
 }   
Function wincheck()
if cells [0] .textContent === player) {
    if cells [1] .textContent &&cells [2]
    .textcontent === player
    gameover= true
    console.log(player+"wins")
}
}  
}
