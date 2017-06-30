import {Http} from "@angular/http";
import {User} from "../model/User";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService  {

    private baseUrl = "http://localhost:8080/api/v1/login";

    constructor(private http: Http){}

    checkIfExists(user: User){
        return this.http.post(`${this.baseUrl}`, user)
            .toPromise()
            .then( response => response.json())
            .catch(this.handleError);
    }

    registerUser(user: User) {
        return this.http.put(`${this.baseUrl}`,user)
            .toPromise()
            .then( response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        console.error(Promise.name);
        return Promise.reject(error.message || error);
    };

}