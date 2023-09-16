import { Component } from '@angular/core';
// @Component decorator is imported from angular core
// just like @Service is imported from spring library

//selector should be unique
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

}
