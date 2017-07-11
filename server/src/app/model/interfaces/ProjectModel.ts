/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface ProjectModel extends mongoose.Document {
    power: string;
    amountPeopleSaved: number;
    name: string;
}

export = ProjectModel;