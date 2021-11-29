const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    {
        writtenBy: {
            type: String,
            trim: true
        },
        commentBody: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        // replies: [ReplySchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// ThoughtSchema.virtual('reactionCount').get(function () {
//     return this.reaction.length;
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;