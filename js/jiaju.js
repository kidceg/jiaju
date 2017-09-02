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

var passtips = document.getElementById('passtips');

var signButton = document.getElementById('signButton');



//因为如果signUp的display一开始是none的话js里获取不到它的高度，所以先用visibility设置为hidden隐藏它，但浏览器可以获取到高度，获取后再把display改成none。
//让注册框在屏幕居中
signUp.style.top = (document.documentElement.clientHeight- signUp.offsetHeight) / 2 + "px";

signUp.style.left =(document.documentElement.clientWidth- signUp.offsetWidth) / 2 + "px";

signUp.style.visibility = 'visible';
signUp.style.display = 'none';


//点击注册出现注册框，并且背景半透明
sign.addEventListener('click',function(){
     signUp.style.display = 'block';
     screen.style.display = 'block';

});

//点击注册框右上角关闭按钮，注册框消失，背景恢复
signUpClose.addEventListener('click',function(){
     signUp.style.display = 'none';
     screen.style.display = 'none';
     tips.innerHTML='　';
     passtips.style.display='none';
     for(var i = 0; i<texts.length;i++){
      texts[i].value='';
      texts[i].style.border=''; 
     }


});


//各种验证正则匹配
var pUser = /^(\w{4,15})$/;
var pEmail =/^([\w\.\-]+)@([\w\.\-]+)\.([\w]{2,4})$/;
var pPass1=/^(.{8,16})$/;



//声明checkNum用来赋值最后判断注册条件是否成立
var checkNum = 0;

//用户名的验证，输入框失去焦点后判断是否符合要求
texts[0].addEventListener('blur',function(){
    if (texts[0].value.length!==0 
      && pUser.test(texts[0].value)==false){
      tips.innerHTML='错误提示：用户名4-15字符，可以是大小写字母、数字、下划线。';
      texts[0].style.border ='1px solid red';
      signButton.style.color='';
      signButton.style['background-color']='';
    }else{
      tips.innerHTML='　';
      texts[0].style.border ='';
    }
     if(pUser.test(texts[0].value)==true){return checkNum=1;}

})

//邮件的验证，输入框失去焦点后判断是否符合要求
texts[1].addEventListener('blur',function(){
    if(texts[1].value.length!==0 && pEmail.test(texts[1].value)==false){
    tips.innerHTML='错误提示：请输入正确的邮箱';
    texts[1].style.border ='1px solid red';
    signButton.style.color='';
    signButton.style['background-color']='';
    }else{
      tips.innerHTML='　';
      texts[1].style.border ='';
    }
    if(pEmail.test(texts[1].value)==true){return checkNum +=1;}
})

//密码的验证，输入框失去焦点后判断是否符合要求
texts[2].addEventListener('blur',function(){
    var checkSum = 0;
    if(/\d/g.test(texts[2].value)==true){checkSum = 1;};
    if(/[a-z]/ig.test(texts[2].value)==true){checkSum +=1;};
    if(/[^0-9a-zA-Z]/g.test(texts[2].value)==true){checkSum += 1;};

    if((checkSum==3 && texts[2].value.length>7 && texts[2].value.length<17) || (checkSum==2 && texts[2].value.length>12 && texts[2].value.length<17)){
      passtips.style.display ='block';
      passtips.innerHTML ='强';
      passtips.style['background-color'] ='#48C157';
      passtips.style.width = '66px';
      tips.innerHTML='　';
      texts[2].style.border ='';
      return checkNum +=1;
    }
    else if ((checkSum==2 && texts[2].value.length>7 && texts[2].value.length<13) || (checkSum==1 && texts[2].value.length>14 && texts[2].value.length<17)){
      passtips.style.display ='block';
      passtips.innerHTML ='中';
      passtips.style['background-color'] ='#F68324';
      passtips.style.width = '44px';
      tips.innerHTML='　';
      texts[2].style.border ='';
      return checkNum +=1;
    }
    else if (checkSum==1 && texts[2].value.length>7 && texts[2].value.length<15){
      passtips.style.display ='block';
      passtips.innerHTML ='弱';
      passtips.style['background-color'] ='red';
      passtips.style.width = '22px';
      tips.innerHTML='　';
      texts[2].style.border ='';
      return checkNum +=1;
    }
    else if(texts[2].value.length==0){
      tips.innerHTML= '　';
      texts[2].style.border ='';
      passtips.style.display ='none';
    }
    else{passtips.style.display = 'none';
      tips.innerHTML='错误提示：密码字符长度8-16。';
      texts[2].style.border ='1px solid red';
      signButton.style.color='';
    signButton.style['background-color']='';

    }

})


//确认密码是否一致
texts[3].addEventListener('blur',function(){
  if(texts[3].value!==texts[2].value){
    tips.innerHTML='错误提示：密码不一致';
    texts[3].style.border ='1px solid red';
    signButton.style.color='';
    signButton.style['background-color']='';
  }else{
    tips.innerHTML='　';
    texts[3].style.border ='';return checkNum+=1;}


})


//点击注册按钮判断是否完善
signButton.addEventListener('click',function(){
  if(checkNum===4){
    tips.innerHTML='注册成功，将在3s内关闭本窗口。'
    tips.style.color='#48C157';
    signButton.style.color='white';
    signButton.style['background-color']='#48C157';


    var num = 4;                
    var min = 0;  
    var countDown =setInterval(function () {  
   num--;    
   tips.innerHTML= '注册成功，将在3s内关闭本窗口:　'+num+"s";               
  if (num == min) {           
    clearInterval(countDown);          
    signUp.style.display='none'; 
    screen.style.display='none';
    signButton.style['background-color']='';
    signButton.style.color='';
    tips.innerHTML='　' ;
    tips.style.color='';
    passtips.style.display='none';
     for(var i = 0; i<texts.length;i++){
      texts[i].value='';
      texts[i].style.border=''; 
     }

  } 
}, 1000);  




  }
})




















}









