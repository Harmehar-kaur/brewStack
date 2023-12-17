const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('gifts',{
    title:'Brewtiful Gift'
  })
})


module.exports = router