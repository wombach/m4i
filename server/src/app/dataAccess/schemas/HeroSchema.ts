/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IProjectModel = require('./../../model/interfaces/ProjectModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProjectSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            power: {
                type: String,
                required: true
            },
            amountPeopleSaved: {
                type: Number,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IProjectModel>('management', ProjectSchema.schema);
export = schema;""
