/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require('express');
import ProjectController = require('./../../controllers/ProjectController');

var router = express.Router();
class ProjectRoutes {
    private _heroController: ProjectController;

    constructor () {
        this._heroController = new ProjectController();
    }
    get routes () {
        var controller = this._heroController;

        router.get('/heroes', controller.retrieve);
        router.post('/heroes', controller.create);
        router.put('/heroes/:_id', controller.update);
        router.get('/heroes/:_id', controller.findById);
        router.delete('/heroes/:_id', controller.delete);

        return router;
    }


}

Object.seal(ProjectRoutes);
export = ProjectRoutes;