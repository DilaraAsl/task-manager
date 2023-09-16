import {Component} from '@angular/core';
import {DialogService} from "../dialog.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  currentTask: string = 'My Tasks';
  itemImageUrl = '../assets/taskList.png';
  imageWidth=100;
  tasks: string[] = [];
  isActive:boolean=true;
  constructor(private dialogService: DialogService){
    this.tasks.push("Eat");
    this.tasks.push("Sleep");
    this.tasks.push("Code");
    this.tasks.push("Repeat!")
  }
  onSubmit(){
    console.log('You have successfully submitted your new task!');
    this.dialogService.openDialog('You have successfully submitted your task!');
    // this.isActive=false;
    // to toggle we changed the previous from false to !this.isActive
    this.isActive=!this.isActive;
    console.log(this.isActive);
  }

  getCurrentDateWithDay(): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', options);
  }



}



