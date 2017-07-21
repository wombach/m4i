/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IRead = require("./interfaces/Read");
import IWrite = require("./interfaces/Write");
import IProjectModel = require("./../model/interfaces/ProjectModel");

import mongoose = require("mongoose");

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private _model: mongoose.Model<mongoose.Document>;

    constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
        // console.log(item);
        // var item2 = <IProjectModel> item;
        // item2.type_ = "branch";
        // item
        // this._model.create(item, callback);
    }

    retrieve (_user:string, callback: (error: any, result: any) => void) {
        this._model.find({}, callback)
    }

    retrieveQuery (callback: (error: any, result: any) => void, query: any) {
      console.log("base retrieve query");
      console.log(query);
      this._model.find(query, callback);
    }
  
    update (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({_id: _id}, item, callback);
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._model.remove({_id: this.toObjectId(_id)}, (err) => callback(err, null));
    }

    retire (_id: string, callback:(error: any, result: any) => void) {
        console.log("retire");
    }
  
    findById (_id: string, callback: (error: any, result: T) => void) {
        this._model.findById( _id, callback);
    }


    private toObjectId (_id: string) : mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }

}

export = RepositoryBase;