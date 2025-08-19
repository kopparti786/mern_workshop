let number = 0; 
let counter = document.getElementById("counter");
function add()
{
    number++;
    counter.innerHTML = number;
}
function sub()
{
    number--;
    counter.innerHTML = number;
}
function reset()
{
    number=0;
counter.innerHTML = number;
}