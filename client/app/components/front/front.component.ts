import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Project} from "../../models/project";
import {ProjectService} from "../../services/project.service";
// import { UUID } from 'angular2-uuid';
// const uuidv1 = require('uuid/v1');
//  import {Uuid}  from 'uuid';

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


    constructor(
        private router: Router,
        private projectService: ProjectService) {
    }

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