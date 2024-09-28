const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

module.exports = model("Purchase", purchaseSchema);