let gamePattern = [];
let isPlaying = false;
let userPattern = [];
let gameLevel = 0;

const randomNumberGenerator = () => {
  let num = Math.floor(Math.random() * 4);
  gamePattern.push(num);
  gamePatternPress();
};

function gamePatternPress() {
  gamePattern.map((euta, index) => {
    setTimeout(() => {
      pressed(euta);
      sound(euta);
    }, 500 * index);
  });
}

const pressed = (num) => {
  document.querySelectorAll(".btn")[num].classList.add("pressed");
  setTimeout(() => {
    document.querySelectorAll(".btn")[num].classList.remove("pressed");
  }, 200);
};

document.addEventListener("keydown", function (event) {
  if (event.key == "A" || (event.key == "a" && isPlaying == false)) {
    randomNumberGenerator();
    isPlaying = true;
    gameLevel=0;
    document.querySelector("#level-title").innerText = "Level- " + gameLevel;
    if(document.querySelector("body").classList.contains("game-over")){
      document.querySelector("body").classList.remove("game-over")
    }
  }
});
let btn = document.querySelectorAll(".btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let key = this.id;
    switch (key) {
      case "green":
        sound(0)
        userPattern.push(0);
        checkPattern();
        pressed(0);
        break;

      case "red":
        sound(1)
        userPattern.push(1);
        checkPattern();
        pressed(1);
        break;

      case "yellow":
        sound(2)
        userPattern.push(2);
        checkPattern();
        pressed(2);
        break;

      case "blue":
        sound(3)
        userPattern.push(3);
        checkPattern();
        pressed(3);
        break;

      default:
        "key";
    }
  });
}

function checkPattern() {

  let gamePatternLen = gamePattern.length;

  userPattern.map((euta, index) => {
    if (euta == gamePattern[index] && index == gamePatternLen - 1) {
      userPattern.length = 0;
      gameLevel++;
      document.getElementById("level-title").innerText = "Level- " + gameLevel;
      setTimeout(() => {
        randomNumberGenerator();
      }, 500);
    } else if (euta != gamePattern[index]) {
      let gameOver= new Audio("./sounds/wrong.mp3")
      let level=document.createElement("p");
      level.innerText="level: "+gameLevel
      isPlaying=false
      gamePattern.length=0;
      userPattern.length=0;
      gameOver.play()
      document.getElementById("level-title").innerText="Game over"
      document.getElementById("level-title").appendChild(level)
      document.querySelector("body").classList.add("game-over")
    }
  });
}


function sound(kun){
  switch(kun){
    case 0:
      let green= new Audio("./sounds/green.mp3")
      green.play()
      break;
 case 1:
  
      let red= new Audio("./sounds/red.mp3")
      red.play()
      break;
 case 3:
  
      let blue= new Audio("./sounds/blue.mp3")
      blue.play()
      break;
 case 2:
  
      let yellow= new Audio("./sounds/yellow.mp3")
      yellow.play()
      break;

    default:
      break
  }
}