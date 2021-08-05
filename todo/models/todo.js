const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    value: String, //할일내용
    doneAt: Date, //체크시간
    order: Number, //item숫자
});

todoSchema.virtual("todoId").get(function () {
    return this._id.toHexString();
});

todoSchema.set("toJSON", {
    virtuals: true,
})

module.exports = mongoose.model("Todo", todoSchema);