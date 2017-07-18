/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require('express');
import ProjectBusiness = require('./../app/business/ProjectBusiness');
import IBaseController = require('./BaseController');
import IProjectModel = require('./../app/model/interfaces/ProjectModel');
import IRightModel = require('./../app/model/interfaces/RightModel');
//import RightModel = require("./../app/model/RightModel");
const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

class ProjectController implements IBaseController <ProjectBusiness> {

    
            
    create(req: express.Request, res: express.Response): void {
      console.log('message arrived');
        try {
            var user = 'Andreas';
            var time = Date.now();
            var RightModel = mongoose.model('RightModel');
            var right2 = new RightModel;
           
            right2.users = [user];
            right2.permission = 'read';
            var project: IProjectModel = <IProjectModel>req.body;
            project.type_ = 'project';
            // if(length(project.id)===0 )
            project.id = uuidv1();
            project.committer = user;
            project.start_date = time;
            if(project.subscription === 'private'){
              project.expiration_date = time+365*24*60*60*1000; // add one year
            }
            project.end_date = -1;
            project.derived_from = null;
            project.project_id = null;
            project.normalized_name = project.name.toLowerCase();
            project.last_updated = time;
//            var right = new RightModel(IRightModel);
//            right.permission = 'read';
//            right.users = [user];
          // console.log(right2);
          // console.log(project.rights);
          if ( !project.rights || project.rights.length === 0 ) {
              project.rights = [right2];
              // feature.params.push(
          } else {
            project.rights.push(right2);
          }
//            right = new RightModel();
//            right.permission = 'write';
//            right.users = [user];
//            project.rights.push({permission : 'read', users : ['Andreas']});
          console.log(project);
            var projectBusiness = new ProjectBusiness();
            projectBusiness.create(project, (error, result) => {
                if(error) {
                  console.log(error);
                  res.send({'error': error});
              }  else {
                  console.log(result);
                  res.send(result);
              }
            console.log('still continue...');
            var ProjectModel = mongoose.model('ProjectModel');
            var project2 = new ProjectModel;
            project2.type_ = 'branch';
            project2.project_id = project.id;
            project2.id = uuidv1();
            project2.name = 'MASTER';
            project2.normalized_name = 'master';
            project2.committer = user;
            project2.start_date = time;
            project2.end_date = -1;
            project2.derived_from = null;
            project2.documentation = "Master branch of the project.";
            project2.subscription = project.subscription;
            project2.last_updated = time;
            project2.rights = [right2];
            projectBusiness.create(project2, (error, result) => {
                if(error) {
                  console.log(error);
                  // res.send({'error': error});
              }  else console.log("success"); // res.send({'success': 'success'});
               });
            });
        }
        catch (e)  {
            console.log(e);
            res.send({'error': 'error in your request'});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var project: IProjectModel = <IProjectModel>req.body;
            var _id: string = req.params._id;
            var projectBusiness = new ProjectBusiness();
            projectBusiness.update(_id, project, (error, result) => {
                if(error) res.send({'error': 'error'});
                else res.send({'success': 'success'});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({'error': 'error in your request'});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var projectBusiness = new ProjectBusiness();
            projectBusiness.delete(_id, (error, result) => {
                if(error) res.send({'error': 'error'});
                else res.send({'success': 'success'});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({'error': 'error in your request'});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var projectBusiness = new ProjectBusiness();
            projectBusiness.retrieve((error, result) => {
                if(error) res.send({'error': 'error'});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({'error': 'error in your request'});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var projectBusiness = new ProjectBusiness();
            projectBusiness.findById(_id, (error, result) => {
                if(error) res.send({'error': 'error'});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({'error': 'error in your request'});

        }
    }
    findBranchesById(req: express.Request, res: express.Response): void {
        try {
            var id: string = req.params.id;
            console.log("controller: "+id);
            var projectBusiness = new ProjectBusiness();
            projectBusiness.findBranchesById(id, (error, result) => {
                if(error) res.send({'error': 'error'});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({'error': 'error in your request'});

        }
    }
}
export = ProjectController;