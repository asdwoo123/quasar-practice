const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017'

const connect = () => {
  MongoClient.connect(url, function (err, client) {
    if (!err) console.log('Connected successfully to server')
  })
  /* return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost:27017', {
      dbName: 'seojunDB2',
      useNewUrlParser: true,
      useCreateIndex: true
    }, (err) => {
      if (err) {
        resolve(err)
      } else {
        reject(true)
      }
    })
  }) */
}

export default connect
