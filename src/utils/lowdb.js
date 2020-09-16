import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('db')
const db = low(adapter)

const databaseInfo = {
  url: 'mongodb://localhost:27017',
  dbName: 'seojunDB2'
}

const password = '123'

const project = []

const theme = {}

const log = []

db.defaults({
  databaseInfo,
  password,
  project,
  theme,
  log
}).write()

export const setDB = (name, value) => {
  db.set(name, value).write()
}

export const getDB = name => db.get(name).value()

export const addDB = (name, value) => {
  db.get(name).unshift(value).write()
}
