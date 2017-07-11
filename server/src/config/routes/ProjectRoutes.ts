/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import ProjectController = require("./../../controllers/ProjectController");

var router = express.Router();
class ProjectRoutes {
    private _projectController: ProjectController;

    constructor () {
        this._projectController = new ProjectController();
    }
    get routes () {
        var controller = this._projectController;

        router.get("/heroes", controller.retrieve);
        router.post("/heroes", controller.create);
        router.put("/heroes/:_id", controller.update);
        router.get("/heroes/:_id", controller.findById);
        router.delete("/heroes/:_id", controller.delete);

        return router;
    }


}

Object.seal(ProjectRoutes);
export = ProjectRoutes;