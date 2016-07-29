'use strict'

const Schema = use('Schema')

class RegisterSchema extends Schema {

  up () {
    this.create('registers', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('registers')
  }

}

module.exports = RegisterSchema
