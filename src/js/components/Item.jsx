import React, {PropTypes} from 'react';
import { render } from 'react-dom';

class Item extends React.Component {
    render() {
        return (
            <li key={this.props.key}>
            	<p><label>Name:</label> {this.props.data.user.name.title + '. ' + this.props.data.user.name.first + ' ' + this.props.data.user.name.last}</p>
            	<p><label>Gender:</label> {this.props.data.user.gender}</p>
            </li>
        );
    }
}
module.exports = Item;

Item.propTypes = {
    data: PropTypes.object.isRequired
}