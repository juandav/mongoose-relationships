'use strict'
/*
  Module dependencies
*/
import express from 'express'
import connect from './connect.js'
import dream from 'dreamjs'

const app = express()
const model = new connect('localhost', '27017', 'ABC')
const db = model.getModels()

app.get('/', (req, res) => {
  res.send(dream.output())
  //console.log(db)
})

app.post('/abc', (req, res) => {

  dream.schema('A', {
    test: String
  })

  dream.schema('B', {
    test: String
  })

  dream.schema('C', {
    test: String,
    B: String
  })

  let dataA = dream
    .useSchema('A')
    .generateRnd(1)
    .output()

  let dataB = dream
    .useSchema('B')
    .generateRnd(1)
    .output()

  let dataC = dream
    .useSchema('C')
    .generateRnd(1)
    .output()

  function postA(){
    let a = new db.A(dataA)
    a.save((err, isA) => {
      if (err) return console.log(err)
      postB(isA._id)
    })
  }
  function postB(id){
    db.A.findByIdAndUpdate(id, {$push: {B: dataB}}, {'new': true},
      (err, isB) => {
        if (err) return console.log(err)
        postC(isB.B[isB.B.length - 1]._id)
      }
    )
  }
  function postC(id){
    dataC.B = id
    let c = new db.C(dataC)
    c.save((err, isC) => {
      if (err) return console.log(err)
      console.log('A, B, C han sido insertados')
    })
  }

  postA()
  let result = []
  result.push(dataA)
  result.push(dataB)
  result.push(dataC)
  res.send(result)
})

app.listen('3033', 'localhost', (err) => {
  if(!err) console.log('server fun!')
})
