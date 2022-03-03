import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit():void {
  }

  // Images URL's Property Binding
  img1:string = "../assets/social-media/facebook.png";
  img2:string = "../assets/social-media/instagram.png";
  img3:string = "../assets/social-media/twitter.png";
  img4:string = "../assets/social-media/youtube.png";
  appLogo:string = "../assets/icons/house-solid-white.svg";
  btnHome:string = "../assets/icons/house-solid-white.svg";

  // Nav Path Property Binding to Respective Components for Routing Component
  pathMain:string = "/"; // Default Component
  pathHome:string = "/home"; // Home Component
  pathLogin:string = "/login"; // Login Component
  pathRegister:string = "/register"; // Register Component

  // Texts Interpolation
  navLinkActive:string = "active";
  facebook:string = "Facebook";
  instagram:string = "Instagram";
  twitter:string = "Twitter";
  youtube:string = "YouTube";
  appName:string = "spotify";

  registerform = new FormGroup ({
    'username': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[a-z0-9]{8,20}$')]),
    'password': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[A-Z]{1}[a-z0-9#]{7,19}$')])
  })
}
