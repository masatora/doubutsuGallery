import React from 'react';

class Tag extends React.Component {
    constructor(props){
        super(props);
    }

    showTagInput () {
        document.getElementById('append-tag').className = 'show';
        document.getElementById('show-tags').className = 'hide';
    }

    onTagRemove () {
        console.log('hello');
    }

    onTagAppend (i, e) {
        e.preventDefault();
        const r = this.refs;
        const value = ''.trim.call(r.tag.value);

        if (value !== '') {
            this.props.onTagAppend(i, value);
            r.tag.value = '';
            document.getElementById('append-tag').className = 'hide';
            document.getElementById('show-tags').className = 'show';
        }
    }

    render () {
        const {i, state, onTagAppend, onTagRemove} = this.props;
        return (
            <div id="tag-view">
                <div id="show-tags" className="show">
                    {
                        state[i].tag.map((e, idx) => {
                            return (
                                <span className="tag pointer" key={idx}>
                                    {e}
                                    <i className="fo fo-2x icon-cancel-circled" onClick={onTagRemove.bind(this, i, idx)}></i>
                                </span>
                            );
                        })
                    }
                    <span id="plus-icon" className="pointer">
                        <i className="fo fo-2x icon-plus-circled text-gray" onClick={this.showTagInput.bind(this)}></i>
                    </span>
                </div>
                <div id="append-tag" className="hide">
                    <form role="form" onSubmit={this.onTagAppend.bind(this, i)}>
                        <div className="input-group">
                            <input className="form-control" type="text" ref="tag" />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.onTagAppend.bind(this, i)}>APPEND TAG!</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Tag;