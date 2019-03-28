import api from '../api/api';
import dom from './dom';

const container = document.getElementById('main-container');

const deleteDashboardData = (node, id) => api.deleteBoard(id)
    .then(() => node.remove())
    .catch((e) => console.error(e));

const addDashboard = () => api.addBoard()
    .then((res) => {
        const dashboardId = res.data.id;
        dom.renderBoard(container,{id: dashboardId, title: 'New title', todos:[]})
    });

export default {
    deleteDashboardData,
    addDashboard
};
