const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('haven',{
    title:'Brewtiful Haven'
  })
})


module.exports = router