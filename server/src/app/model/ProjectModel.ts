/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IProjectModel = require('./interfaces/ProjectModel')

class ProjectModel {

    private _projectModel: IProjectModel;

    constructor(heroModel: IProjectModel) {
        this._projectModel = heroModel;
    }
    get name (): string {
        return this._projectModel.name;
    }

    get power (): string {
        return this._projectModel.power;
    }

    get amountPeopleSaved (): number {
        return this._projectModel.amountPeopleSaved;
    }

}
Object.seal(ProjectModel);
export =  ProjectModel;