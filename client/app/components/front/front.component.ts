import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Project} from "../../models/project";
import {ProjectService} from "../../services/project.service";
// import { UUID } from 'angular2-uuid';
// const uuidv1 = require('uuid/v1');
//  import {Uuid}  from 'uuid';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
    selector: 'my-front',
    templateUrl: './app/components/front/front.component.html',
    styleUrls: ['./app/components/front/front.component.css']
})

export class FrontComponent implements OnInit {
    projects: Project[] = [];
    project: Project;
    newProject = false;
    error: any;
    navigated = false; // true if navigated here
    // cookies: Object;
    user: string;

    constructor(
        private router: Router,
        private projectService: ProjectService) {
//                  Cookie.set('wordpress_logged_in_6ebf9f7ef5b8a2a1a06c62cc50693637',
// 'Andreas+Wombacher|1499936566|6PS6n0a3lboEJpCJ3ZXIBcpJLJxOJRX2Isel8Uizq6g|' +
// '7fd7d94a03aa6ddaca389fa0f7dbf90f976a8730936ebaf07efa83b8d258254a');
//      this.update();
    }

//  update() {
//    let cookies = Cookie.getAll();
//    let keys = Object.keys(cookies);
//    for (let key of keys) {
//      if (key.search(/wordpress_/gi) !== -1) {
//        // console.log('found it')
//        // console.log(this.cookies[key]);
//        const arr = cookies[key].split('|');
//        // console.log(arr);
//        this.user = arr[0];
//        this.user = this.user.replace('+',' ');
//        console.log(this.user);
//      }
//    }
//  }
  
    ngOnInit() {
        this.newProject = true;
        this.project = new Project();
        this.project.subscription = 'public';
        this.projectService.getProjects()
            .then(projects => this.projects = projects);
    }

  save() {
      console.log("pressed save ");
    // const uuidv1 = require('uuid/v1');
      // let id = UUID.UUID(); //uuidv1();
      // this.project.id = id; 
      console.log(this.project);
        this.projectService
            .save(this.project)
            .then(project => {
                console.log("reached then1 "+project);
                this.project = project; // saved hero, w/ id if new                
                console.log(this.project);
                this.gotoScreen(this.project);
              console.log("reached then3");
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
  
  updateCommitter() {
      console.log("pressed trigger ");
    // const uuidv1 = require('uuid/v1');
      // let id = UUID.UUID(); //uuidv1();
      // this.project.id = id; 
      console.log(this.project);
      console.log(top.document.getElementById("userid").getAttribute("value"));
      this.project.committer = top.document.getElementById("userid").getAttribute("value");
    }
  
//    goDashboard() {
//        let link = ['/dashboard'];
//        this.router.navigate(link);
//    }
    goScreen(project: Project) {
        // let link = ['/screen'];
        // this.router.navigate(link);
        this.router.navigate(['/screen', project._id]);
    }
  
    gotoScreen(project: Project) {
        let link = ['/screen', project.id];
        this.router.navigate(link);
    }
}
