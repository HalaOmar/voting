
import express from "express";
import bodyParser from "body-parser";

import * as competitionsController from '../controllers/competitions.js'

const competitions_router = express.Router()

competitions_router.get( '/' ,competitionsController.get_competitions)

competitions_router.post('/date-to-end' , bodyParser.urlencoded({extended:true}), competitionsController.date_to_end)

competitions_router.post( '/add' , bodyParser.json(),
                                competitionsController.add_competition)

export default competitions_router
                       