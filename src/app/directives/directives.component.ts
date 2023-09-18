import { Component } from '@angular/core';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  styles:[`
  .clickLog{
      color: white;
  }`]
})
export class DirectivesComponent {
secretParagraph:boolean=false;
i: number = 0;
buttonClicks: number[] = [];
dates:Date []=[];
incrementClicks(){
  this.secretParagraph=!this.secretParagraph;
  this.buttonClicks.push(++this.i);
  this.dates.push(new Date());
}

}
