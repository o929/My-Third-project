let navBar = document.getElementById("navbar");
let bar = document.getElementById("bar");
let close = document.getElementById("close");

if(bar){
    bar.addEventListener("click",()=>{
        navBar.classList.add("display")
    })
};
if(close){
    close.addEventListener("click",()=>{
       navBar.classList.remove("display")
    })
   }