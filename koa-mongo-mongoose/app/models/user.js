const Mongoose = require('mongoose')
const userSchema = new Mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        }
    }, 
    {timestamps: true}
);
Mongoose.model('User', userSchema);

module.exports = Mongoose.model('User');