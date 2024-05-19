import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://images.pexels.com/photos/23657500/pexels-photo-23657500/free-photo-of-a-man-in-black-shirt-standing-in-front-of-a-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;