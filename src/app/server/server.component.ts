import { Component } from '@angular/core';
import {reduce} from "rxjs";
// @Component decorator is imported from angular core
// just like @Service is imported from spring library

//selector should be unique
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  // used back tick ` we are defining a css class .online , [ngClass] this online class attaches or executes if the server is online
  styles: [`
  .online{
    color:white;
  }
  `]
})
export class ServerComponent {
  serverId: number=10;
  serverName: string = '';
  serverStatus: string = "offline";
  allowNewServer=false;
  serverCreationStatus:boolean=false;
  servers=['TestServer','TestServer 2'];
  getServerStatus(){
    return this.serverStatus;
  }

  constructor() {
    // allows new server to create after 2sec the code executes
    // setTimeout(()=>{this.allowNewServer=true;},2000)
    this.serverStatus=Math.random()>0.5? 'online': 'offline';
  }

  onCreateServer(serverName:string) {
    if (serverName.length > 2) {
      this.serverName = serverName;
      this.serverStatus = 'online';
      this.serverCreationStatus = true;
      this.servers.push(this.serverName);
    }
    else{
      this.serverStatus='offline';
      this.serverCreationStatus = false;
      this.serverName='';
    }
  }

  getColor():string {
    return this.serverStatus==='online'? 'green': 'red';

  }
}
