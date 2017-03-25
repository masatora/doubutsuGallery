import React from 'react';

class Heart extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const {state, i, onHeartClick} = this.props;
        return (
            <i className={'fo i-loc fo-5x '+(state[i].likes.like ? 'icon-heart heart-color' : 'icon-heart-empty heart-color-empty')} onClick={onHeartClick.bind(null, i)}></i>
        );
    }
}

export default Heart;