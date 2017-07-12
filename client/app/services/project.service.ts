/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Project} from "../models/project";

@Injectable()
export class ProjectService {

    private projectsUrl = 'api/projects';  // URL to web api

    constructor(private http: Http) { }

    getProjects(): Promise<Project[]> {
        return this.http.get(this.projectsUrl)
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
            .then(response => response.json().data)
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
}