import React from 'react';
import {IndexLink} from 'react-router';

class Home extends React.Component {
    render () {
        return (
            <div className="container">
                <div id="header-h1" className="row">
                    <div className="col-sm-12">
                        <IndexLink to="/">
                            <h1>どうぶつGallery</h1>
                        </IndexLink>
                    </div>
                </div>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}

export default Home;