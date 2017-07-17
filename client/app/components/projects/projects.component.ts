/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/project";
import { Router } from '@angular/router';

@Component({
    selector: 'my-projects',
    templateUrl: './app/components/projects/projects.component.html'
})

export class ProjectsComponent implements OnInit {

    projects: Project[];
    selectedProject: Project;
    error: any;

    constructor(
        private router: Router,
        private projectService: ProjectService) { }
    getProjects() {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }
    ngOnInit() {
        this.getProjects();
    }
    onSelect(project: Project) { this.selectedProject = project; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedProject._id]);
    }

    addProject() {
      console.log("pressed add project");
        this.selectedProject = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteProject(project: Project, event: any) {
        event.stopPropagation();
        this.projectService
            .delete(project)
            .then(res => {
                this.projects = this.projects.filter(h => h !== project);
                if (this.selectedProject === project) { this.selectedProject = null; }
            })
            .catch(error => this.error = error);
    }
  getLastUpdated(project: Project){
    // var f = require('date-fns/format');
    var d = new Date(project.last_updated);
    // return f.format(d, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    //var dateFormat = require('dateformat');
    // dateFormat(d, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    return d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
           d.getHours() + ":" + d.getMinutes();
  }
}
