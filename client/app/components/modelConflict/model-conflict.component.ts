/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../models/project";
// import {Screen} from "../../models/screen";
// import {Model} from "../../models/model";
import {ModelBackend} from "../../models/modelBackend";
import {Status} from "../../models/status";

import { ActivatedRoute, Params } from '@angular/router';
import {ProjectService} from "../../services/project.service";
import {ModelService} from "../../services/model.service";
import { RequestOptions } from '@angular/http';
import {BrowserXhr} from '@angular/http';
//import * as FileSaver from 'file-saver';
//import { Message } from '_debugger';
//import { Cookie } from 'ng2-cookies';

// import {SelectItem} from 'primeng/primeng';
// import {FileDroppa} from 'file-droppa';
// let fileSaver = require('file-saver');
//import saveAs = require('file-saver');
//import saveAs from 'file-saver';
 //let saveAs = require('filesaver.js');



@Component({
    selector: 'my-model-conflict',
    templateUrl: './app/components/modelConflict/model-conflict.component.html',
    styleUrls: ['./app/components/modelConflict/model-conflict.component.css',]
  })

export class ModelConflictComponent implements OnInit {
//    @Input()
    
    

    constructor(
        private modelService: ModelService,
        private route: ActivatedRoute) {
//        this.selectedModel = new ModelBackend();
//        this.selectedModel.contentType = 'text/xml';
//        this.selectedModel.parserName = 'archimate3';
//        this.loadModel = new ModelBackend();
//        this.loadModel.contentType = 'text/xml';
//        this.loadModel.parserName = 'archimate3';
//        this.status = new Status();
//        this.status.state = 'completed';
//        this.selectedModel.taskId='15';
    }


    ngOnInit() {
//        this.projectService.addCookie('wordpress_logged_in_6ebf9f7ef5b8a2a1a06c62cc50693637',
//'Andreas+Wombacher|1499936566|6PS6n0a3lboEJpCJ3ZXIBcpJLJxOJRX2Isel8Uizq6g|' +
//'7fd7d94a03aa6ddaca389fa0f7dbf90f976a8730936ebaf07efa83b8d258254a');
//      
//        this.projectService.extractUserFromWpCookies();
//        this.route.params.forEach((params: Params) => {
//            let id = params['id'];
//            this.projectService.getBranches(id)
//                    .then(branches => {
//                    this.branches = branches;
//            if(this.branches){
//            for(var branch of this.branches){
//              if(branch.type_==='project'){
//                this.project = branch;
//              } else {
//               // this.branchesForm.push({label: branch.name, value: branch});
//                if(branch.name==='MASTER') this.selectedBranch = branch;
//              }
//            }
//            var index = this.branches.indexOf(this.project, 0);
//            if (index > -1) {
//               this.branches.splice(index, 1);
//            }
//                      }
//              });
//        });
    }
    
//    save() {
//      console.log("pressed save");
//      console.log(this.project);
//        this.projectService
//            .save(this.project)
//            .then(project => {
//                this.project = project; // saved hero, w/ id if new
//                this.editDocumentation = false;
//                //this.goBack();
//            })
//            .catch(error => this.error = error); // TODO: Display error message
//    }
//  
//    saveModel() {
//      console.log("pressed saveModel");
//      this.selectedModel.projectName = this.project.normalized_name;
//      this.selectedModel.userid = this.project.committer;
//      this.selectedModel.branchName = this.selectedBranch.name;
//      console.log(this.selectedModel);
//      this.modelService
//          .putModel(this.selectedModel)
//          .then(model => {
//                this.selectedModel = model; // saved hero, w/ id if new
//                console.log(this.selectedModel);
//                this.updateStatus();
//                // this.goBack();
//            })
//            .catch(error => this.error = error); // TODO: Display error message
//    }
//  
//    updateStatus() {
//      console.log("pressed updateStatus");
//      console.log(this.selectedModel.taskId);
//      let obj: any;
//      this.modelService
//          .getModelStatus(this.selectedModel)
//          .then((model: Status) => {
//                this.status = model; // saved hero, w/ id if new
//                // this.goBack();
//            })
//            .catch((error: any) => this.error = error); // TODO: Display error message
//    }
//
//    retrieveModel() {
//      console.log("pressed retrieveModel");
//      this.loadModel.projectName = this.project.normalized_name;
//      this.loadModel.userid = this.project.committer;
//      this.loadModel.branchName = this.selectedBranch.name;
//      //let modelsUrl = 'http://192.168.2.10/RestApi/model';  // URL to web api
//        let url = `${this.modelService.modelsUrl}?projectName=${this.loadModel.projectName}&branchName=${this.loadModel.branchName}&parserName=${this.loadModel.parserName}&contentType=${this.loadModel.contentType}&userid=${this.loadModel.userid}`;
//      window.location.href = url;
////       this.download(this.loadModel);
////      let obj: any;
////      console.log(this.loadModel);
////      this.download(this.loadModel);
////      this.modelService
////          .getModel(this.selectedModel)
////          .then((model: any) => {
////                obj = model; // saved hero, w/ id if new
////                //this.goBack();
////            })
////            .catch((error: any) => this.error = error); // TODO: Display error message
//    }
//    
//    changeBranch(branch: Project) {
//      console.log("pressed change branch ");
//      console.log(branch);
//    }
//    cloneBranch() {
//      console.log("pressed clone branch ");
//      console.log(this.newBranchName);
//    }
//  
//    goBack() {
//        window.history.back();
//    }
//    getDocumentation(){
//      if(this.project && this.project.documentation) return this.project.documentation;
//      return "no description provided";
//    }
//  getName(){
//      if(this.project && this.project.name) return this.project.name;
//      return "still loading....";
//    }
//  getCommitter(){
//      if(this.project && this.project.committer) return this.project.committer;
//      return "still loading....";
//    }
//    getLastUpdated(){
//      if(!this.project || !this.project.last_updated) return "still retrieving...";
//    var d = new Date(this.project.last_updated);
//    return (d.getDate()<10?'0':'') + d.getDate()  + "-" + 
//           ((d.getMonth()+1)<10?'0':'') + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
//           (d.getHours()<10?'0':'') + d.getHours() + ":" + (d.getMinutes()<10?'0':'') + d.getMinutes();
//  }
//  
//  fileChange(event: any) {
//    this.selectedModel.file_list = event.target.files;
////    if(fileList.length > 0) {
////      console.log(fileList);
////      this.selectedModel.file_list = event.srcElement.files;
// //       this.projectService.uploadFile(fileList);
////            .then(res => {
////                console.log(res);
////            })
////            .catch(error => this.error = error); // TODO: Display error message
//    //}
//}
//  public download(model: ModelBackend) {
//        // Xhr creates new context so we need to create reference to this
//        let self = this;
//
//        // Status flag used in the template.
//        this.pending = true;
//
//        // Create the Xhr request object
//        let xhr = new XMLHttpRequest();
//        //let url =  `/api/pdf/iticket/${this.no}?lang=en`;
//    let modelsUrl = 'http://192.168.2.10/RestApi/model';  // URL to web api
//        let url = `${modelsUrl}?projectName=${model.projectName}&branchName=${model.branchName}&parserName=${model.parserName}&contentType=${model.contentType}&userid=${model.userid}`;
//        url = "http://192.168.2.7:3000/index.html";
//        xhr.open('GET', url, true);
//        xhr.responseType = 'blob';
//
//        // Xhr callback when we get a result back
//        // We are not using arrow function because we need the 'this' context
//        xhr.onreadystatechange = function() {
//
//            // We use setTimeout to trigger change detection in Zones
//            setTimeout( () => { self.pending = false; }, 0);
//
//            // If we get an HTTP status OK (200), save the file using fileSaver
//            if(xhr.readyState === 4 && xhr.status === 200) {
//                var blob = new Blob([this.response], {type: 'text/xml'});
//                saveAs(blob, 'model.xml');
//            }
//        };
//
//        // Start the Ajax request
//        xhr.send();
//    }
  
}