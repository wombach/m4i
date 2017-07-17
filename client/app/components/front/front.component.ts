import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Project} from "../../models/project";
import {ProjectService} from "../../services/project.service";

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
        this.projectService.getProjects()
            .then(projects => this.projects = projects);
    }

  save() {
      console.log("pressed save");
      console.log(this.project);
        this.projectService
            .save(this.project)
            .then(project => {
                this.project = project; // saved hero, w/ id if new                
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }
  
      goBack() {
        window.history.back();
    }
  
    gotoDetail(project: Project) {
        let link = ['/detail', project._id];
        this.router.navigate(link);
    }
}