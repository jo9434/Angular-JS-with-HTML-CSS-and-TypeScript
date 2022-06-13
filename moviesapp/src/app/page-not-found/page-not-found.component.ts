import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Images Property Binding
  imgSorryEmoji:string = "../../assets/sorry-emoji-blue.svg";
  //errorstyle1:string = "font-family:'Courier New', Courier, monospace; font-size: 24px; font-weight: 540; margin-left: 16vh; margin-top: 6vh; padding-top: 3.5vh; margin-bottom: -2vh; text-transform: capitalize;";
  hrstyle1:string = "border: 2px solid midnightblue; opacity: 50%; margin-top: 1vh !important; margin-bottom: 1vh !important; width: 75.8vh; background-color: midnightblue !important;";
  // Nav Path Property Binding to Respective Components for Routing Component
  pathMain:string = "/"; // Default Component
  pathHome:string = "/home"; // Home Component
  pathLogin:string = "/login"; // Login Component
  pathRegister:string = "/signup"; // Signup Component

  // Texts Interpolation
  navLinkActive:string = "active";
  //error404:string = "404!";
  //errorDesc:string = "page not found...";
  returnLogin:string = "return to login";
  sorryMsg:string = "sorry for the inconvience caused!";
  salutation:string = "dear user,";
  positiveMsg1:string = "great minds are working, to offer you a better service.";
  positiveMsg2:string = "meanwhile, kindly login/register to use our app.";
  regardsMsg:string = "with regards,";
  teamMoviesApp:string = "team movies app";

}
