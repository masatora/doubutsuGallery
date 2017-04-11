import React from 'react';
import {Link} from 'react-router';

class ViewPhoto extends React.Component {
    render () {
        const url = location.origin;
        const id = this.props.params.id;
        return (
            <div id="view" className="row">
                <Link to={'/detail/'+ id}>
                    <img id="view-img" src={url +'/static/img/'+ id} title="show detail" />
                </Link>
            </div>
        );
    }
}

export default ViewPhoto;