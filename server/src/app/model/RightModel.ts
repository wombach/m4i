/**
 * New typescript file
 */
import IRightModel = require('./interfaces/RightModel');

class RightModel {

    private _rightModel: IRightModel;
    
    constructor(rightModel: IRightModel) {
        this._rightModel = rightModel;
    }
    get permission (): string {
        return this._rightModel.permission;
    }
    
    get users (): [string] {
        return this._rightModel.users;
    }

}
Object.seal(RightModel);
export =  RightModel;