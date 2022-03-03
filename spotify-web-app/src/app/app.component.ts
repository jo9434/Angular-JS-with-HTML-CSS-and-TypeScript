import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'spotify-app';
  appName:string = "Spotify"; // App Name

  //Images URL's Property Binding
  appLogo:string = "../assets/icons/spotify-logo-white.svg";
  navHome:string = "../assets/icons/house-solid-white.svg";
  navLogin:string = "../assets/icons/login-white.svg";
  navRegister:string = "../assets/icons/signup-white.svg";
  navBackToMain:string = "../assets/icons/back-to-main-white.svg";

  // Texts Interpolation
  navLinkActive:string = "active";
  txtHome:string = "Home Icon";
  txtLogin:string = "Login Icon";
  txtReg:string = "Register Icon";
  txtBackMain:string = "Back To Main Icon";
  
  // Nav Path Property Binding to Respective Components for Routing Component
  pathMain:string = "/"; // Default Component
  pathHome:string = "/home"; // Home Component
  pathLogin:string = "/login"; // Login Component
  pathRegister:string = "/register"; // Register Component
}
