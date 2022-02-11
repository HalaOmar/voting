import  Sequelize  from "sequelize";
import db  from "./connectdb.js";

const Users=db.define( 'users', {

"user_id": {
type : Sequelize.STRING ,
primaryKey :true } , 

"email" : {
type : Sequelize.STRING  } , 

"name" : {
type : Sequelize.STRING  } , 
"phone" : {
type : Sequelize.STRING  } , 
photo: {
type : Sequelize.STRING  } 
});

export default Users