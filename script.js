let correct_username = 'codeNation';
let correct_email = 'codenation@gmail.com';
let correct_password = '1234';

$(".login").click(function(){
let usernameInput=$(".username").val();
    let passwordInput= $(".password").val();
    
    
    if(correct_email === usernameInput &&  correct_password === passwordInput || correct_username === usernameInput &&  correct_password === passwordInput ) {
  $(".result").html("Acces granted");
        }else{
     $(".result").html("Acces Denied");
}
});

//Independent Practice

let correctGrad = '2020';
let correctFlw = 'fellowship company';

$(".login-2").click(function(){
    let flwInput= $(".flw-name").val().toLowerCase();
    let gradInput=$(".grad-year").val();
    
    if( correctGrad < gradInput && correctFlw === flwInput ) {
  		$(".result-two").html("Acces granted");
        	} else{
     	$(".result-two").html("Acces Denied");
	}
});