import React from 'react';
import {render} from 'react-dom';
import {createStore, bindActionCreators, compose} from 'redux';
import {Provider, connect} from 'react-redux';
import {Link, Router, Route, IndexRoute, IndexLink, browserHistory} from 'react-router';
import css from './css/main.scss';
import data from './data/data.js';

class Photo extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const url = location.origin;
        const {item, i} = this.props;
        const isDetail = /detail/.test(location.pathname);

        return (
            <div className={"col-sm-12 "+(isDetail ? 'col-md-7 col-lg-7 item-detail' : 'col-md-3 col-lg-3 item')}>
                <figure className="wrap">
                    <div className="img-wrap">
                        <Link to={this.props.method + item.photo}>
                            <img src={url+'/src/img/'+item.photo} title={this.props.msg} alt={item.article} />
                        </Link>
                        <Heart {...this.props} i={i}/>
                    </div>
                    <figcation className="text-wrap">
                        <Article {...this.props} i={i} article={item.article} isDetail={isDetail} />
                    </figcation>
                </figure>
            </div>
        );
    }
}

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

class PhotoList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        console.log('welcom test');
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

class PhotoDetail extends React.Component {
    constructor (props) {
        super(props);
        this.idx = data.findIndex((e) => { 
            return e.photo === this.props.params.id;
        });
    }

    render () {
        const {state, onAvatarEnter, onAvatarLeave} = this.props;
        return (
            <div id="detail-frame" className="row">
                <Photo {...this.props} i={this.idx} item={state[this.idx]} method="/image/" msg="view image" />
                <div id="detail-form" className="col-sm-12 col-md-4 col-md-offset-1 col-lg-4">
                    <div id="add-comment">
                        <div id="avatar">
                            <i id="i-head" className={'fo fo-5x ' + (state[this.idx].avatar || 'icon-emo-happy')} onMouseEnter={onAvatarEnter.bind(null, this.idx)} onMouseLeave={onAvatarLeave.bind(null, this.idx)}></i>
                        </div>
                        <form ref="comment-form" role="form">
                            <AddComment {...this.props} i={this.idx}/>
                        </form>
                        <hr />
                    </div>
                    <Comments {...this.props} comments={state[this.idx].comments} i={this.idx} />
                </div>
            </div>
        );
    }
}

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

class ViewPhoto extends React.Component {
    render () {
        const url = location.origin;
        const id = this.props.params.id;
        return (
            <div id="view" className="row">
                <Link to={'/detail/'+ id}>
                    <img id="view-img" src={url +'/src/img/'+ id} title="show detail" />
                </Link>
            </div>
        );
    }
}

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

//reducer
const reducer = (state = [], action) => {
    const i = action.i;
    switch (action.type) {
        case 'ON_HEART_CLICK':
            state[i].likes.like = !state[i].likes.like;
            return [...state];
        case 'ON_AVATAR_ENTER':
            state[i]['avatar'] = 'icon-emo-laugh';
            return [...state];
        case 'ON_AVATAR_LEAVE':
            state[i]['avatar'] = 'icon-emo-happy';
            return [...state];
        case 'ON_OK_ENTER':
            state[i]['icon_ok'] = 'icon-ok-circled2';
            return [...state];
        case 'ON_OK_LEAVE':
            state[i]['icon_ok'] = 'icon-ok-circled';
            return [...state];
        case 'ON_OK_CLICK':
            state[i].comments.unshift(action.comment);
            return [...state];
        case 'ON_TEXT_CLICK':
            state[i].isText = false;
            return [...state];
        case 'ON_COMMENT_ENTER':
            state[i]['icon_comment'] = 'icon-comment-empty';
            return [...state];
        case 'ON_COMMENT_LEAVE':
            state[i]['icon_comment'] = 'icon-comment';
            return [...state];
        case 'ON_ARTICLE_SEND':
            state[i].isText = true;
            state[i].article = action.article;
            return [...state];
        default:
            return state;
    }
}
//store and redux dev tool
const enhancers = compose(window.devToolsExtension && window.devToolsExtension());
const store = createStore(reducer, data, enhancers);

//connect
const mapStateToProp = (state) => {return {state}};
const mapDispatchToProp = (dispatch) => {
    return {
        onHeartClick: (i) => dispatch({type: 'ON_HEART_CLICK', i}),
        onAvatarEnter: (i) => dispatch({type: 'ON_AVATAR_ENTER', i}),
        onAvatarLeave: (i) => dispatch({type: 'ON_AVATAR_LEAVE', i}),
        onOkEnter: (i) => dispatch({type: 'ON_OK_ENTER', i}),
        onOkLeave: (i) => dispatch({type: 'ON_OK_LEAVE', i}),
        onOkClick: (i, comment) => dispatch({type: 'ON_OK_CLICK', i, comment}),
        onTextClick: (i) => dispatch({type: 'ON_TEXT_CLICK', i}),
        onCommentEnter: (i) => dispatch({type: 'ON_COMMENT_ENTER', i}),
        onCommentLeave: (i) => dispatch({type: 'ON_COMMENT_LEAVE', i}),
        onArticleSend: (i, article) => dispatch({type: 'ON_ARTICLE_SEND', i, article})
    };
};
const App = connect(mapStateToProp, mapDispatchToProp)(Home);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoList} />
                <Route path="/detail/:id" component={PhotoDetail} />
                <Route path="/image/:id" component={ViewPhoto} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

