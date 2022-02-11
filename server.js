import express from 'express'
import podyParser from 'body-parser'
import path  from 'path'
import competitions_router from './routers/competitionsRouter.js'
import bodyParser from 'body-parser'



const app=express()

app.use('/competition' , competitions_router )

// app.set('view engine' , 'ejs')
// app.set('views' , 'views')
// app.use(express.static('assets'))
// app.get('/home' , ( req, res , next) =>{ res.json({ request : "OK"});})

// app.get('/login' , ( req , res , next) =>{ res.render('login')  } )//res.sendFile(path.join(path.resolve() , 'views/login.html'))

// app.get('/register' , ( req , res , next ) =>{ res.render('register') })//res.sendFile(path.join(path.resolve() , 'views/register.html'))

// app.get('/getusers' , getUsers)

// app.post('/login' ,bodyParser.json() , authUser)

// app.post('/register' , bodyParser.json() , addUser )

// app.post('/deleteuser' ,  bodyParser.urlencoded({extended:true}) , deleteUser)

// app.post('/updateuser' ,  bodyParser.json() , updateUser)

// const query = await Users.findAll({})

// console.log( query[0].dataValues.name);

const   PORT = process.env.PORT || 3000

const IP = process.env.IP = '127.0.0.1'
app.listen(PORT , ( )=>{ console.log(` THE SERVER IS LISTENING ON ${ PORT}`);})