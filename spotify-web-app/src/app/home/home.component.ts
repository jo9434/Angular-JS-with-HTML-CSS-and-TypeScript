import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Images URL's Property Binding
  navPrevious:string = "../assets/icons/angle-left-solid.svg";
  navNext:string = "../assets/icons/angle-right-solid.svg";
  songImage:string = "../assets/icons/sample-image.jpg";
  btnPlay:string = "../assets/icons/circle-play-solid.svg";
  btnHome:string = "../assets/icons/house-solid-white.svg";
  btnPlaylist:string = "../assets/icons/plus-solid.svg";
  
  // Texts Interpolation
  songName1:string = "love the way you lie";
  artistName1:string = "eminem ft. rihanna";
  songDuration1:string = "3:54 min";

  songName2:string = "just the way you are";
  artistName2:string = "bruno mars";
  songDuration2:string = "4:06 min";

  songName3:string = "everything has changed";
  artistName3:string = "taylor swift ft. ed sheeran";
  songDuration3:string = "4:04 min";

  songName4:string = "demons";
  artistName4:string = "imagine dragons";
  songDuration4:string = "5:04 min";

  songName5:string = "happy";
  artistName5:string = "pharrell williams";
  songDuration5:string = "4:01 min";

  chartsHeading1:string = "top 10 bollywood";
  chartsDesc1:string = "The finest quality of Bollywood music handpick...";

  chartsHeading2:string = "top 10 hollywood";
  chartsDesc2:string = "The finest quality of Hollywood music handpick...";

  chartsHeading3:string = "top 10 latin";
  chartsDesc3:string = "The finest quality of Latin music handpick...";

  chartsHeading4:string = "top 10 french";
  chartsDesc4:string = "The finest quality of French music handpick...";

  chartsHeading5:string = "top 10 korean";
  chartsDesc5:string = "The finest quality of Korean music handpick...";

  // Texts Property Binding
  txtPrevious:string = "Previous Page";
  txtNext:string = "Next Page";
  txtSampleImg:string = "Sample Image";
  txtPlayIcon:string = "Play Button";
  txtHeading1:string = "india's best";
  txtHeading2:string = "charts";
  txtSeeAll:string = "see all";
}
