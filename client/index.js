import api from '../api/api';
import header from './header.js'
import dom from './dom';
import css from './styles/style.css';


const container = document.getElementById('container');

api.getBoardsData()
.then((data) => dom.renderAllBoards(container, data))
    .catch((err) => {
        console.log(err)
    });
