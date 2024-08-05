const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require("cors");
const config = require('./config');
const EmployeeModel = require('./models/Employee')
const Port = config.port;
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post('/login',(req, res) => {
    const{email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then((user=> {
        if(user){
            if(user.password==password){
                res.json("success");
            }
            else{
                res.json("password incorrect");
            }
        }
        else{
            res.json("user not found");

    }
}))
})


app.post('/signup', async (req, res) => {
            EmployeeModel.create(req.body)
            .then(employees => res.json(employees))
            .catch(err => res.json(err))
        
})

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})
