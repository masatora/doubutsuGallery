import React from 'react';
import Photo from './Photo';

class PhotoList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="row">
                {
                    this.props.state.map((e, i) => { 
                        return (
                            <Photo {...this.props} key={i} i={i} item={e} method="/detail/" msg="show detail" />
                        );
                    })
                }
            </div>
        );
    }
}

export default PhotoList;