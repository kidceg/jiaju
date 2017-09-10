 $(document).ready(function(e) {

//注册模块（包括注册框和背景）div
var $sign_upc_ontainer = $('#sign_upc_ontainer');
//注册框 div
var $signUp = $('#signUp');

//背景 div
var $screen = $('#screen');

//注册框右上角关闭按钮X div
var $signUpClose = $('#signUpClose');

//输入框 input
var $text = $('.text');

//注册按钮 input
var $signButton = $('#signButton');

//用户名 input
var $user = $('#user');

//邮箱 input
var $email = $('#email');

//密码 input
var $password = $('#password');

//确认密码 input
var $password2 = $('#password2');

//输入错误提示部分 p
var $tips = $('#tips');

//密码强度 span
var $passtips = $('#passtips');


//首页右上角注册按钮点击,弹出注册框，背景改变
$('#sign').on('click', function () {
	$sign_upc_ontainer.css('display', 'block');
});

//注册框关闭按钮点击
$signUpClose.on('click', function () {
	$sign_upc_ontainer.css('display', 'none');
	$tips.html('　');
	$passtips.css('display', 'none');
	$text.css('border', '')
  .val('');
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

//用户名的验证，输入框失去焦点后判断是否符合要求
$user.on('blur', function () {
    if ($user.val().length !== 0 
    	&& pUser.test($user.val()) == false) {
	    $tips.html('错误提示：用户名4-15字符，可以是大小写字母、数字、下划线。');
	    $user.css('border', '1px solid red');
	    $signButton.css({
	    	'color':'',
		    'background-color':''
		});
		checkUser = 0;
	} else {  
	    $tips.html('　');
	    $user.css('border','');
	    checkUser = 0;	     
    }
    if (pUser.test($user.val()) == true) {
     	checkUser = 1;
    }

});

//邮件的验证，输入框失去焦点后判断是否符合要求
$email.on('blur',  function () {
    if ($email.val().length !== 0 
    	&& pEmail.test($email.val()) == false) {
	    $tips.html('错误提示：请输入正确的邮箱');
	    $email.css('border','1px solid red');
	    $signButton.css({
	    	'color':'',
	    	'background-color':''
	    });
	    checkEmail = 0;
    } else {
	    $tips.html('　');
	    $email.css('border','');
	    checkEmail = 0;
    }
    if (pEmail.test($email.val()) == true) {
    	checkEmail = 1;
    }
});


//密码的验证，输入框失去焦点后判断是否符合要求
$password.on('blur', function () {
	//checkSum符合条件就加1，用来综合判断密码强度
    var checkSum = 0;
    //判断是否含有数字
    if (/\d/g.test($password.val()) == true) {
    	checkSum = 1;
    };
    //判断是否含有字母（含大小写）
    if (/[a-z]/ig.test($password.val()) == true) {
    	checkSum +=1;
    };
    //判断是否含有除了字母数字外的其他字符
    if (/[^0-9a-zA-Z]/g.test($password.val()) == true) {
    	checkSum += 1;
    };

    if ((checkSum == 3
    	  && $password.val().length>7 
    	  && $password.val().length<17) 
    	|| (checkSum == 2
    		&& $password.val().length>12 
    		&& $password.val().length<17)) {     
        $tips.html('　');
        $password.css('border','');
  	    $passtips.html('强')
        .css({
  	    	'display':'block',
  	    	'background-color':'#48C157',
  	    	'width':'66px',
  	        });
        checkPassword = 1;
    } else if ((checkSum == 2 
		    	&& $password.val().length>7 
		    	&& $password.val().length<13) 
		     || (checkSum == 1
		    	&& $password.val().length>14 
		    	&& $password.val().length<17)) {
    	$tips.html('　');
	    $password.css('border','');
	    $passtips.html('中')
      .css({
	    	'display':'block',
	    	'background-color':'#F68324',
	    	'width':'44px'
		    });
	    checkPassword = 1;
    }else if (checkSum == 1 
    	      && $password.val().length>7 
    	      && $password.val().length<15) {
	    $tips.html('　');
	    $password.css('border','');
	    $passtips.html('弱')
      .css({
	      	'display':'block',
	      	'background-color':'red',
	      	'width':'22px'
	      });     
	    checkPassword = 1;
    } else if ($password.val().length == 0) {
      $tips.html('　');
      $password.css('border','');
      $passtips.css('display','none');
      checkPassword = 0;
    } else {
      $passtips.css('display','none');
      $tips.html('错误提示：密码字符长度8-16。');
      $password.css('border','1px solid red');
      $signButton.css({
      	'color':'',
      	'background-color':''
      });
      checkPassword = 0;

    }

});

//确认密码是否一致
$password2.on('blur', function () {
  if ($password2.val() !== $password.val()) {
    $tips.html('错误提示：密码不一致');
    $password2.css('border', '1px solid red');
    $signButton.css({
    	'color':'',
    	'background-color':''
    });
    checkPassword2 = 0;
  } else {
    $tips.html('　');
    $password2.css('border', '');
    checkPassword2 = 1;
  }

});


//点击注册按钮判断是否完善
$signButton.on('click', function () {
 if (checkUser == 1 
 	&& checkEmail == 1
 	&& checkPassword == 1
 	&& checkPassword2 == 1) {
    $tips.html('注册成功，将在3s内关闭本窗口。')
    .css('color','#48C157');
    $signButton.css({
    	'color':'white',
    	'background-color':'#48C157'
        });
    var num = 4;                
    var min = 0;  
    //倒计时
    var countsDown = setInterval(function () {
        num--;    
       $tips.html('注册成功，将在3s内关闭本窗口:　'+num+'s');
       if (num == min) {           
  		    clearInterval(countsDown);   
  		    //倒计时结束后的操作       
  		    $sign_upc_ontainer.css('display','none'); 
  		    $signButton.css({
  		    	'background-color':'',
  		    	'color':''
  		    })
  		    $tips.html('　')
          .css('color','');
  		    $passtips.css('display','none');
  		    $text.val('')
          .css('border','');
  		 }	   
	   }, 1000);  
   }
});





























});



































