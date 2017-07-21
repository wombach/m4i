/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Project} from "../models/project";
import {WpUser} from "../models/wpUser";
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
// var WPAPI = require( 'wpapi' );
// import { WpApiPosts, WpApiPages, WpApiComments, WpApiTypes, WpApiMedia, WpApiUsers, WpApiTaxonomies, WpApiStatuses, WpApiTerms, WpApiCustom} from 'wp-api-angular';
// import { CookieService } from 'ng2-cookies';

    
@Injectable()
export class ProjectService {

    private projectsUrl = 'api/projects';  // URL to web api
    private branchesUrl = 'api/branches';  // URL to web api
    private modelsUrl = 'api/projects';  // URL to web api
    private apiEndPoint = 'http://192.168.2.10/wp-json/wp/v2/users';
    //private wp = new WPAPI({ endpoint: 'http://192.168.2.10/wp-json' });
    //private wpApiUsers: WpApiUsers;
    //private res : any;
  
    constructor(private http: Http
//              ,  public cookieService: CookieService 
            ) { }

    getWpUsers() : Observable<any> { //: Promise<any> {
        return this.http.get(this.apiEndPoint)
            //.toPromise()
          .flatMap((data) => data.json())
          //.map((res:Response) => res.json() as WpUser[])
                         //...errors if any
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
//         .map((response: Response) => console.log(response.json()));
//            .then((response: any) => response.json())
//            .catch(this.handleError);
    }
  
//    getProjects(): Promise<Project[]> {
//        return this.http.get(this.projectsUrl)
//            .toPromise()
//            .then(response => response.json())
//            .catch(this.handleError);
//    }
    
    getProjects(committer: string): Promise<Project[]> {
        let url = `${this.projectsUrl}/${committer}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    
    getBranches(id: string): Promise<Project[]> {
        let url = `${this.branchesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getProject(id: string) {
        return this.http.get(this.projectsUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(project: Project): Promise<Project>  {
        if (project._id) {
            return this.put(project);
        }
      console.log("service save")
        return this.post(project);
    }

    private post(project: Project): Promise<Project> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.projectsUrl, JSON.stringify(project), {headers:headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private put(project: Project) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.projectsUrl}/${project._id}`;

        return this.http
            .put(url, JSON.stringify(project), {headers: headers})
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }

    delete(project: Project) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.projectsUrl}/${project._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
  
    uploadFile(fileList: FileList) {
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`${this.apiEndPoint}`, formData, options)
            .toPromise()
            .catch(this.handleError);
//            .map(res => res.json())
//            .catch(error => Observable.throw(error))
//            .subscribe(
//                data => console.log('success'),
//                error => console.log(error)
//            )      
    }
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