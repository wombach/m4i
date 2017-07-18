/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IProjectModel = require("./../../model/interfaces/ProjectModel");
//import RightSchema from './RightSchema';
//import { Long } from 'bson';
import RightSchema = require("./RightSchema");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProjectSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            type_ : {
                type: String,
                required: true
            },
            id : {
                type: String,
                required: true
            },
                        name : {
                type: String,
                required: true
            },
            normalized_name : {
                type: String,
                required: true
            },
            committer : {
                type: String,
                required: true
            },
            documentation : {
                type: String,
                required: false
            },
            subscription : {
                type: String,
                required: true
            },
            expiration_date : {
                type: Number,
                required: false
            },
            start_date : {
                type: Number,
                required: true
            },
            end_date : {
                type: Number,
                required: true
            },
            derived_from : {
                type: String,
                required: false
            },
            project_id : {
                type: String,
                required: false
            },
            last_updated : {
                type: Number,
                required: true
            },
            rights: {
                type: [RightSchema] ,
                required: true, index: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IProjectModel>("ProjectModel", ProjectSchema.schema);
export = schema; ""
