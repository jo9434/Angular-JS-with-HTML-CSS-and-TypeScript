import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signupcheck(uname:string, pwd: string) {
    var valid = false;

    uname = ( < HTMLTextAreaElement > (document.getElementById('uname'))).value;
    pwd = (< HTMLTextAreaElement > (document.getElementById('pwd'))).value;
    var usernames:string[] = ["rajesh724", "simon782", "mansi.arora89", "rk.singh928"] , passwords:string[] = ["rajesh724#", "simon782#", "mansi.arora89#", "rk.singh928#"];

    // Pre-defined Messages to be passed as window.alert();
    var  msgdetaddsuccess = "User Details Added Successfully...!", msgdetaddfail = "No Details Added Successfully...!!";

    for(var i=0; i<usernames.length; i++)
    {
      if((uname != usernames[i]) && (pwd != passwords[i]))
      {
        usernames.push(usernames[i]);
        passwords.push(passwords[i]);
        valid = true;
        break;
      }
    }
    if(valid) {
      window.alert(uname+", "+msgdetaddsuccess);
      this.redirectRegSuccess();
    }
    else {
      window.alert(uname+", "+msgdetaddfail);
      this.redirectRegFail();
    }
  }
  
  // If Registration is successful...!
  redirectRegSuccess():void {
    this.router.navigate(['/login']);
  }

  // If Registration is unsuccessful...!
  redirectRegFail() {
    this.router.navigate(['/signup']);
  }

  // Property Binding Styles and Others
  txth2style:string = "font-weight: 560; text-underline-offset: 2.2px; text-decoration-color: midnightblue;";
  plhduname:string = "Enter Your Username...";
  plhdpwd:string = "Enter Your Password...";
  
  // Property Binding Images
  imgangleptn:string = "../../assets/angle-solid.svg";
  //Property Binding URL's
  pathhome:string = "/dashboard";
  pathlogin:string = "/login";
  pathprivpolicy:string = "/privacypolicy";
  pathsignup:string = "/signup";

  // Interpolation Texts
  appname:string = "movies app";
  txtsignup:string = "sign up";
  txtor:string = "or";
  txtrembrme:string = "remember me";
  wanttosignup:string = "Do you want to sign up?";
  yourcompname:string = "XYZ Co.";
}
