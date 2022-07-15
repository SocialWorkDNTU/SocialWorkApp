//imports
const express = require('express')
const app = express()
const port = 3000



// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/images'))



// Set View's
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index')
})

app.get('/user', (req, res) => {
    res.sendFile(__dirname + '/views/user/index.html')
})

app.get('/student', (req, res) => {
    res.sendFile(__dirname + '/views/student/index.html')
})
app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/views/post/index.html')
})

app.get('/management', (req, res) => {
    res.sendFile(__dirname + '/views/post/management/index.html')
})
app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/views/admin/index.html')
})

app.get('/info', (req, res) => {
    res.sendFile(__dirname + '/views/student/info/index.html')
})
//Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))