/**
 * New typescript file
 */
/**
 * New typescript file
 */
import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    name: string;
    subscription: string;
    subscriptionExpiriation: number;
}

export = UserModel;