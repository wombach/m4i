/**
 * New typescript file
 */
import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true
            },
            subscription: {
                type: String,
                required: true
            },
            subscriptionExpiration: {
                type: Number,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("management", UserSchema.schema);
export = schema;""