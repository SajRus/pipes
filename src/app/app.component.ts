import { Component } from '@angular/core';
import { ServerService } from "app/server.service";
import { Response } from "@angular/http"; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serverService: ServerService){}
   
  serverName = '';
  serverStatus = 'stable';
  appName = this.serverService.getAppName();

  appStatus = new Promise(
    (resolve, reject) => {
      setTimeout( () => {
        resolve('stabile')
      }, 2500)
    });
    
  filterStatus = '';
  servers = [
    {
      id: this.generateId(),
      name: 'Production Server',
      status: 'stable',
      started: new Date(2017, 6, 1)
    },
    {
      id: this.generateId(),
      name: 'User Database',
      status: 'stable',
      started: new Date(2017, 6, 2)
    },
    {
      id: this.generateId(),
      name: 'Development Server',
      status: 'offline',
      started: new Date(2017, 6, 3)
    },
    {
     id: this.generateId(),
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2017, 6, 4)
    }
  ];

  onAddServer(){
    this.servers.push({
      id: this.generateId(),
      name: this.serverName,
      status: this.serverStatus,
      started: new Date(2017, 6, 9)
    })
  }

  onStoreServer(){
    this.serverService.storeServers(this.servers).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    )
  }

  onGetServer(){
    this.serverService.getServers().subscribe(
      // (response: Response) => {
      //   const data = response.json();
      //   console.log(data)
      // },
      (servers: any[])=> {
          console.log(servers);
          this.servers = servers;
      },
      (error) => console.log(error)
    )
  }
  getStatusClasses(server: {instanceType: number, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  private generateId(){
    return Math.round(Math.random() * 10000);
  }
}
