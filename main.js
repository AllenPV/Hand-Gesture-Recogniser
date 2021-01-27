Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});
Camera = document.getElementById("Camera");
Webcam.attach("#Camera");

function Capture_Img() {
    Webcam.snap(function (datauri) {
        document.getElementById("Result").innerHTML = '<img id = "Snapshot" src = "' + datauri + '"/>';
    });
}
console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/gYCxE3gMb/model.json");