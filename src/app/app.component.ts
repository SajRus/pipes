import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filteredStatus = '';
  appStatus = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('stable');
    }, 2000)
  })
  
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(2017, 6, 1)
    },
    {
      instanceType: 'large',
      name: 'User DB',
      status: 'stable',
      started: new Date(2017, 6, 2)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2017, 6, 3)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'critical',
      started: new Date(2017, 6, 4)
    }
  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer(){
    this.servers.push( {
      instanceType: 'small',
      name: 'Testing Aizoon Server',
      status: 'offline',
      started: new Date(2017, 6, 4)
    })
  }
}
