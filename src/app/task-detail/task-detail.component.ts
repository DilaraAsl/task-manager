import { Component } from '@angular/core';
import {DialogService} from "../dialog.service";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  taskDetails: string = 'Task Details Revealed';
  currentTaskDetails: string = 'Current Task Details';
 onMouseOver(){
   alert(this.taskDetails)

 }
// event:Event will work
  // if you don't want to deal with types event: any will work
 onInputChange( event: any){
   // event.target.value captures the input value
   console.log(event.target.value);
   this.currentTaskDetails=event.target.value;
 }
}
