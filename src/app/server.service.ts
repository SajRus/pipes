import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService {
    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        // const header = new Headers({'my-header': 'pippo'});
        // return this.http.post('https://dev-http-ngaizoon.firebaseio.com/data.json', 
        // servers, 
        // {headers: header});

        return this.http.put('https://dev-http-ngaizoon.firebaseio.com/data.json',
            servers);
    }

    getServers() {
        return this.http.get('https://dev-http-ngaizoon.firebaseio.com/data')
            .map(
            (response: Response) => {
                const data = response.json();
                for(const server of data){
                    server.name = 'Aizoon_' + server.name;
                }
                return data
            }).catch(
                (error: Response) => {
                    return Observable.throw('Qualcosa è andato storto!');
                }
            );
    }

    getAppName(){
        return this.http.get('https://dev-http-ngaizoon.firebaseio.com/appName.json').map(
            (response: Response) => {
                return response.json()
            }
        )
    }
}