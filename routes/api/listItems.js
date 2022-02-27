const express = require('express')
const mongoose = require('mongoose')
const ListItmes = require('../../models/ListItmes')
const List = new mongoose.model('Login', ListItmes)
const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const list = await List.find()
    res.json(list)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})
router.post('/', async (req, res) => {
  const list = new List(req.body)
  try {
    const result = await list.save()
    res.json(result)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})
router.patch('//:id', async (req, res) => {
  try {
    const list = await List.findById(req.params.id)
    list.description = req.body.description
    const result = await login.save()
    res.json(result)
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})
router.delete('//:id', async (req, res) => {
  try {
    const list = await List.findById(req.params.id)
    await list.remove()
    res.status(200).json({
      message: 'Successfully deleted',
    })
  } catch (err) {
    res.json(500).json({
      err: 'this is an server site error',
    })
  }
})

module.exports = router
