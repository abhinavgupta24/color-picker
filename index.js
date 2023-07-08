const color = ["red","yellow","lime","brown"];
var btn=document.querySelector("#btn");
var bgColor=document.querySelector("#bg-color")

btn.addEventListener('click',function(){
    var randomNumber= Math.floor(Math.random()*color.length)
    document.body.style.backgroundColor=color[randomNumber];
    bgColor.textContent=color[randomNumber];
})