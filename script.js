const hoursspan=document.querySelector(".hour");
const secspan=document.querySelector(".seconds");
const minspan=document.querySelector(".minute");
const amspan=document.querySelector(".am");
const pmspan=document.querySelector(".pm");


setInterval(()=>{
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const secs = time.getSeconds();
    console.log(hours,minutes,secs);
    if(hours>11)
    {
        pmspan.className="pm active"
        amspan.className = "am"
        if(hours>12){
            hoursspan.innerText = (hours-12).toString().padStart(2,0);
        }
        if(hours==12)
        {
           hoursspan.innerText=(12).toString().padStart(2,0);
        }
        else{
            hoursspan.innerText = (hours).toString().padStart(2,0);
        }
    }
    else{
        pmspan.className="pm "
        amspan.className = "am active"
    }   
    secspan.innerText=secs.toString().padStart(2,0);
    minspan.innerText=minutes.toString().padStart(2,0);
})