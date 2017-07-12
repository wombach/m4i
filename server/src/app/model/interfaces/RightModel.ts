/**
 * New typescript file
 */

import mongoose = require("mongoose");

interface RightModel extends mongoose.Document {
   permission: string;
   users: [string];
}
  
export = RightModel;