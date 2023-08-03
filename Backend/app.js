const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')

const User = require('./model/users')

//middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//connect to Database
const db_url = 'mongodb://localhost:27017/users'
mongoose.connect(db_url).then(()=>{
    console.log("Connected To DB")
})

app.post('/signin', (req, res)=>{
    User.findOne({email: req.body.email}).then((userData)=>{
        if(userData)
        {
            if(req.body.password === userData.password)
            {
                res.send({message: 'Login Successful', status:200})
            }
            else
            {
                res.send({message: 'Please Enter Valid Password'})
            }
        }
        else
        {
            res.send({message: 'User not Found'})
        }
    })
})

app.post('/signup', async(req, res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if(userData){
            // return  res.status(409).json({"message":"User Already Exists"})
            res.send({message: 'User Already Exists'})
        }
        else
        {
            //add the data
            let userData=new User ({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : req.body.email,
                password : req.body.password
            })
            userData.save().then(()=>{
                res.send({message: 'User Registered Successfully'})
            }).catch(()=>{
                res.send({message:'User Registration failed. Try after sometime'})
            })
        }
    })
})

app.listen(4000, ()=>{
    console.log('Server Running at Port 4000')
})

//Packages Installed
//npm i express -> for backend
//npm i mongoose -> for database
//npm i cors -> middleware for connecting frontend to backend