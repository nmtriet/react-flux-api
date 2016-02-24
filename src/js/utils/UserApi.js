import request from 'superagent';
import ApiAction from '../actions/ApiAction';

export default {
	get: () => {
		request.get('http://api.randomuser.me/?results=10')
			.set('Accept', 'application/json')
			.end(function(err, response) {
			if (err) return console.error(err);

			ApiAction.getData(response.body);
		});
	}
}