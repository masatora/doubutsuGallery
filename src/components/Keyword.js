import React from 'react';
import Photo from './Photo';

class Keyword extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        //const {state, params} = this.props;
        return (
            <div className="row">
                {
                    this.props.state.map((e, i) => {
                        if (e.tag.indexOf(this.props.params.tag) !== -1) {
                            return (
                                <Photo {...this.props} key={i} i={i} item={e} method="/detail/" msg="show detail" />
                            );
                        }
                    })
                }
            </div>
        );
    }
}

export default Keyword;