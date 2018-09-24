//create variables/grab html elements
var keys = document.querySelectorAll(".key");
var notes ={
    cKey: document.querySelector("#cAudio"),
    dKey: document.querySelector("#dAudio"),
    eKey: document.querySelector("#eAudio"),
    fKey: document.querySelector("#fAudio"),
    gKey: document.querySelector("#gAudio"),
    aKey: document.querySelector("#aAudio"),
    bKey: document.querySelector("#bAudio"),
}

//define funtions
function playNote(key){
    //console.log(key);
 notes[key].currentTime=0;
 notes[key].play();
}

//call funtions and/or add event listeners
keys.forEach(function(key) {
    key.addEventListener("click",function(){
        

        playNote(key.id);
    })
})
document.addEventListener("keydown", function(event){
    console.log(event);
    if(event.keyCode == 67){
        playNote("cKey");
       
    }
    if(event.keyCode == 65){
        playNote("aKey");
       
    }
    if(event.keyCode == 66){
        playNote("bKey");
       
    }
    if(event.keyCode == 68){
        playNote("dKey");
       
    }
    if(event.keyCode == 69){
        playNote("eKey");
       
    }
    if(event.keyCode == 72){
        playNote("h Key");
       
    }
    if(event.keyCode == 73){
        playNote("iKey");
       
    }
    if(event.keyCode == 70){
        playNote("fKey");
       
    }
    if(event.keyCode == 71){
        playNote("gKey");
       
    }
})