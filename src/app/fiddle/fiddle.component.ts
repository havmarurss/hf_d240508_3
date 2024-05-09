import { Component } from '@angular/core';

@Component({
  selector: 'app-fiddle',
  templateUrl: './fiddle.component.html',
})
export class FiddleComponent {

  date: number = Date.now();

  ngOnInit() {
    console.log("fiddle");
    console.log(this.date);
    this.date += 100000000000000;
    console.log(this.date);
  }
}
