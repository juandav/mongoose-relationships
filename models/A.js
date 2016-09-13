'use strict'
/*
   Module dependencies
*/
import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default () => {

  let B = new Schema({
    test: String
  })

  let A = new Schema({
    test: String,
    B: [B] // embed schema
  }, { collection: 'A' })

  mongoose.model('B', B)
  return mongoose.model('A', A)
}
