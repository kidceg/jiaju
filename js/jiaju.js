window.onload = function(){

//注册模块（包括注册框和背景）div
var sign_up_container = document.getElementById('sign_up_container');
//注册框 div
var signUp = document.getElementById('signUp');
//注册按钮
var sign = document.getElementById('sign');
//注册框右上角关闭按钮X div
var signUpClose = document.getElementById('signUpClose');
//背景 div
var screen = document.getElementById('screen');
//输入框 input 集合
var texts = document.getElementsByClassName('text');
//用户名 input
var user = document.getElementById('user');
//邮箱 input
var email = document.getElementById('email');
//密码 input
var password = document.getElementById('password');
//确认密码 input
var password2 = document.getElementById('password2');
//输入错误提示部分 p
var tips = document.getElementById('tips');
//密码强度 span
var passtips = document.getElementById('passtips');
//注册按钮 input
var signButton = document.getElementById('signButton');



//因为如果signUp的display一开始是none的话js里获取不到它的高度，所以先用visibility设置为hidden隐藏它，但浏览器可以获取到高度，获取后再把display改成none。
//让注册框在屏幕居中
// signUp.style.top = (document.documentElement.clientHeight- signUp.offsetHeight) / 2 + "px";

// signUp.style.left =(document.documentElement.clientWidth- signUp.offsetWidth) / 2 + "px";

// signUp.style.visibility = 'visible';
// signUp.style.display = 'none';


//点击整个注册板块变成可视，注册出现注册框，并且背景半透明
sign.addEventListener('click', function () {
     sign_up_container.style.display = 'block';
});

//点击注册框右上角关闭按钮，注册框消失，背景恢复
signUpClose.addEventListener('click', function () {
     sign_up_container.style.display = 'none';
     tips.innerHTML = '　';
     passtips.style.display = 'none';
     for (var i = 0; i < texts.length; i++) {
      texts[i].value = '';
      texts[i].style.border = ''; 
     }


});


//各种验证正则匹配
//字母数字下划线字符数4-15个字符
var pUser = /^(\w{4,15})$/;
//邮件格式
var pEmail =/^([\w\.\-]+)@([\w\.\-]+)\.([\w]{2,4})$/;
//任意8-16个字符
var pPass1=/^(.{8,16})$/;


//声明用来赋值最后判断注册条件是否成立
var checkUser = 0;
var checkEmail = 0;
var checkPassword = 0;
var checkPassword2 = 0;
// //声明checkNum用来赋值最后判断注册条件是否成立
// var checkNum = 0;

//用户名的验证，输入框失去焦点后判断是否符合要求
user.addEventListener('blur', function () {
    if (user.value.length !== 0 
      && pUser.test(texts[0].value) == false) {
      tips.innerHTML ='错误提示：用户名4-15字符，可以是大小写字母、数字、下划线。';
      user.style.border = '1px solid red';
      signButton.style.color = '';
      signButton.style['background-color'] = '';
      checkUser = 0;
    } else {
      tips.innerHTML = '　';
      user.style.border = '';
      checkUser = 0;
    }
     if (pUser.test(user.value) == true) {
      checkUser = 1;
    }

})

//邮件的验证，输入框失去焦点后判断是否符合要求
email.addEventListener('blur',function(){
    if (email.value.length !== 0 
      && pEmail.test(email.value) == false) {
      tips.innerHTML ='错误提示：请输入正确的邮箱';
      email.style.border = '1px solid red';
      signButton.style.color = '';
      signButton.style['background-color'] = '';
      checkEmail = 0;
    } else {
      tips.innerHTML = '　';
      email.style.border = '';
      checkEmail = 0;
    }
    if (pEmail.test(email.value) == true) {
      checkEmail = 1;
    }
})

//密码的验证，输入框失去焦点后判断是否符合要求
password.addEventListener('blur', function () {
  //checkSum符合条件就加1，用来综合判断密码强度
    var checkSum = 0;
     //判断是否含有数字
    if (/\d/g.test(password.value) == true) {
      checkSum = 1;
    }
    //判断是否含有字母（含大小写）
    if (/[a-z]/ig.test(password.value) == true) {
      checkSum += 1;
    }
     //判断是否含有除了字母数字外的其他字符
    if (/[^0-9a-zA-Z]/g.test(password.value) == true) {
      checkSum += 1;
    }

    if ((checkSum == 3 
        && password.value.length > 7 
        && password.value.length < 17) 
      || (checkSum == 2 
        && password.value.length > 12 
        && password.value.length < 17)) {
      passtips.style.display = 'block';
      passtips.innerHTML = '强';
      passtips.style['background-color'] = '#48C157';
      passtips.style.width = '66px';
      tips.innerHTML = '　';
      password.style.border = '';
      checkNum +=1;
      checkPassword = 1;
    } else if ((checkSum == 2 
        && password.value.length > 7 
        && password.value.length < 13) 
      || (checkSum == 1 
        && password.value.length > 14 
        && password.value.length < 17)){
      passtips.style.display = 'block';
      passtips.innerHTML = '中';
      passtips.style['background-color'] = '#F68324';
      passtips.style.width = '44px';
      tips.innerHTML = '　';
      password.style.border = '';
      checkPassword = 1;
    } else if (checkSum == 1 
      && password.value.length > 7
      && password.value.length < 15) {
      passtips.style.display = 'block';
      passtips.innerHTML = '弱';
      passtips.style['background-color'] = 'red';
      passtips.style.width = '22px';
      tips.innerHTML = '　';
      password.style.border = '';
      checkPassword = 1;
    } else if (password.value.length == 0) {
      tips.innerHTML = '　';
      password.style.border = '';
      passtips.style.display = 'none';
      checkPassword = 0;
    } else {
      passtips.style.display = 'none';
      tips.innerHTML = '错误提示：密码字符长度8-16。';
      password.style.border = '1px solid red';
      signButton.style.color = '';
      signButton.style['background-color'] = '';
      checkPassword = 0;

    }

})


//确认密码是否一致
password2.addEventListener('blur', function () {
  if (password2.value !== password.value) {
    tips.innerHTML = '错误提示：密码不一致';
    password2.style.border = '1px solid red';
    signButton.style.color = '';
    signButton.style['background-color'] = '';
    checkPassword2 = 0;
  } else {
    tips.innerHTML = '　';
    password2.style.border = '';
    checkPassword2 = 1;
  }
})


//点击注册按钮判断是否完善
signButton.addEventListener('click', function () {
  if (checkUser == 1 
      && checkEmail == 1
      && checkPassword == 1
      && checkPassword2 == 1) {
    tips.innerHTML = '注册成功，将在3s内关闭本窗口。'
    tips.style.color = '#48C157';
    signButton.style.color = 'white';
    signButton.style['background-color'] = '#48C157';

    var num = 4;                
    var min = 0;  
    //倒计时
    var countDown = setInterval(function () {  
      num--;    
      tips.innerHTML = '注册成功，将在3s内关闭本窗口:　'+num+"s";               
      if (num == min) {           
        clearInterval(countDown);
         //倒计时结束后的操作         
        sign_up_container.style.display = 'none';
        signButton.style['background-color'] = '';
        signButton.style.color = '';
        tips.innerHTML = '　' ;
        tips.style.color = '';
        passtips.style.display = 'none';
         for (var i = 0; i < texts.length; i++){
          texts[i].value = '';
          texts[i].style.border = ''; 
         }

      } 
    }, 1000);  




  }
})




















}









