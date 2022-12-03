const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      img: {
        type: String
      },
     
      costEdit: {
        type: String
      },
      date1: {
        type: String
      },
      cost: {
        type: String
      },
      status:{
        type:String
      },
      linkct: {
        type: String
      },
      phone: {
        type: String,
        required: true
      },
      soluong: {
        type: String
      },
      nganh:{
        type:String,
        require:true
      },
      hinhthuctraluong:{
        type:String
      },
      luong:{
        type:String
      },
      address: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "users"
          }
        }
      ],
      comment: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: "users"
          },
          text: {
            type: String,
            required: true
          },
          name: {
            type: String
          },
          avatar: {
            type: String
          },
          date: {
            type: Date,
            default: Date.now
          }
        }
      ],
      date: {
        type: Date,
        default: Date.now
      }
    });
module.exports = Work = mongoose.model("work", WorkSchema);
