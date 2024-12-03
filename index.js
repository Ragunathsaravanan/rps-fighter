let count1=0;
let count2=0;
function shake1(){
    document.getElementById("boom2").style.animation="none";
    document.getElementById("minus2").style.animation="none"
    document.getElementById("character1").style.animation="adiyalshake 0.5s alternate-reverse infinite";
}
function shake2(){
    document.getElementById("boom1").style.animation="none";
    document.getElementById("minus1").style.animation="none"
    document.getElementById("character2").style.animation="thadimadushake 0.5s alternate-reverse infinite";
}
function Fight(e){

    if(e==1){

        count1++;
        document.getElementById("character1").style.animation="adiyal 1s steps(4) 1";
        document.getElementById("boom2").style.animation="boom 1.3s steps(2)";
        document.getElementById("minus2").style.animation="boom 1.4s steps(2)"
        setTimeout(shake1,1500)

        if(count1==5){
            document.getElementById("dead1").style.display="block";
            document.getElementById("character2").style.display="none";
            document.getElementById("boom2").style.display="none";
            document.getElementById("minus2").style.display="none";
            document.getElementById("character1").style.animation="adiyal 0s steps(1) 1 alternate-reverse";
        }
    }
    if(e==2){
        count2++;
        document.getElementById("character2").style.animation="thadimadu 1s steps(4) 1";
        document.getElementById("boom1").style.animation="boom 1.3s steps(2)";
        document.getElementById("minus1").style.animation="boom 1.4s steps(2)"
        setTimeout(shake2,1500)

        if(count2==5){
            document.getElementById("dead2").style.display="block";
            document.getElementById("character1").style.display="none";
            document.getElementById("boom1").style.display="none";
            document.getElementById("minus1").style.display="none";
            document.getElementById("win").style.display="block";
            document.getElementById("character2").style.animation="adiyal 0s steps(1) 1 alternate-reverse";
        }
    }
}


//RPS GAME


let Matchcount=0;
let winCount=0;
let looseCount=0;
let tieCount=0;
function userData(e){
    Matchcount++;
    let computer=Math.floor(Math.random() * (4-1) + 1);
    if(e==1){
        document.getElementById("u1").style.display="flex";
    }
    else{
        document.getElementById("u1").style.display="none";
    }
    if(e==2){
        document.getElementById("u2").style.display="flex";
    }
    else{
        document.getElementById("u2").style.display="none";
    }
    if(e==3){
        document.getElementById("u3").style.display="flex";
    }
    else{
        document.getElementById("u3").style.display="none";
    }
    if(computer==1){
        document.getElementById("c1").style.display="flex";
    }
    else{
        document.getElementById("c1").style.display="none";
    }
    if(computer==2){
        document.getElementById("c2").style.display="flex";
    }
    else{
        document.getElementById("c2").style.display="none";
    }
    if(computer==3){
        document.getElementById("c3").style.display="flex";
    }
    else{
        document.getElementById("c3").style.display="none";
    }
    if(computer==1 && e==2 || computer==2 && e==3 || computer==3 && e==1){
        winCount++;
        setTimeout(Fight(2),1000);
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="YOU WON!!";
    }
    else if(computer==e){
        tieCount++;
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="MATCH TIE!!";

    }
    else{
        looseCount++;
        setTimeout(Fight(1),1000);
        document.getElementById("ans").style.display="flex";
        document.getElementById("answer").innerHTML="YOU LOOSE!!";
    }
    document.getElementById("matchCount").innerHTML=Matchcount;
    document.getElementById("winCount").innerHTML=winCount;
    document.getElementById("looseCount").innerHTML=looseCount;
    document.getElementById("tieCount").innerHTML=tieCount;
}
function reset(){
    location.reload();
}