'use strict'
/*
  Module dependencies
*/
import mongoose from 'mongoose'

export default class Connect {

  constructor(host, port, db) {
    let conn = `mongodb://${host}:${port}/${db}`
    mongoose.connect(conn, (err) => {
      (err)? console.log(err): console.log('connected')
    })
  }

  getModels() {
    return {
      A: require('./models/A').default(),
      C: require('./models/C').default()
    }
  }
}
