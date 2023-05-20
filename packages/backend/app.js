const express = require('express')
const app = express()
const cors = require('cors')
const tasksRoutes = require('./routes/tasks')


console.log('Task Manager App')
const port = 8080

// middleware
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000'
}));


// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager app')
})
app.use('/api/v1/tasks', tasksRoutes)

app.listen(port, () => {
    console.log(`Server listening on port ${port}....`)
} )

