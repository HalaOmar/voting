import * as competitions_dao from '../doa/competitions.js'

export const add_competition = async ( req , res , next ) =>{

const trans_status    =    competitions_dao.addCompetition( {                   
                    ...req.body
                    })

(typeof trans_status != undefined) ? res.status(200).json (trans_status) :
                       res.status(400).json(trans_status)

   }

export const get_competitions = async ( req , res , next ) =>{

const competitions    = await competitions_dao.getAllCompetitions()

(typeof competitions != undefined &&
 typeof competitions != Error) ? res.status(200).json (competitions) :
                                 res.status(400).json(competitions)

    }

export const date_to_end = async ( req , res , next ) =>{
    
    const comp_id        = req.body.comp_id
    const user_time_zone = req.body.user_timezone
    console.log(` req.body :>> ${ typeof req.body.user_timezone}`);
    const left_time      = await competitions_dao.dateToEnd(comp_id ,user_time_zone) || 0

    res.json(left_time)
    
     }




