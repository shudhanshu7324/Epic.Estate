import { set } from "mongoose";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs'

export const test = (req,res) => {
    res.json({
        message: 'Hello World',
    });
};

export const updatedUser = async (req,res,next) => {
    if(req.user.id !== req.param.id) return next(errorHandler(401,'You can only update your own account!'))

        try{
            if(req.body.password)  req.body.password = bcryptjs.hashSync(req.body.password,10);

            const updatedUser = await User.findByIdAndUpdate(req.param.id,{
                $set: {
                    username: req.body.username,
                    email: req.body.username,
                    password : req.body.password,
                    avatar: req.body.avatar
                }
            },{new:true})

            const {password,...rest} = updatedUser._doc;

            res.status(200).json(rest);
        }catch(err){
            next(err);
        }
}