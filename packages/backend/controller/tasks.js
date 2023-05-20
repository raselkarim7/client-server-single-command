const getAllTask = (req, res) => {
    res.send( 'Get all task...')
}

const createTask = (req, res) => {
    res.send('Create a task...')
}

const getTask = (req, res) => {
    res.send('get a single a task...')
}

const updateTask = (req, res) => {
    res.send('update a single a task...')
}

const deleteTask = (req, res) => {
    res.send('delete a single a task...')
}

module.exports = {
    getAllTask, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask
}