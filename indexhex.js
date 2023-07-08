var btn = document.querySelector("#btn");
var bgColor = document.querySelector("#bg-color");

btn.addEventListener('click', function () {
    var randomNumber = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    document.body.style.backgroundColor=randomNumber;
    bgColor.textContent=randomNumber;
})