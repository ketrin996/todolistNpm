const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const data = [
  {
    title: "board1",
    id: 1,
      todos: [
      {
          id: 1,
          title: "text1",
          status: true,
      },
      {
          id: 2,
          title: "text2",
          status: false,
      },
      {
          id: 3,
          title: "text3",
          status: true,
      },
    ]
  },
]

const getId = () => new Date().getTime()

const staticPath = path.resolve(__dirname, '../dist')


const app = express()

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static(staticPath))
  .get('/boards', (req, res) => {
    res.send(data)
  })
  .post('/board', (req, res) => {
    const id = getId()
    data.push({
      title: req.body.title,
      id,
        todos: []
    })
    res.send({ id })
  })
  .put('/board/:id', (req, res) => {
    const boardId = Number(req.params.id)
    const updBoard = data.find(({ id }) => id === boardId)
    if (updBoard) {
      updBoard.title = req.body.title
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  })
  .delete('/board/:id', (req, res) => {
    const boardId = data.findIndex(({ id }) => id === Number(req.params.id))
    if (boardId !== -1) {
      data.splice(boardId, 1)
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  })
  .post('task/:boardId', (req, res) => {
    const taskId = getId()
    const boardId = data.findIndex(({ id }) => id === Number(req.params.boardId))
    if (boardId === -1) {
      return res.sendStatus(404)
    }
    data[boardId].todos.push({
      id: taskId,
      title: req.body.title,
      status: false
    })
    res.send({ taskId })
  })
  .put('/task/:boardId/:taskId', (req, res) => {
    const board = data.find(({ id }) => id === Number(req.params.boardId))
    if (!board) {
      return res.sendStatus(404)
    }
    const task = board.todos.find(({ id }) => id === Number(req.params.taskId))
    task.status = req.body.status;
    task.title = req.body.title;
    res.sendStatus(200)
  })
    /*.delete('/task/:boardId/:id', (req, res) => {
        const board = data.find(({ id }) => id === Number(req.params.boardId))
        if (!board) {
            return res.sendStatus(404)
        }
        const task = board.todos.find(({ id }) => id === Number(req.params.taskId))
            data.splice(task, 1);
            res.sendStatus(200);
    })*/
  .listen(8080);

console.log('Server is running on http://localhost:8080')
