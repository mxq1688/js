

module.exports=function (Icon, printMe) {
    var greet = document.createElement('div');
    greet.textContent = 'webpack';
    greet.classList.add('hello');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    greet.appendChild(btn)
    // var myIcon = new Image();
    // myIcon.src = Icon;
    // greet.appendChild(myIcon);
    return greet;
}
