const modul = require('../models/user');
const bcrypt = require("bcryptjs");
const User = modul.user;

exports.createUser = (req,res)=>{
    const name = req.body.userName;
    // console.log(name)
    const email = req.body.userEmail;
    // console.log(email)
    const password = req.body.password;
    // console.log(password)

    const type = "user"
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
                    type
                }).save().then(result=>{

                    console.log("uploaded user")
                    // res.redirect('http://localhost:8080/logIn')

                    return res.send({errorEmail : false})

                }).catch(e=>{
                    console.log(e);
                    console.log("save error")
                })
            
        //email exist
        }else{
            console.log('email is already exist')
            console.log(result)
 
            return res.send({errorEmail: true });
            
        }
    })
}

exports.checkUser = (req,res)=>{
    const email = req.body.userEmail;
    const password = req.body.password;
    console.log(email)
    console.log(password)

    User.find({email: email}).then(result => {
       
        //email not found in data base
        if(Object.keys(result).length === 0) {

            console.log("email not found")
            return res.send({passwordIsMatch : false})
        }
        else {
            // if user exist, check given password with the encrypted password
            console.log("email found")
            bcrypt.compare(password, result[0].password, function(err, passwordIsMatch) {
                if(passwordIsMatch) {
                  // res.cookie('username', result[0].name, {
                  //     maxAge: 86400 * 1000, // 24h
                  //     httpOnly: true
                  // })
                  // res.cookie('userType', result[0].type, {
                  //     maxAge: 86400 * 1000, // 24h
                  //     httpOnly: true
                  // })
                  // res.cookie('userID', result[0]._id, {
                  //     maxAge: 86400 * 1000, // 24h
                  //     httpOnly: true
                  // })
                  // if(result[0].type=="user"){
                  //     res.redirect("/");
                  // }else if(result[0].type=="admin"){
                  //     res.redirect("/admin");
                  // }
                  console.log("right password")
                  return res.send({passwordIsMatch : true})
  
                } else {
                  // wrong password
                  console.log("wrong password")
                  return res.send({passwordIsMatch : false})
                }
              })
        }
      }).catch(err => {
        console.log(err);
    })
}

exports.createAmine= (req,res)=>{
    const name = req.body.userName;
    // console.log(name)
    const email = req.body.userEmail;
    // console.log(email)
    const password = req.body.password;
    // console.log(password)

    const type = "admin"
    const salt = bcrypt.genSaltSync(10);

    //check if input email exist
    User.find({email: email}).then(result => {

        //if return empty object mean email not exist
        if(Object.keys(result).length === 0) {
            console.log("email not found")

           //add new person
                new User({
                    name,
                    email,
                    password: bcrypt.hashSync(password, salt),
                    type
                }).save().then(result=>{

                    console.log("uploaded user")
                    // res.redirect('http://localhost:8080/logIn')


                    return  res.send({errorEmail : false})
                }).catch(e=>{
                    console.log(e);
                    console.log("save error")
                })
            
        //email exist
        }else{
            console.log('email is already exist')
            console.log(result) 
            return res.send({errorEmail: true });
            
        }
    })
    // const person = new Person({
    //     name:"admin",
    //     email:"test@admin.com",
    //     password: "123",
    //     type:"admin"
    // })
    // .save().then(result=>{
    //     console.log(result);
    //     console.log("uploaded person")
    // }).catch(e=>{
    //     console.log(e);
    //     console.log("save error")
    // })
}
