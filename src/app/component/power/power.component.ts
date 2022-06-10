import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {

  public support : string = "assets/img/iphone.png";
  public screenSize : number;
  public hours : Date = new Date
  public dateNumber : number;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.hours = new Date()
    }, 1)

    this.dateNumber = this.hours.getDate()
  }

  onResize(event) {
    this.screenSize = event.target.innerWidth;
    if(window.innerWidth <= 390 || this.screenSize <= 390){
      this.support = "assets/img/iphone.png"
    } else if(window.innerWidth <= 820 || this.screenSize <= 820){
      this.support = "assets/img/ipad.png"
    } else if(window.innerWidth >= 821 || this.screenSize >= 821){
      this.support = "assets/img/mac.png"
    }
  }

}
