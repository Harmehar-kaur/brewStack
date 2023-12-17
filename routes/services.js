const express = require('express')
const router = express.Router()




router.get('/', (req, res) => {
  res.render('order',{
    title:'Brew Stack | Order'
  })
})



module.exports = router