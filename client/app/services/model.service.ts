/**
 * New typescript file
 */
/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Project} from "../models/project";
import {ModelBackend} from "../models/modelBackend";
import {Status} from "../models/status";
import {WpUser} from "../models/wpUser";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


    
@Injectable()
export class ModelService {

    public modelsUrl = 'http://192.168.2.10:8080/RestApi/model';  // URL to web api
    private apiEndPoint = 'http://145.130.172.196/wp-json/wp/v2/users';
    //private wp = new WPAPI({ endpoint: 'http://192.168.2.10/wp-json' });
    //private wpApiUsers: WpApiUsers;
    //private res : any;
  
    constructor(private http: Http
            ) { }

    getWpUsers() : Observable<any> { 
        return this.http.get(this.apiEndPoint)
          .flatMap((data) => data.json())
          //.map((res:Response) => res.json() as WpUser[])
                         //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
//         .map((response: Response) => console.log(response.json()));
//            .then((response: any) => response.json())
//            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    putModel(model: ModelBackend): Promise<ModelBackend> {
    if ( model.file_list.length > 0) {
        let file: File = model.file_list[0];
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);
        formData.append('projectName', model.projectName);
        formData.append('branchName', model.branchName);
        formData.append('parserName', model.parserName);
        formData.append('comment', model.comment);
        formData.append('contentType', model.contentType);
        formData.append('userid', model.userid);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        //headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.modelsUrl, formData, options)
            .toPromise()
//            .map(res => res.json())
            .then(response => response.json())
            .catch(this.handleError);
//            .map(res => res.json())
//            .catch(error => Observable.throw(error))
//            .subscribe(
//                data => console.log('success'),
//                error => console.log(error)
//            )      
    //        return this.http
//            .post(this.projectsUrl, JSON.stringify(project), {headers:headers})
//            .toPromise()
//            .then(response => response.json())
//            .catch(this.handleError);
    }
  }
  getModelStatus(model: ModelBackend): Promise<Status>  {
         let url = `${this.modelsUrl}?&taskId=${model.taskId}`;
        return this.http.get(url)
          //.flatMap((data) => data.json())
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
  
  getModel(model: ModelBackend): any  {
         let url = `${this.modelsUrl}?projectName=${model.projectName}&branchName=${model.branchName}&parserName=${model.parserName}&contentType=${model.contentType}&userid=${model.userid}`;
        return this.http.get(url)
          //.flatMap((data) => data.json())
            //.toPromise()
            //.then(response => response.json())
            .catch(this.handleError);
    }
  
  
//  addCookie(cName: string, cValue: string) {
//    console.log('Adding: ', cName, cValue);
//    this.cookieService.set(cName, cValue);
//  //  this.update();
//  }
//  extractUserFromWpCookies() {
//    let cookies = this.cookieService.getAll();
//    let keys = Object.keys(cookies);
//    // console.log('test')
//    for (let key of keys) {
//      if (key.search(/wordpress_/gi) !== -1) {
//        const arr = cookies[key].split('|');
//        // console.log(arr);
//        let user = arr[0];
//        console.log(user);
//        return user;
//      }
//    }
//    return null;
//  }
  
  
}