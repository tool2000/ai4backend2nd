const express = require('express')

const router = express.Router()

router.get('/', (req, res)=> {
    res.send('서비스 첫 페이지입니다.')
})

module.exports = router