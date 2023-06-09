import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server has been created";
  serverName = "";
  serverCreated = false;
  servers = ["Testserver", "Testserver 2"];


  constructor()
  {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer()
  {
    this.serverCreationStatus = "A server has been created! Name is " + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
