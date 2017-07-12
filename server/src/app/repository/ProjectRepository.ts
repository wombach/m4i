/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import ProjectModel = require("./../model/ProjectModel");
import IProjectModel = require("./../model/interfaces/ProjectModel");
import ProjectSchema = require("./../dataAccess/schemas/ProjectSchema");
import RepositoryBase = require("./BaseRepository");

class ProjectRepository  extends RepositoryBase<IProjectModel> {
    constructor () {
        super(ProjectSchema);
    }
  
    retrieve (callback: (error: any, result: any) => void) {
        super.retrieveQuery(callback, "{type_: 'project'}");
    }
}

Object.seal(ProjectRepository);
export = ProjectRepository;