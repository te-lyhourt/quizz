const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { nanoid } = require('nanoid')
var ObjectId = require('mongodb').ObjectID;

const quizSchema = new Schema({
  pin: {
    type: String,
    default: () =>  nanoid(11)
  },
  questions:[
    {
      question:{
        type:String,
        required:true
      },
      choice1:{
        type: String,
      },
      choice2:{
        type:String,
      },
      choice3:{ 
        type: String,

      },
      choice4:{ 
        type: String,
      },
      answer:{ 
        type: Number,
        required:true
      },
      type:{ 
        type: String,
        required:true
      },
      id: { 
        type: Number,
        required:true
      },
    }
  ],
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