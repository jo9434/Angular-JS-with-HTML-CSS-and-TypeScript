import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logincheck(uname:string, pwd: string) {
    var valid = false;

    uname = ( < HTMLTextAreaElement > (document.getElementById('uname'))).value;
    pwd = (< HTMLTextAreaElement > (document.getElementById('pwd'))).value;
    var usernames:string[] = ["rajesh724", "simon782", "mansi.arora89", "rk.singh928"], passwords:string[] = ["rajesh724#", "simon782#", "mansi.arora89#", "rk.singh928#"];
    
    // Pre-defined Messages to be passed as window.alert();
    var  msgloginsuccess = "Login Successful...!", msgloginfail = "Login Unsuccessful...!!";

    for(var i=0; i<usernames.length; i++)
    {
      if((uname == usernames[i]) && (pwd == passwords[i]))
      {
        valid = true;
        break;
      }
    }
    if(valid) {
      window.alert(uname+", "+msgloginsuccess);
      this.redirectLoginSuccess();
    }
    else {
      window.alert(uname+", "+msgloginfail);
      this.redirectLoginFail();
    }
  }
  
  // If Login is successful...!
  redirectLoginSuccess():void {
    this.router.navigate(['/home']);
  }

  // If Login is unsuccessful...!
  redirectLoginFail() {
    this.router.navigate(['/login']);
  }
  
  // Property Binding Styles and Others
  txth2style:string = " font-weight: 560; text-underline-offset: 2.2px; text-decoration-color: midnightblue; ";
  plhduname:string = "Enter Your Username...";
  plhdpwd:string = "Enter Your Password...";
  // Property Binding Images
  imgangleptn:string = "../../assets/angle-solid.svg";
  //Property Binding URL's
  pathsignup:string = "signup";
  pathhome:string = "home";
  pathlogin:string = "login";
  // Interpolation Texts
  appname:string = "movies app";
  txtsignup:string = "sign up";
  txtlogin:string = "login";
  txtor:string = "or";
  txtrembrme:string = "remember me";
  wanttosignup:string = "Do you want to sign up?";
  yourcompname:string = "XYZ Co.";

}
