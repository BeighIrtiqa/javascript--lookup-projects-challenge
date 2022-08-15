//Function for the timer 
const startMin = 1
let time = startMin *60

const countdownEl = document.getElementById("timer")
setInterval(updateCountdown,1000)
function updateCountdown() {
    const minutes = Math.floor(time/60)
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds :seconds
    countdownEl.innerHTML = `${minutes}:${seconds}`
    //to stop the timer to go into the negative loop
    if(time > 0)
    {
        time--
    }
    
}

//function to increment the goal of home team
let h = document.getElementById("shome");
let i =0;
function homefunc()
{
    i += 1;
    h.innerText = i
}
//function to increment the goal of guest team
let a = document.getElementById("saway");
let j =0;
function awayfunc()
{
    j += 1;
    a.innerText = j
} 