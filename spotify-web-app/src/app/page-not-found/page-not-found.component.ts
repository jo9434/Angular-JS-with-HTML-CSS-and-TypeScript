import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Images Property Binding
  imgSorryEmoji:string = "../assets/icons/sorry-emoji-blue.svg";
  manDancingGif:string = "";

  // Nav Path Property Binding to Respective Components for Routing Component
  pathMain:string = "/"; // Default Component
  pathHome:string = "/home"; // Home Component
  pathLogin:string = "/login"; // Login Component
  pathRegister:string = "/register"; // Register Component

  // Texts Interpolation
  navLinkActive:string = "active";
  error404:string = "404!";
  errorDesc:string = "page not found...";
  returnMain:string = "return to main section";
  sorryMsg:string = "sorry for the inconvience caused!";
  positiveMsg1:string = "great minds are working, to offer you a better service.";
  positiveMsg2:string = "meanwhile, check out our latest songs.";
  regardsMsg:string = "with regards,";
  teamSpotify:string = "team spotify!";

  console1:any = console.log(this.error404);
  console2:any = console.log(this.errorDesc);
  songname:string = "../assets/songs/Happy-Piano.mp3";
}
