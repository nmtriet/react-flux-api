import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
    getData: (response) => {
        console.log('Get Data Action dispatches to Store');

        AppDispatcher.dispatch({
            actionType: 'GET_DATA_ACTION',
			response: response
        });
    }
}