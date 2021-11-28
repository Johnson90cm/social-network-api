const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        pizzaName: {
            type: String,
            required: true,
            trim:true
        },
        createdBy: {
            type: String,
            required: true,
            trim:true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        size: {
            type: String,
            required: true,
            // enum: ['Personal'],
            default: 'User'
        },
        toppings: [],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    },
);

// get total count of comments and replies on retrieval
UserSchema.virtual('commentCount').get(function() {
    return this.thoughts.reduce((total, Thought) => total + Thought.replies.length + 1, 0);
  });

// create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;