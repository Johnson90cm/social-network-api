const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim:true
        },
        email: {
            type: String,
            required: false,
            trim:true
        },
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User'
        //     }
        // ],
        thoughts: [
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
// UserSchema.virtual('commentCount').get(function() {
//     return this.thoughts.reduce((total, Thought) => total + Thought.replies.length + 1, 0);
//   });

// create the Pizza model using the PizzaSchema
const User = model('User', UserSchema);

// export the Pizza model
module.exports = User;