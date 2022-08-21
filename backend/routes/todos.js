const express = require('express')
const router = express.Router()
const Validator = require('fastest-validator')
const { Todo } = require('../models')

const v = new Validator()

router.post('/', async (req, res) => {
  const schema = {
    name: 'string',
  }

  const validate = v.validate(req.body, schema)

  if (validate.length) {
    return res.status(400).json(validate)
  }

  const todo = await Todo.create(req.body)

  res.json(todo)
})

module.exports = router
