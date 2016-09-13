'use strict'
/*
  Module dependencies
*/
import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default () => {

  let C = new Schema({
    test: String,
    B: {
      type: Schema.ObjectId,
      ref: 'B'
    }
  }, { collection: 'C' })

  return mongoose.model('C', C)
}
