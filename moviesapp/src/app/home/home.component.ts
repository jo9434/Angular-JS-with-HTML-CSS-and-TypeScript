import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Text Interpolation
  txtheading:string = "movies searcher";
  txtSearch:string = "search";
  txtAddMovie:string = "add movie";
  // Property Binding
  plhdrMovie:string = "Enter Movie Name...";
  plhdrYear:string = "Enter Movie Year...";
  
}
