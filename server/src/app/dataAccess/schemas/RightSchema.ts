/**
 * New typescript file
 */
import DataAccess = require('../DataAccess');
import IRightModel = require("./../../model/interfaces/RightModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class RightSchema {

    static get schema () {
  //      var rightSchema = RightSchema;
        var schema =  mongoose.Schema({     
            permission : {
                type: String,
                required: true
            },
            users : {
                type: [String],
                required: true
            }
        });
      return schema;
    }
}
var schema2 = mongooseConnection.model<IRightModel>("RightModel", RightSchema.schema);
var schema = RightSchema.schema;
export = schema;""