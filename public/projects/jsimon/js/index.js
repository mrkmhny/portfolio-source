// used to reference buttons later
const BUTTONS = ["#r","#g","#b","#y"];
const BUTTON_NUM = {r:1,g:2,b:3,y:4};

// state is used to lock the UI during playback
var state;

//default mode is non-strict
var mode = "easy";

// length needed to beat game
var win = 20;

// initializing sequence
var seq =[];
var seqTry = [];


// f-- used to initialize these variables easily later
function init() {
  seq = [];
  seqTry = [];
}

// f-- add to existing sequence
function growSeq(){
  // adds a rand button from buttons
  seq.push(BUTTONS[Math.floor(Math.random()*4)]);
  
  // update counter on DOM
  if (seq.length<=win){
    $('#counter').html('Counter: ' + seq.length);
  }
}

// plays sequence on the screen
function playSeq() {
  
  // playback state prevents user input during playback
  state = "playback";
    
  var i=0;
  var time = 500 - seq.length*10;
  var playback = setInterval(function(){
    
      // raise all buttons as fallback
      buttonUp('button');
    
      // timeouts are used to specify press length
      setTimeout(function(){
        // press current button
        buttonDown($(seq[i]));
      },time*.3);
    
      setTimeout(function(){
        // raise current button
        buttonUp('button');
        // next item in seq
        i++;
      },time*.6);
    
    // check and stop when at end of seq
    if (i == seq.length) {
      clearInterval(playback);
      state = "waiting";
    }
  },time);
}

// see if input matches current sequence
function checkSeq() {
  
  // what happens if wrong input?
  if (seqTry[seqTry.length-1] != seq[seqTry.length-1]){
    
    $('#counter').html('WRONG');
    state = "playback";
    
    // if strict mode, initiatize sequence
    if (mode == "strict"){
        init();
        return;
    }
    
    // ...otherwise, wait a sec, then play again
    else {
      setTimeout(function(){
        $('#counter').html('Counter: ' + seq.length);
        seqTry = [];
        playSeq();
      },1000); 
    }
      
  }
  // if reach the end of the correct sequence
  else if (seqTry.length == seq.length) {
    
    // grow the sequence
    growSeq();
    
    // stop if victory
    if (seq.length > win){
      $('#counter').html('YOU WIN!');
    }
    else {
      playSeq();
      seqTry = [];
    }
  }
}

// triggers buttons, takes arg c for color id
$(document).ready(function(){
  $('#counter').html('Click Restart to Play');
  // start game when restart button click
  $('#restart').mousedown(function(){
    init();
    growSeq();
    playSeq();
  })
  
  $('#mode').on('click', function() {
        if (mode=="easy") {
            mode = 'strict';
            $('#mode').html("Mode: Strict")
        } else {
            mode = 'easy';
            $('#mode').html("Mode: Easy")
        }
    });
  
  
  // press button
  $('button').mousedown(function(){
    if(state != "playback" && $(this).hasClass("color")){
 
      buttonDown(this);
      // add button press to seqTry
      seqTry.push("#"+$(this).attr("id"));
      // check if it matches seq
      checkSeq();
    }
    
  });

  $('button').mouseup(function(){
    buttonUp(this);
  });
})

function buttonDown(c){
  $(c).addClass("pressed"); 
  var beep = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound'+BUTTON_NUM[$(c).attr('id')]+'.mp3');
  beep.play();
}

function buttonUp(c){
  $(c).removeClass("pressed");
  
}