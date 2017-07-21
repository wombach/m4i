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
  
    retrieve (_user: string, callback: (error: any, result: any) => void) {
        super.retrieveQuery(callback, {'committer':_user, 'type_': "project"});
    }
    
    findBranchesById (id: string, callback: (error: any, result: any) => void) {
        console.log("query:  {end_date: -1, $or:[{id:'"+id+"'},{project_id:'"+id+"' }]}");
      // var obj = JSON.parse("{'end_date': -1, $or:[{'id':'"+id+"'},{'project_id':'"+id+"' }]}");
        super.retrieveQuery(callback, {'end_date': -1, $or:[{'id': id},{'project_id': id }]});
    }
}

Object.seal(ProjectRepository);
export = ProjectRepository;