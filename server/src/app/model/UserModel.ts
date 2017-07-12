/**
 * New typescript file
 */

import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }
    get name (): string {
        return this._userModel.name;
    }

    get subscription (): string {
        return this._userModel.subscription;
    }

    get subscriptionExpiriation (): number {
        return this._userModel.subscriptionExpiriation;
    }
    
}
Object.seal(UserModel);
export =  UserModel;