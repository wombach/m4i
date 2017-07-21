/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IProjectModel = require('./interfaces/ProjectModel');
import IRightModel = require('./interfaces/RightModel');

class ProjectModel {

    private _projectModel: IProjectModel;

    constructor(projectModel: IProjectModel) {
        this._projectModel = projectModel;
    }
    get type_ (): string {
        return this._projectModel.type_;
    }

    get name (): string {
        return this._projectModel.name;
    }

    get id (): string {
        return this._projectModel.id;
    }

    get documentation (): string {
        return this._projectModel.documentation;
    }

    get subscription (): string {
        return this._projectModel.subscription;
    }

    get expiration_date (): number {
        return this._projectModel.expiration_date;
    }
    get start_date (): number {
        return this._projectModel.start_date;
    }
    get end_date (): number {
        return this._projectModel.end_date;
    }
    get derived_from (): string {
        return this._projectModel.derived_from;
    }
    get project_id (): string {
        return this._projectModel.project_id;
    }
    get normalized_name (): string {
        return this._projectModel.normalized_name;
    }
    
    get committer (): string {
        return this._projectModel.committer;
    }
  
    get last_updated (): number {
        return this._projectModel.last_updated;
    }
    get rights (): [IRightModel] {
        return this._projectModel.rights;
    }

}
Object.seal(ProjectModel);
export =  ProjectModel;