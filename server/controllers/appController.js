
const modul = require('../models/user');
const bcrypt = require("bcryptjs");
const User = modul.user;

exports.createUser = (req,res)=>{
    const name = req.body.username;
    console.log(name)
    const email = req.body.email;
    console.log(email)
    const password = req.body.password;
    console.log(password)

    // const type = "user"
    const salt = bcrypt.genSaltSync(10);

    //check if input email exist
    User.find({email: email}).then(result => {

        //if return empty object mean email not exist
        if(Object.keys(result).length === 0) {
            console.log("email not found")
            
            console.log(password)

           //add new person
                new User({
                    name,
                    email,
                    password: bcrypt.hashSync(password, salt),
                    // type
                }).save().then(result=>{
                console.log(result);
                console.log("uploaded person")
                res.redirect("http://localhost:8080/")
                }).catch(e=>{
                    console.log(e);
                    console.log("save error")
                })
            
        //email exist
        }else{
            console.log(result)
            res.render("http://localhost:8080/", {errorEmail: true, message: "email is already exist!"});
        }
    })
}