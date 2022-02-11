export function getLeftTime(end_date, user_timezone) {

    console.log(` object :>> ${user_timezone}`);
    let days ,days_modolus ,
        hours,hours_modulus ,
        minutes , minutes_modulus ,
        seconds ,current_date ,
        ended_at_seconds

    current_date       = new Date(user_timezone).getTime()
    console.log(` current_date :>> ${ current_date}`);
    ended_at_seconds   = end_date.getTime() //getTime() return end_datein milliseconds 
    days               = Math.floor( ( ended_at_seconds- current_date) / (1000*60*60*24) )
    days_modolus       = ((ended_at_seconds- current_date) % (1000*60*60*24))
    hours              = Math.floor( days_modolus /  (1000*60*60) ) 
    hours_modulus      =  days_modolus %  (1000*60*60) 
    minutes            = Math.floor( hours_modulus / (1000*60) )
    minutes_modulus    =  hours_modulus % (1000*60) 
    seconds            = Math.floor( minutes_modulus / 1000 )
      
    return { "days"   : days ,
             "hours"  : hours ,
             "minutes": minutes ,
             "seconds": seconds }
    
}