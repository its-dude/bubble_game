var timer = 60;
var pbtm = document.querySelector("#pbtm");

function makeBubble() {
    var clutter = ``

    for (let i = 0; i < 200; i++) {
        var no = Math.round(Math.random() * 10);
        clutter += `<div class="bubble">${no}</div>`
    }
    pbtm.innerHTML = clutter;
}

function decreaseTimer() {

    var tInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            clearInterval(tInterval);
            pbtm.innerHTML=`<h3 id="gover">Game Over</h3>
            <button id="play">Play Again</button>`
        }
    }, 1000);

}

let target = Number(document.querySelector("#hit").textContent);
function checkScore() {
    
    let score = Number(document.querySelector("#score").textContent);
    
    pbtm.addEventListener("click", (dets) => {
        if (dets.target.id != "pbtm") {
            let clicked = Number(dets.target.textContent);
            if (target === clicked) {
                score += 10;
                document.querySelector("#score").textContent = score;
            }
        }
        updateTarget();

    });
}

function updateTarget() {
 target=Math.round(Math.random() * 10);
 document.querySelector("#hit").textContent =target;
 makeBubble();
}

makeBubble();
decreaseTimer();
checkScore();