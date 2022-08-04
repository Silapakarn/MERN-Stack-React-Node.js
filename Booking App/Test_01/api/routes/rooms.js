import express from 'express';
import {createRoom, updateRoom, deleteRoom, getRoom, getRooms} from '../controllers/room.js'
const router = express.Router()


//CREATE
router.post('/:hotelid', createRoom)

//UPDATE
router.put('/:id', updateRoom)

//DELETE
router.delete('/:id/:hotelid', deleteRoom)

//GET
router.get('/:id', getRoom)

//GET ALL
router.get('/', getRooms)



export default router