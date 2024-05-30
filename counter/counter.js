time=0;

var timer=setInterval(()=>{

    time+=3;
    document.getElementById('b1').innerHTML=time;
    if(time>=1500)
    {
        clearInterval(timer);
    }
},0);

var timer1=setInterval(()=>{

    time+=6;
    document.getElementById('b2').innerHTML=time;
    if(time>=1600)
    {
        clearInterval(timer1);
    }
},0);

var timer3=setInterval(()=>{

    time+=1;
    document.getElementById('b3').innerHTML=time;
    if(time>=1300)
    {
        clearInterval(timer3);
    }
},15);

var timer4=setInterval(()=>{

    time+=1;
    document.getElementById('b4').innerHTML=time;
    if(time>=1200)
    {
        clearInterval(timer4);
    }
},20);