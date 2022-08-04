import express from 'express';
import {createUser, updateUser, deleteUser, getUser, getUsers} from '../controllers/user.js'
// import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js'
const router = express.Router()

// router.get('/checkauthention', verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete you account")
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send("hello Admin, you are logged in and you can delete you account")
// })


//CREATE
router.post('/', createUser)

//UPDATE
router.put('/:id', updateUser)

//DELETE
router.delete('/:id', deleteUser)

//GET
router.get('/:id', getUser)

//GET ALL
router.get('/', getUsers)

export default router