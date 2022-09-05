import express from "express"
import { User, validate } from '../models/users.js'
import bcrypt from 'bcryptjs'
const router = express.Router()



//------------Post to mongoDB---------------
router.post("/", async (req, res) => {
    try {

        //------------error----------
        const {error} = validate(req.body)
        
        if(error) {
            return res.status(400).send({message:error.details[0].message})
        }
        const user = await User.findOne({email:req.body.email})


        //-----------user----------
        if(user)
            return res.status(409).send({message:"User with given email already exists!"})
            const salt = await bcrypt.genSalt(Number(process.env.SALT))
            const hashPassword = await bcrypt.hash(req.body.password, salt)
        

        await new User({...req.body,password:hashPassword}).save()
        res.status(200).send({message:'User created successfully'})


    }catch(err) {
        //-----------Internal Server Error-------------
        res.status(500).send({message:'Internal Server Error'})
        console.log(err)
    }
})

export default router