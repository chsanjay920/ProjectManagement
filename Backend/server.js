const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ProjectsManagement', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

const projectRouter = require('./routes/Projects')
const employeeRouter = require('./routes/Employees')
const projectassignmentRouter = require('./routes/ProjectAssignments')

const cors = require('cors');
app.use(express.json())
app.use(cors());

app.use('/projects', projectRouter)
app.use('/employees', employeeRouter)
app.use('/projectassignments',projectassignmentRouter)


app.listen(3000, () => console.log('Server Started'))