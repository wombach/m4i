/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import ProjectRoutes = require('../routes/ProjectRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new ProjectRoutes().routes);
        
        return app;
    }
}
export = Routes;