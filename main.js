var prediction = "";
Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});
Camera = document.getElementById("Camera");
Webcam.attach("#Camera");

function Capture_Img(){
    Webcam.snap(function (datauri) {
        document.getElementById("Result").innerHTML = '<img id = "Snapshot" src = "' + datauri + '"/>';
    });
}
console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0il3_FCiC/model.json");

function Identify_Img() {
    Img = document.getElementById("Snapshot");
    classifier.classify(Img, getResult);
}
function Speak() {
    var Synth = window.speechSynthesis;
    speak_data = "The prediction is " + prediction;
    
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    synth.Speak(UtterThis);
}
function gotResult(error,result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("Hand_Gesture_Ans").innerHTML = result[0].label;
        Speak();
        if(results[0].label == "Amazing"){
            document.getElementById("Hand_Gesture_Ans").innerHTML = "&#128076;";
        }
        if(results[0].label == "Best"){
            document.getElementById("Hand_Gesture_Ans").innerHTML = "&#128077;";
        }
        if(results[0].label == "Victory"){
            document.getElementById("Hand_Gesture_Ans").innerHTML = "&#x270c;";
        }
    }
}