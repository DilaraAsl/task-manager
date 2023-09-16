import { Component } from '@angular/core';
import {FormatWidth} from "@angular/common";
// we let angular know that it is a component , part of the application
// needs to scan this when running the application

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
  itemImageUrl = '../assets/taskList.png';
  imageWidth=100;
  protected readonly FormatWidth = FormatWidth;
}
