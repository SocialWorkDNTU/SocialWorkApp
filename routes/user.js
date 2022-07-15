const express = require('express')
const app = express()

router.get('/user', (req, res) => {
    res.sendFile(__dirname + '/views/user/index.html')
})
module.exports = router;