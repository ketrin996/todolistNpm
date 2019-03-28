import dashboard from './dashboard-controll';

const container = document.createElement('div');
container.classList.add('cards-container');
container.id = 'container';

const mainContainer = document.getElementById('main-container')

mainContainer.appendChild(container);

const addIcon = document.createElement('input');
addIcon.setAttribute("type", "image");
addIcon.src = '../images/Add.svg';
addIcon.classList.add('add-image');
addIcon.addEventListener('click', function (e) {
    dashboard.addDashboard(container)
});

container.appendChild(addIcon);


const createBoard = (board) => {
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('card-item');

    const boardHeader = document.createElement('div');
    boardHeader.classList.add('card-header');

    const boardHeaderTitle = document.createElement('div');
    boardHeaderTitle.classList.add('card-header-title');

    const inputTitle = document.createElement("INPUT");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute('placeholder', board.title);
    inputTitle.classList.add('card-header-title-input');

    const headerIconDiv = document.createElement('div');
    headerIconDiv.classList.add('card-header-icon');

    const headerIcon = document.createElement('input');
    headerIcon.setAttribute("type", "image");
    headerIcon.src = "../images/delete.svg";
    headerIcon.classList.add('card-header-icon-img');

    headerIcon.addEventListener('click',  () => {
        dashboard.deleteDashboardData(boardContainer, board.id) //добавить api метод
    });

    const boardBody = document.createElement('div');
    boardBody.classList.add('card-body');

    const footer = document.createElement('div');
    footer.classList.add('class-footer');

    const inputTodo = document.createElement('input');
    inputTodo.setAttribute("type", "text");
    inputTodo.setAttribute('placeholder', "Add to do");
    inputTodo.classList.add('input-todos');


    headerIconDiv.appendChild(headerIcon);
    boardHeaderTitle.appendChild(inputTitle);
    boardHeader.appendChild(boardHeaderTitle);
    boardHeader.appendChild(headerIconDiv);

    boardContainer.appendChild(boardHeader);
    boardContainer.appendChild(boardBody);
    boardContainer.appendChild(footer);
    footer.appendChild(inputTodo);


    const renderAllTasks = (boardBody, tasks) => {
        tasks.map(createTask).forEach(function (tsk) {
            boardBody.appendChild(tsk)
        })
    };

    const renderTask = (boardBody, task) => {
        boardBody.appendChild(createTask(task))
    };

    const addNewTask = (boardBody, task) => {
        renderTask(boardBody, task);
        addTask(task);
    };

    inputTodo.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            addNewTask(boardBody, board.todos[0] )
        }
    });

    renderAllTasks(boardBody, board.todos);

    return boardContainer;
};

//create task

const createTask =  (task) => {

    const boardItem = document.createElement('div');
    boardItem.classList.add('card-body-item');


    const itemCheckbox = document.createElement("INPUT");
    itemCheckbox.setAttribute("type", "checkbox");
    itemCheckbox.classList.add('card-body-checkbox');

    const titleItem = document.createElement('div');
    titleItem.classList.add('card-body-title');
    titleItem.innerText = task.title;

    boardItem.appendChild(itemCheckbox);
    boardItem.appendChild(titleItem);

    const delBtn = document.createElement('input');
    delBtn.setAttribute("type", "image");
    delBtn.src = "../images/remove.svg";
    delBtn.classList.add('remove-image');

    delBtn.addEventListener('click', () => {
        deleteTaskData(boardItem, task.id)
    });
    boardItem.appendChild(delBtn);

    return boardItem;

};

const renderAllBoards = (container, boards) => {
    boards
        .map(createBoard)
        .forEach( (brd) => {
        container.appendChild(brd)
    })
};

const renderBoard = (container, boardData) => {
    container.appendChild(createBoard(boardData))
};

export default {
    renderAllBoards,
    renderBoard
}
