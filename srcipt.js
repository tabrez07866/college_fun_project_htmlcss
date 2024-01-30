let hour=document.getElementById('hour')
let minute=document.getElementById('minute')
let second=document.getElementById('second')


function displayTime(){

    let date=new Date()

    let hr=date.getHours()

    let min=date.getMinutes()

    let sec=date.getSeconds()
      


    //calculation

    hRotation=hr*30+min/2+sec/120;
    mRotation=6*min+sec/10;
    sRotation=6*sec;


    hour.style.transform=`rotate(${hRotation}deg)`
    minute.style.transform=`rotate(${mRotation}deg)`
    second.style.transform=`rotate(${sRotation}deg)`
   
}
setInterval(displayTime,1000)   //  1  second











/* 
                        HOURS
12hr=360deg
1hr=30deg
h hr=30*h + m/2deg + s/120


1hr =60min
1min=30/60=1/2 min
m min=m/2 deg

1hr=3600 sec=30deg
1sec=30/3600=1/120
s sec=s/120
*/

/*         MINUTES
 

60 min =360deg
1min=6deg

m min =6*m + s/10



60s = 1m=6deg
1s=6/60=1/10
s s=s/10



*/

/*     SECOND


60s =360deg
1s=6deg


*/ 

