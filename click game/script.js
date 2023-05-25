let score = 0;
let object = document.querySelector("#object");


function start_game() {
  object.classList.toggle("start");
  score = 0;
  document.title = "Score: 0";

  setInterval(function () {

        console.log("Delayed for 10 second.");
        setIntervalVal();


    }, 100);

}

function setIntervalVal(){

    const myEl = document.getElementById('object');
    var objectTransform = window.getComputedStyle(myEl).transform;

    // returns 'matrix(1, 0, 0, 1, 0, -60)'
    var topVal = objectTransform.replace(/[^\d.]/g, '').replace('10010','');

    console.log("top val: "+ topVal );

    if(topVal > 385){
        score--;
        document.title = `Score: ${score}`;

        if (score <= 0) {
             finish_game();
        }
        
        writeResult();
    }

}

function finish_game() {
  
    writeResult();
    object.classList.toggle("start");
    alert('You lose. Score:  ' +score);

}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    document.title = `Score: ${score}`;

    if (score <= 0) {
      finish_game();
    }
    console.log(score);
    writeResult();
  }
}

function hit() {
    
  var audio = document.getElementById("audio");
  audio.play();


  score++;
  document.title = `Score: ${score}`;
 
  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let random_offset = Math.floor(Math.random() * 340);
  object.style.left = `${random_offset}px`;

  writeResult();

}


function writeResult(){

    var result = document.getElementById("result");
    result.innerHTML = 'score: ' + score;
}