 time=0;

var timer=setInterval(()=>{
    time+=2;
    console.log(time);
    if(time>=20)
    {
        clearInterval(timer);
    }
},1000)