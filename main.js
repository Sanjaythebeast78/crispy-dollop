var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition();

function startbtn()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;


    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="selfie")
    {
        console.log("take selfie ---");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;


    speak_data="Take my selfie in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
    Webcam.attach(camrea);

    setTimeout(function()
    {
        img_id="selfie_image1"
        take_snapshot();
        save();
    },5000);

    setTimeout(function()
    {
        img_id="selfie_image2"
        take_snapshot();
        save();
    },10000);

    setTimeout(function()
    {
        img_id="selfie_image3"
        take_snapshot();
        save();
    },15000);
}


Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camrea=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri) {
    if(img_id=="selfie_image1"){
        document.getElementById("image1").innerHTML = "<img id='selfie_image1' src="+data_uri+">";
    }
    if(img_id=="selfie_image2"){
        document.getElementById("image2").innerHTML = "<img id='selfie_image2' src="+data_uri+">";
    }
    if(img_id=="selfie_image3"){
        document.getElementById("image3").innerHTML = "<img id='selfie_image3' src="+data_uri+">";
    }
    });
}

function save()
{
    link=document.getElementById("link");
    image= document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}