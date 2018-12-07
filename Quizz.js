tabquizz=[
    {"Question":"Qui est la premiere victime de mickel mayers ?",

        "indexBonneReponse" : 3},


    {"Question":"qui  est la survivante de Halloween, La Nuit des masques ?",
        "indexBonneReponse" : 2},


    {"Question":"Comment se nomme la mere de jason voorhees ?",
        "indexBonneReponse" : 1},


    {"Question":"Quelle est l'arme favorite de jason ?",
        "indexBonneReponse" : 2},


    {"Question":"Comment freddy attaque t-il ses victimes ?  ",
        "indexBonneReponse" : 2},


    {"Question":"Quelle est la cause de l'apparition de freddy ?",
        "indexBonneReponse" : 1},


    {"Question":"quel tueur se retrouve dans un film avec freddy ?",
        "indexBonneReponse" : 2},


    {"Question":"Qui tue jason vorhees ?",
        "indexBonneReponse" : 1},


    {"Question":"Quel est le premier masque de jason voorhees ?",
        "indexBonneReponse" : 2},

    {"Question":"Quelle est la phobie de jason voorhees ?",
        "indexBonneReponse" : 1},


];
tabreponse=[
    //reponse Question 1
    {



        "reponse": "Son frere",
        "reponse2": "sa mere",
        "reponse3": "sa soeur",
    "corect":"sa soeur"},
        //reponse Question2
    {"reponse": "laura strode",
        "reponse2": "laurie strode",
        "reponse3": "judith mayers",
        "corect":"laurie strode"},
        //reponse Qustion3
    {"reponse": "Pamela",
        "reponse2": "andrea",
        "reponse3": "alexandra",
        "corect":"Pamela"},
        //reponse Question4
    {"reponse":"une batte de baseball",
        "reponse2":"une machette",
        "reponse3":"un tournevisse",
        "corect":"une machette"},
        //reponse Question5
    {"reponse":"par derriere",
        "reponse2":"Dans ton sommeil",
        "reponse3":"dans tes pensees",
        "corect":"Dans ton sommeil"},
        //reponse Question6
    {"reponse":"Que l'on pense à lui ",
        "reponse2":"que l'on prononce son nom",
        "reponse3":"les Deux",
        "corect":"que l'on pense à lui"},
        //reponse Question7
    {"reponse":"mayckel mayers",
        "reponse2":"jason voorhees",
        "reponse3":"jim carrey",
        "corect":"jason voorhees"},
        //reponse Question8
    {"reponse":" Tommy Jarvis",
        "reponse2":"Tomme Jarvis",
        "reponse3":"jimmy Jarvis",
        "corect":"Tommy Jarvis"},
        //reponse Question9
    {"reponse":"un masque de hockey",
        "reponse2":"un sac à patates",
        "reponse3":"un masque de clown",
        "corect":"un sac a patate"},
        //reponse Question10
    {"reponse":"l'eau",
        "reponse2":"le feu",
        "reponse3":"l'orage",
        "corect":"l'eau"},






];
let snd = new Audio();
snd.src = "michael-myers-theme-song.mp3";

snd.loop = 0;

snd.volume = 1;
var t=0;
var choix;
var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 20;
document.getElementById("boutton").style.display="none";
if($("#reponse1").css({"backgroundColor":""}) && $("#reponse2").css({"backgroundColor":""}) && $("#reponse3").css({"backgroundColor":""})){
    document.getElementById("but").disabled=true;
}




$("#question").html(tabquizz[t].Question);
$("#reponse1 ,#reponse2,#reponse3").click(function () {







    if($("#reponse1").css({"backgroundColor":"lightsalmon"}) || $("#reponse2").css({"backgroundColor":"lightsalmon"}) || $("#reponse3").css({"backgroundColor":"lightsalmon"})){
        document.getElementById("but").disabled=false;
    }


    if(this.id == "reponse1")
    {
        choix = 1;
    }

    if(this.id == "reponse2")
    {
        choix = 2;
    }


    if(this.id == "reponse3")
    {
        choix = 3;
    }


if($("#reponse1").css({"backgroundColor":"lightsalmon"})&&$("#reponse2").css({"backgroundColor":""})){

    document.getElementById("reponse1").style.backgroundColor=""
}
    if($("#reponse2").css({"backgroundColor":"lightsalmon"})&&$("#reponse1").css({"backgroundColor":""})){
        document.getElementById("reponse2").style.backgroundColor=""
    }
    if($("#reponse3").css({"backgroundColor":"lightsalmon"})&&$("#reponse1").css({"backgroundColor":""})){
        document.getElementById("reponse3").style.backgroundColor=""
    }


    $(this).css({
        "backgroundColor":"lightsalmon"
    })

});

var score=0;

var nombreQuestion=0;
$("#reponse1").html(tabreponse[t].reponse);
$("#reponse2").html(tabreponse[t].reponse2);
$("#reponse3").html(tabreponse[t].reponse3);
setInterval(function() {
    countdown = --countdown;

    countdownNumberEl.textContent = countdown;
    if(countdown<=10){
        snd.play();
    }
    if(countdown>10){
        snd.pause();

    }
    if(countdown==0 ){
        nombreQuestion++;
        t++;
        $("#reponse2").html(tabreponse[t].reponse2);
        $("#reponse1").html(tabreponse[t].reponse);
        $("#reponse3").html(tabreponse[t].reponse3);

        $("#question").html(tabquizz[t].Question);

countdown=20;



        $("#tt").append("pour la question"+" "+tabquizz[t].Question+"<br>"+"la reponse étais"+" "+tabreponse[t].corect+"<br>"+"<br>");
        if( nombreQuestion==9){

            document.getElementById("boutton").style.display="block";
        $("#englob").toggle("slow");
        document.getElementById("score").style.display="block";
        document.getElementById('stat').innerHTML="vous avez"+" "+score+"/9";
    }}
}, 1000);


var u=0;
countdownNumberEl.textContent = countdown;

$("#but").click(function () {

    document.getElementById('test').className.baseVal='';
    alert ('Vous avez repondu');
    document.getElementById('test').className.baseVal='test';
    /*$("svg").css({
        'position': 'absolute',
    'top': '0',
    'right': '0',
    'width': '160px',
    'height': '160px',
    'transform': 'rotateY(-180deg) rotateZ(-90deg)',
    });*/
   /* setTimeout(function(){
     u++;
    },1000);


    if(u===0) {
   $("svg circle").css({
        "stroke-dasharray": "452px",
        "stroke-dashoffset": "0px",
        "stroke-linecap": "round",
        "stroke-width": "3px",
        "stroke": "red",
        "fill": "none",
        "animation": "countdown 20s linear infinite"
    });}

    if (u===1) {
        u=0;
        $("svg circle").css({
            "stroke-dasharray": "452px",
            "stroke-dashoffset": "0px",
            "stroke-linecap": "round",
            "stroke-width": "3px",
            "stroke": "red",
            "fill": "none",
            "animation":"countdown 0s linear",

        });}*/
   /* $("#test").remove();
 var y=   $("<circle></circle>").attr("r",72).attr("cx",80).attr("cy",80).attr("id","test").css({
     'stroke-dasharray': '452px',
    'stroke-dashoffset': '0px',
    'stroke-linecap': 'round',
    'stroke-width': '3px',
    'stroke': 'red',
    'fill': 'none',
    'animation': 'countdown 20s linear infinite',
 });


 $("#svg").append(y);*/






    if($("#reponse1").css({"backgroundColor":""}) && $("#reponse2").css({"backgroundColor":""}) && $("#reponse3").css({"backgroundColor":""})){
        document.getElementById("but").disabled=true;
    }
    countdown=20;

    document.getElementById("reponse3").style.backgroundColor="";
    document.getElementById("reponse1").style.backgroundColor="";
    document.getElementById("reponse2").style.backgroundColor="";


    if (tabquizz[t].indexBonneReponse == choix) {
        score++;
        nombreQuestion++;
    }
    else{
        $("#tt").append("pour la question"+" "+tabquizz[t].Question+"<br>"+"la reponse étais"+" "+tabreponse[t].corect+"<br>"+"<br>");
        nombreQuestion++;
    }


    t++;
    console.log(score);


    $("#reponse2").html(tabreponse[t].reponse2);
    $("#reponse1").html(tabreponse[t].reponse);
    $("#reponse3").html(tabreponse[t].reponse3);

    $("#question").html(tabquizz[t].Question);




console.log(nombreQuestion);
    if(nombreQuestion===9){
        document.getElementById("boutton").style.display="block";
        $("#englob").toggle("slow");
        document.getElementById("score").style.display="block";
        document.getElementById('stat').innerHTML="vous avez"+" "+score+"/9";

    }
});

function reset(){
    location.reload();
}












