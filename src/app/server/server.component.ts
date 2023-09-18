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
  serverId: number=10;
  serverStatus: string = "offline";
  allowNewServer=false;
  serverCreationStatus="No server was created";
  getServerStatus(){
    return this.serverStatus;
  }

  constructor() {
    setTimeout(()=>{this.allowNewServer=true;},2000)
  }

  onCreateServer(serverCreationStatus:string){
    this.serverCreationStatus=serverCreationStatus;
  }

}
