import express from "express"
import { User } from '../models/users.js'
import Joi from 'joi'
import bcrypt from 'bcryptjs'

const router = express.Router()


//------------------------generateAuthToken----------------------
router.post('/',async (req, res) => {
    
    try {
        const{error} = validate(req.body)
        if(error)
            return res.status(400).send({message:error.detail[0].message})

        const user = await User.findOne({email:req.body.email})
        if(!user)
            return res.status(401).send({message:'Invalid Email or Password'})

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword)
            return res.status(401).send({message:'Invalid Email or Password'})
        
        const token = user.generateAuthToken()
        res.status(200).send({data:token, message:'Logged in successfully'})

        
    }catch(err) {
        res.status(500).send({message:'Internal Server Error'})
    }
})


//--------------------validate------------------
const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    })
    return schema.validate(data)
}

export default router