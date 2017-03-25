import React from 'react';

class AddComment extends React.Component {
    constructor (props) {
        super(props);
    }

    onOkClick (i, e) {
        e.preventDefault();

        const r = this.refs;
        if (r.author.value.trim() !== '' && r.comment.value.trim() !== '') {
            this.props.onOkClick(i, {[r.author.value]: r.comment.value});
            r.author.value = '';
            r.comment.value = '';
        }
    }

    render () {
        const {i, state, onOkEnter, onOkLeave} = this.props;
        return (
            <div className="form-group">
                <div id="fields">
                    <p><input type="text" className="form-control" ref="author" placeholder="Insert Your Name" required /></p>
                    <p><textarea className="form-control" ref="comment" placeholder="Insert Your Comment" rows="5" required /></p>
                    <p>
                        <i id="i-ok" className={'fo fo-5x ' + (state[i].icon_ok ||'icon-ok-circled')} onClick={this.onOkClick.bind(this, i)} onMouseEnter={onOkEnter.bind(null, i)} onMouseLeave={onOkLeave.bind(null, i)}></i>
                    </p>
                </div>
            </div>
        );
    }
}

export default AddComment;