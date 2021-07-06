const quizModul = require('../models/quiz');
const Quizs = quizModul.quizs;
const userModul = require('../models/user');
var ObjectId = require('mongodb').ObjectID;
const userController = require('../controllers/userController');

const User = userModul.user;

exports.createQuiz = (req,res)=>{
    const quiz = req.body.quiz
    console.log(quiz)
    //check if creater exis
    User.find({_id:ObjectId(quiz.creater)}).then(result=>{
            
        if(Object.keys(result).length === 0) {
            return res.json({error:true,errorMessage:"creater not found"}) 
        }else{
            //check if quiz if already exist
            Quizs.find({
                $and: [
                    {creater:quiz.creater},
                    {createdDate:quiz.createdDate}
                ]
            }).then(result=>{
                
                console.log(result)
                //not quiz yet
                if(Object.keys(result).length === 0) {
                    console.log("quiz not yet exist")
                    //add new quiz
                    new Quizs({
                        questions:quiz.questions,
                        dueDate:new Date(quiz.dueDate),
                        createdDate: new Date(quiz.createdDate),
                        title: quiz.title,
                        description:quiz.description,
                        //who create quiz
                        creater:quiz.creater
                    }).save().then(result=>{
                        console.log("save")
                        return res.json({error:false})
                    }).catch(e=>{
                        console.log(e);
                        console.log("save error")
                        return res.json({error:true})
                    })
                }
                //quiz already exist
                else{
                    console.log("quiz already exist")

                    this.updateUser(result[0]._id,quiz)
                    console.log("save")
                    return res.json({error:false})
                }
            })
            
            
        }
    })
}

exports.updateUser = (quizID,data)=>{
    const query  = {_id:quizID}
    const update = {
        $set:{
            questions : data.questions,
            title:data.title,
            description: data.description
        }
    }
    const options = { upsert: false };
    Quizs.updateOne(query,update,options).then(result=>{
        console.log("not error")
    }).catch(e=>{
        console.log(e)
    })
}

exports.deleteQuiz = (req,res)=>{
    const quizID = req.params.quizID;

    Quizs.deleteOne({"_id":ObjectId(quizID)})
        .then(() => {
            console.log('Post is deleted'); 

        })
        .catch(err => {
          console.log(err);
    }).then(result=>{
        return res.json({delete:true})
    }).catch(e=>{
        console.log(e)
        return res.json({delete:false})
    })
}