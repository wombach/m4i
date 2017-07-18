/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project";
import {Model} from "../../models/model";
import { ActivatedRoute, Params } from '@angular/router';
import {ProjectService} from "../../services/project.service";
import { RequestOptions } from '@angular/http';
// import {SelectItem} from 'primeng/primeng';
// import {FileDroppa} from 'file-droppa';


@Component({
    selector: 'my-project-screen',
//    directives: ['FileDroppa'],
    templateUrl: './app/components/projectScreen/project-screen.component.html',
    styleUrls: ['./app/components/projectScreen/project.screen.component.css']
})

export class ProjectScreenComponent implements OnInit {
    @Input() project: Project;
    editDocumentation = false;
    branches: Project[];
    // branchesForm: SelectItem[] = [];
    selectedBranch: Project;
    newBranchName: string;
  
    models: Model[];
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.projectService.getBranches(id)
                    .then(branches => {
                    this.branches = branches;
            if(this.branches){
            for(var branch of this.branches){
              if(branch.type_==='project'){
                this.project = branch;
              } else {
               // this.branchesForm.push({label: branch.name, value: branch});
                if(branch.name==='MASTER') this.selectedBranch = branch;
              }
            }
            var index = this.branches.indexOf(this.project, 0);
            if (index > -1) {
               this.branches.splice(index, 1);
            }
                      }
              });
        });
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
    changeBranch(branch: Project) {
      console.log("pressed change branch ");
      console.log(branch);
    }
    cloneBranch() {
      console.log("pressed clone branch ");
      console.log(this.newBranchName);
    }
  
    goBack() {
        window.history.back();
    }
    getDocumentation(){
      if(this.project && this.project.documentation) return this.project.documentation;
      return "no description provided";
    }
  getName(){
      if(this.project && this.project.name) return this.project.name;
      return "still loading....";
    }
    getLastUpdated(){
      if(!this.project || !this.project.last_updated) return "still retrieving...";
    var d = new Date(this.project.last_updated);
    return (d.getDate()<10?'0':'') + d.getDate()  + "-" + 
           ((d.getMonth()+1)<10?'0':'') + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
           (d.getHours()<10?'0':'') + d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes();
  }
  
  fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        this.projectService.uploadFile(fileList);
//            .then(res => {
//                console.log(res);
//            })
//            .catch(error => this.error = error); // TODO: Display error message
    }
}
}