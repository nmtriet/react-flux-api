import BaseStore from './BaseStore';

class AppStore extends BaseStore {
    constructor() {
        super();

        // Register to Dispatcher
        // Povide callback function which receives the Action base on Action type
        this.subscribe(() => this._registerToActions.bind(this));

        this._items = {};
    } 

    _registerToActions(action) {
        switch(action.actionType) {
            case 'GET_DATA_ACTION':
                console.log('Store receives Get Data Action');

                this._items = action.response.results;

                this.emitChange();
                break;

            default:
                break;
        };
    }

    // Get Method
    get items() { 
        return this._items;
    }
}
export default new AppStore();