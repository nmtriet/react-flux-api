import React from 'react';
import { render } from 'react-dom';
import AppStore from '../stores/AppStore';
import UserApi from '../utils/UserApi';
import Item from './Item.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = this._getAppState();
	}

	_getAppState() {
        return {
            items: AppStore.items,
        };
    }

	componentDidMount() {
        this._listener = state => this.setState(this._getAppState());
        AppStore.addChangeListener(this._listener);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._listener);
    }

	_getData() {
		UserApi.get();
	}

	render() {
		var items = this.state.items;
        var list = [];

        for (var key in items) {
            list.push(<Item key={key} data={items[key]} />);
        }

		return (
			<div>
				<button onClick={this._getData}>Get Data</button>

				<ul id="main-list">
					{list}
				</ul>
			</div>
		);
	}
}
module.exports = App;