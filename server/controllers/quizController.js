const quizModul = require('../models/quiz');
const userModul = require('../models/user');
var ObjectId = require('mongodb').ObjectID;

const User = userModul.user;

const Quizs = quizModul.quizs;


exports.createQuiz = (req,res)=>{
    const quiz = req.body.quiz
    console.log(quiz)
    //check if creater exis
    User.find({_id:ObjectId(quiz.creater)}).then(result=>{
        console.log(result)
        // if(Object.keys(result).length === 0) {
        //     return res.json({error:true,errorMessage:"creater not found"}) 
        // }else{
        //     //add new quiz
        //     new Quizs({
        //         questions:quiz.questions,
        //         dueDate:new Date(quiz.dueDate),
        //         createdDate: new Date(quiz.createdDate),
        //         title: quiz.title,
        //         description:quiz.description,
        //         //who create quiz
        //         creater:quiz.creater
        //     }).save().then(result=>{
        //         return res.json({error:false})
        //     }).catch(e=>{
        //         console.log(e);
        //         console.log("save error")
        //         return res.json({error:true})
        //     })
        // }
    })

}
