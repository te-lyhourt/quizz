const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quizSchema = new Schema({
  
  questions:[{
    question: String,
    choice1: String,
    choice2:String,
    choice3:String,
    choice4:String,
    answer:String,
    type:String,
    id:String
  }],
  dueDate:{
    type: Date,
    require:true
  },
  createdDate: Date,
  title: {
    type: String,
    required: true
  },
  description:String,
  //who create quiz
  creater: {
    type: String,
    required: true
  },
  //who take quiz
  participant:[{
    name: String,
    id:{
      type: String,
      require:true
    },
    quizDate:{
      type: Date,
      require:true
    },
    score:{
      type:Date,
      require:true
    }
  }]
}, {collection: 'quizs'});

const quizs = mongoose.model('quizs', quizSchema);

module.exports = {quizs}