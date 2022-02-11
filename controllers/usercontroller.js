
import Users from '../Model/Users.js'


export const addUser = async ( req , res , next ) =>{

 const user = await Users.create({ "user_id": Math.random()*Math.pow(10,10), ...req.body});
 user.save()
 res.json("Registered")
}

export const getUsers = async ( req, res , next ) =>{ 

    try{
        const users = await Users.findAll(); // console.log("All users:", JSON.stringify(users, null, 2));
        users.forEach(user => { console.log(` object :>> ${ user.name }`)   });
        res.render('users' , { users })
        
    } catch (e) {
        res.send("Something Error")
    }
}

export const updateUser = async ( req , res , next ) =>{
console.log(` In update :>> ${ req.body.phone}`);
let userid=req.body.userid
console.log(` userid : ${ userid}`);
delete req.body.userid
    try{
        await Users.update(req.body, {
            where: {
              user_id:userid
            }
          });
    }catch(e){

        res.send("Something error")
    }

    
}

export const deleteUser = async ( req , res , next ) =>{

    try{
    await Users.destroy({
        where: {
          user_id : req.body.userid
        }
      });

    res.send(`${ req.body.userid } is DELETED SUCCESSFULLY`)
    }catch (e) {
        res.send("Something Error")
    }
}

export const authUser = async ( req , res , next ) =>{

console.log(` object :>> ${ req.body.phone}`);

res.json({ "userphone" : req.body.phone})
}


export * from './usercontroller.js'