//Adding some variables
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
//Wow just 2 vars this time :D

//Function startrec for when Start clicked
function start(){
    document.getElementById("textBox").innerHTML = "";
    recognition.start();
}

//On result
recognition.onresult = function run(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textBox").innerHTML = content;
}