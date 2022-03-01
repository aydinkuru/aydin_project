const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'db201' })
})

router.get('/bootstrap', (req, res) => {
  res.render('bootstrap', { title: 'bootstrap' })
})

module.exports = router
