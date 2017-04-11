import React from 'react';

class Article extends React.Component {
    constructor (props) {
        super(props);
        const {i, state} = this.props;
        state[i]['isText'] = true;
    }

    onSubmit (i, e) {
        e.preventDefault();
        this.props.onArticleSend(i, this.refs.editArticle.value);
    }

    render () {
        const {i, state, isDetail, onTextClick, onArticleSend} = this.props;

        if (!state[i].isText && isDetail) {
            return (
                <form ref="articleForm" role="form" onSubmit={this.onSubmit.bind(this, i)}>
                    <input id="edit-article" className="form-control" type="text" ref="editArticle" defaultValue={state[i].article} />
                </form>
            );
        } else {
             return (
                <p className="article-text" onClick={onTextClick.bind(null, i)}>{state[i].article}</p>
            );
        }
    }
}

export default Article;