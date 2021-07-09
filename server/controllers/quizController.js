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
            description: data.description,
            dueDate: new Date(data.dueDate)
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

exports.getQuizByPIN = (req,res)=>{
    const quizPIN = req.params.quizPIN;
    const userID = req.params.userID;

    //check if user exist
    User.find({_id:ObjectId(userID)}).then(user=>{
        if(Object.keys(user).length !== 0) {

            //check if quiz exist if exist update
            filters = {pin:quizPIN}
            //start update
            update = {
                $push:{
                    participant:{
                        name: user[0].name,
                        _id:ObjectId(userID),
                        joinDate: new Date(),
                        status:"join"
                    }
                }
                
            }
            Quizs.findOneAndUpdate(filters,update).then(result=>{
                
                if(result == null){
                    console.log("send null")
                    return res.json({found:false,errorMessage:"quiz not found"})
                } 
                else if(Object.keys(result).length !== 0) {
                    return res.json({found:true})
                }
            }).catch(e=>{
                console.log(e)
            })
        }
        else return res.json({found:false,errorMessage:"User Not found"})
    })
}


exports.loadQuizpage=(req,res)=>{
    const userID = req.params.userID;
    Quizs.find(
        { participant:{  $elemMatch: {_id : userID} } } 
    ).then(result=>{

        if(Object.keys(result).length === 0) {
            return res.json({quizs:false}) 
        }else{
            // console.log(result)
            return res.json({quizs:true,quizlist:result}) 
        }
    })
}

exports.getQuiz = (req,res)=>{

    console.log("get quiz")
    const quizID = req.params.quizID;
    filters = {_id: ObjectId(quizID)}
    Quizs.find(filters).then(result=>{
                
        if(result == null){
            console.log("send null")
            return res.json({found:false,errorMessage:"quiz not found"})
        } 
        else if(Object.keys(result).length !== 0) {
            console.log("send quiz")
            return res.json({found:true,quiz:result})
        }
    }).catch(e=>{
        console.log(e)
    })
}

exports.saveResult = (req,res)=>{
    console.log("save result call")
    const score = req.body.score
    console.log(score)
    const userID = req.params.userID;
    const quizID = req.params.quizID;
    filters = {_id: ObjectId(quizID),'participant._id' : ObjectId(userID)}
    update = {
        $set : {
            "participant.$.score" : score,
            "participant.$.status" : "finished",
            "participant.$.finishDate" : new Date(),

        }
    }
    Quizs.updateOne(filters,update).then(result=>{
        return res.json({save:true})
    }).catch(e=>{
        console.log(e)
        return res.json({save:false})
    })


    // const quizID = req.params.quizID;
    // const userID = req.params.userID;
    
    // Quizs.findOneAndUpdate(filters,update).then(result=>{
                
    //     if(result == null){
    //         console.log("send null")
    //         return res.json({found:false,errorMessage:"quiz not found"})
    //     } 
    //     else if(Object.keys(result).length !== 0) {
    //         return res.json({found:true})
    //     }
    // }).catch(e=>{
    //     console.log(e)
    // })

}
