import { Component } from '@angular/core';
import {DialogService} from "../dialog.service";
declare var bootstrap: any; // Declare the bootstrap variable
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {
  taskDetails: string = 'Task Details Revealed';
  currentTaskDetails: string = 'Current Task Details';
  inputString: string = '';
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
  showToast(): void {
    let toastEl = document.getElementById('myToast');
    let toast = new bootstrap.Toast(toastEl);
    toast.show();
  }

  onSubmitText(inputString: string){
   this.inputString=inputString;
   console.log(inputString);
  }
}
