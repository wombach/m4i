/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import ProjectModel = require("./../model/ProjectModel");
import IProjectModel = require("./../model/interfaces/ProjectModel");
import HeroSchema = require("./../dataAccess/schemas/HeroSchema");
import RepositoryBase = require("./BaseRepository");

class HeroRepository  extends RepositoryBase<IProjectModel> {
    constructor () {
        super(HeroSchema);
    }
}

Object.seal(HeroRepository);
export = HeroRepository;