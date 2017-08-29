window.onload = function(){

var signUp = document.getElementById('signUp');

var sign = document.getElementById('sign');

var signUpClose = document.getElementById('signUpClose');

var screen = document.getElementById('screen');

var texts = document.getElementsByClassName('text');

var user = document.getElementById('user');

var email = document.getElementById('email');

var password = document.getElementById('password');

var password2 = document.getElementById('password2');

var tips = document.getElementById('tips');






signUp.style.top = (document.documentElement.clientHeight- 316) / 2 + "px";

signUp.style.left =(document.documentElement.clientWidth- 400) / 2 + "px";

sign.onmousedown = function(){
     signUp.style.display = 'block';
     screen.style.display = 'block';

}

signUpClose.onmousedown = function(){
     signUp.style.display = 'none';
     screen.style.display = 'none';
}




























}









