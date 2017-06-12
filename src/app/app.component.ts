import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverName = '';
  serverStatus = 'stable';

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
