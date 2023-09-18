import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  userName:string = '';

  getUserName(userName:string){
    this.userName=userName;
    this.userName = '';
  }
}
