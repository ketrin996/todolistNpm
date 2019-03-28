import axios  from 'axios';

const URL = 'http://localhost:8080';

const getBoardsData = () => axios.get(`${URL}/boards`)
    .then((res) => res.data);

const deleteBoard = (id) => axios.delete(`${URL}/board/${id}`);

const addBoard = () => axios.post(`${URL}/board`,{
    title: 'New title',
    todos: []
});

const updateBoard = (id, newTitle) => axios.put(`${URL}/board/${id}`,{
   title: newTitle
});

const addTask = () => axios.post(`${URL}/task/:boardId`,{
    title: 'New task',
    status: false
});

const updateTask = (id, newTitle, newStatus) => axios.put(`${URL}/task/:boardId/${id}`,{
    title: newTitle,
    status: newStatus
});

/*
const deleteTask = (id) => axios.delete(`${URL}/task/:boardId/${id}`);*/

export default {
    getBoardsData,
    deleteBoard,
    addBoard,
    updateBoard,
    addTask,
    updateTask
}
