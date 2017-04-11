import React from 'react';

class Comments extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const {i, state, onCommentEnter, onCommentLeave} = this.props;
        return (
            <div id="comments">
                <h3>
                    <i id="i-comment" className={'fo fo-5x '+ (state[i].icon_comment || 'icon-comment')} onMouseEnter={onCommentEnter.bind(null, i)} onMouseLeave={onCommentLeave.bind(null, i)}></i>
                </h3>
                {
                    this.props.comments.map((v, k) => { 
                        const name = Object.keys(v).join();
                        return (
                            <p key={k}>
                                <strong>{name} : </strong>
                                <span>{v[name]}</span>
                            </p>
                        );
                    })
                }
                <hr />
            </div>
        );
    }
}

export default Comments;