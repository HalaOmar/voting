
import  Sequelize  from "sequelize";

import db  from "./connectdb.js";

const Competitions  =   db.define( 'competitions', {

                                "id":      {
                                            type : Sequelize.STRING ,
                                            
                                            primaryKey :true } , 

                                "started_at" : {
                                            type : Sequelize.TIME } , 

                                "ended_at" : {
                                            type : Sequelize.TIME  } , 
                                "active_" : {
                                            type : Sequelize.BOOLEAN  } , 
                                "photo": {
                                            type : Sequelize.STRING  } 

                                            });

export default Competitions