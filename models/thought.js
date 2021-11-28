const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


// const ReactionSchema = new Schema(
//     {
//         // set custom id to avoid confusion with parent comment _id
//         replyId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId()
//         },
//         replyBody: {
//             type: String,
//             required: true,
//             trim: true
//         },
//         writtenBy: {
//             type: String,
//             required: true,
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: createdAtVal => dateFormat(createdAtVal)
//         }
//     },
//     {
//         toJSON: {
//             getters: true
//         }
//     }
// );

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
        replies: [ReplySchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
});

const Comment = model('Comment', ThoughtSchema);

module.exports = Comment;