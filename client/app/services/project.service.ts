/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Project} from "../models/project";
// import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {

    private projectsUrl = 'api/projects';  // URL to web api
    private branchesUrl = 'api/branches';  // URL to web api
    private modelsUrl = 'api/projects';  // URL to web api
    private apiEndPoint = 'test';
  
    constructor(private http: Http) { }

    getProjects(): Promise<Project[]> {
        return this.http.get(this.projectsUrl)
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
}