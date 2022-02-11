import Competitions from "../Model/competitions.js";
import * as competition_servises from "../servicelayer/competitions.js"

export async function addCompetition(Competition) {

    const transaction_status =undefined
    const competition = await Competitions.create(
        Competition
    );
    competition.save()
    transaction_status= !competition ? "Registerd" : "Something Error"
    return transaction_status    
}

export async function getAllCompetitions() {
    try {
    const competitions = await Competitions.findAll();

     if (competitions != null) {
        return competitions 
     } 
      
     else{
         return Promise.resolve("Something Wrong")
     }
    }
    catch(e){
       return Promise.reject(e)
    }
}

export async function dateToEnd(com_id , user_timezone) {

    let ended_at , left_time
    try{
        const competition = await Competitions.findAll({
                                    where:{ "id" : com_id }
                                }) ; 
         ended_at           = competition[0].dataValues.ended_at 
         
         left_time          = competition_servises.getLeftTime(ended_at , user_timezone )

        } catch( e) {
            throw e
        }
        return left_time
         
}

export * from './competitions.js'

