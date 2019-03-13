    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('tijd').innerHTML =
        h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
        }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
    }

    function timeOfTheDay(){
        var today = new Date();
        var date = today.getDate();
        var weekday = new Array(7);
        weekday[0] = "Zondag";
        weekday[1] = "Maandag";
        weekday[2] = "Dinsdag";
        weekday[3] = "Woensdag";
        weekday[4] = "Donderdag";
        weekday[5] = "Vrijdag";
        weekday[6] = "Zaterdag";

        var month = new Array(11);
        month[0] = "Januari";
        month[1] = "Februari";
        month[2] = "Maart";
        month[3] = "April";
        month[4] = "Mei";
        month[5] = "Juni";
        month[6] = "Juli";
        month[7] = "Augustus";
        month[8] = "September";
        month[9] = "Oktober";
        month[10] = "November";
        month[11] = "December";

        var dag = weekday[today.getDay()];
        var maand = month[today.getMonth()];
        document.getElementById("dagje").innerHTML = date + " "  + maand ;
    }

    function groetdag(){
        var d = new Date();
        var time = d.getHours();

        if (time > 0 && time < 12){
            document.getElementById('groetdag').innerHTML = "GOEDE MORGEN!" ;
        }
        if(time >= 12 ){
            document.getElementById('groetdag').innerHTML = "GOEDE MIDDAG!";
        }
        if(time >= 18 ){
            document.getElementById('groetdag').innerHTML = "GOEDE AVOND!";
        }
    }

    function hulp(){
        var d = new Date();
        var time = d.getHours();

        if (time >= 0 && time < 7){
            document.body.style.backgroundColor = "#1d2951";
            document.getElementById('zin').innerHTML = "Tijd om te slapen,slaaplekker!";
        }
        else if (time >= 7 && time < 12){
            document.body.style.backgroundColor = "#f8c5d0";
            document.getElementById('zin').innerHTML = "Tijd om op te staan, eet een lekker ontbijtje!";
            document.getElementById('ochtend').src= "images/goodmorning.jpg";
        }
        else if (time >= 12 && time < 18){
            document.body.style.backgroundColor = "#abe3e5";
            document.getElementById('zin').innerHTML = "Het is nu middag, geniet van uw dag!";
              document.getElementById('ochtend').src= "images/goodafternoon.jpg";
        }
        else if (time >= 18 && time < 24){
            document.body.style.backgroundColor = "#4f97a3";
            document.getElementById('zin').innerHTML = "Het is nu avond, geniet van uw avond eten!";
            document.getElementById('ochtend').src= "images/goodnight.jpg";
        }
         else if (time >= 23 && time < 24){
            document.body.style.backgroundColor = "#1d2951";
            document.getElementById('zin').innerHTML = "Tijd om te slapen, slaaplekker!";
     
        }
    }
/* ANIMATIE tweenmax */

    function opmaakTekst() {
    
        var message = document.getElementById('groetdag');

        TweenLite.from("#groetdag", 2.5, { ease: Bounce.easeOut, y: -300 });

        var d = new Date();
        var time = d.getHours();

        if ( time <= 6 || time >= 19  ){
            document.getElementById('tijd').style.color = "black";
            document.getElementById('groetdag').style.color = "yellow";
            document.getElementById('dagje').style.color = "black";
            document.getElementById('zin').style.color = "blue";
            }

        else {
            document.getElementById('tijd').style.color = "white";
            document.getElementById('groetdag').style.color = "blue";
            document.getElementById('dagje').style.color = "blue";
            document.getElementById('zin').style.color = "yellow";
        } 
    }  

/* ANIMATIE tweenmax */

    startTime();
    timeOfTheDay();
    groetdag(); 
    hulp();
    opmaakTekst();