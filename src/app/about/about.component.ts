import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {

  clickCounter = 0;
  myTypeI = '';
  myTypeII = '';
  imgsrc = 'https://miro.medium.com/max/2183/1*P7x-_0XfQz6CVmMY_QAv0w.png';

  myFuncHover($event: any) {
    console.log('Hover!', $event);
  }

  myFuncClick($event: any) {
    console.log('Clicked!', $event);
    this.clickCounter += 1;
  }

  userInput(event: any) {
    this.myTypeI = event.target.value;
  }


  constructor() { }

  ngOnInit() {
  }

}
