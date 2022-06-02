const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")
let gameOver = false

document.addEventListener("keypress", start)
document.addEventListener("touchstart", start)

function start(event) {
    if (gameOver == false) {
      if (event.key == " " || event.pointerType == 'touch') {
        jump()
        run()
      }
    } else {
      location.reload()
    }
}

const loop = setInterval(() => {
  const jumped = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  ).toFixed()
  if (jumped < 70 && pipe.offsetLeft < 125) {
    console.log("game-over")
    gameover(clouds.offsetLeft, pipe.offsetLeft)
    clearInterval(loop)
  } else {
    console.log("pulou")
  }
}, 50)

function gameover(cloudPosition, pipePosition) {
  clouds.style.animation = "none"
  clouds.style.left = `${cloudPosition / 10}rem`

  pipe.style.animation = "none"
  pipe.style.left = `${pipePosition / 10}rem`

  mario.src = "assets/game-over.png"

  gameOver = true
}
const jump = () => {
  mario.classList.add("jump")
}
const run = () =>
  setTimeout(() => {
    mario.classList.remove("jump")
  }, 1000)
