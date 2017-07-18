/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");
//import {RightModel} from './RightModel';
import RightModel = require("./RightModel");

interface ProjectModel extends mongoose.Document {
id: string;
    type_: string;
    name: string;
    committer: string;
    documentation: string;
    start_date: number;
    end_date: number;
    derived_from: string;
    project_id: string;
    normalized_name: string;
    last_updated: number;
    rights: [RightModel];
}
  
export = ProjectModel;