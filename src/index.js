import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {Link, Router, Route, IndexRoute, IndexLink, browserHistory} from 'react-router';
import css from './css/main.css';
import data from './data/data.js';

class Photo extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const url = location.origin;
        const item = this.props.item;

        return (
            <div className="item">
                <figure className="container_pos">
                    <div className="img_section">
                        <Link to={this.props.method + item.photo}>
                            <img className="img_sty" src={url+'/src/img/'+item.photo} title={this.props.msg} alt={item.article} />
                        </Link>
                        <Heart />
                    </div>
                    <figcation className="text_section">
                        <Article article={item.article} isEdit={this.props.method !== '/detail/'} />
                    </figcation>
                </figure>
            </div>
        );
    }
}

class Heart extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isLike: false, icon: 'fo i-loc icon-heart-empty heart-color-empty fo-4x'};
    }

    onHeartClick () {
        if (this.state.isLike) {
            this.setState({isLike: false, icon: 'fo i-loc icon-heart-empty heart-color-empty fo-4x'});
        } else {
            this.setState({isLike: true, icon: 'fo i-loc icon-heart heart-color fo-4x'});
        }
    }

    render () {
        return (
            <i className={this.state.icon} onClick={this.onHeartClick.bind(this)}></i>
        );
    }
}

class Article extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isText: true, article: this.props.article};
    }

    onTextClick () {
        this.setState({isText: false, article: this.props.article});
    }

    onSubmit (e) {
        e.preventDefault();
        this.setState({isText: true, article: this.refs.articleEdit.value});
    }

    render () {
        if (!this.state.isText && this.props.isEdit) {
            return (
                <form ref="articleForm" onSubmit={this.onSubmit.bind(this)}>
                    <span><input type="text" ref="articleEdit" value={this.state.article} /></span>
                    <span><button>Edit</button></span>
                </form>
            );
        } else {
             return (
                <p onClick={this.onTextClick.bind(this)}>{this.state.article}</p>
            );
        }
    }
}

class PhotoList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                {
                    data.map((e) => { 
                        return (<Photo item={e} key={e.photo} method="/detail/" msg="show detail" />);
                    })
                }
            </div>
        );
    }
}

class PhotoDetail extends React.Component {
    constructor (props) {
        super(props);
        const idx = data.findIndex((e) => { 
            return e.photo === this.props.params.id;
        });
        const item = data[idx];

        this.state = {item, commends: item.commends};
    }

    onSubmit (e) {
        e.preventDefault();
        const r = this.refs;

        this.setState({
            commends: this.state.commends.concat([{
                [r.author.value]: r.commend.value
            }])
        });
    }

    render () {
        return (
            <div>
                <div>
                    <Photo item={this.state.item} method="/image/" msg="view image" />
                    <Commends commends={this.state.commends}/>
                </div>
                <div>
                    <form ref="commentForm" onSubmit={this.onSubmit.bind(this)}>
                        <span><input type="text" ref="author" /></span>
                        <span><input type="text" ref="commend" /></span>
                        <span><button>Send</button></span>
                    </form>
                </div>
            </div>
        );
    }
}

class Commends extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                {
                    this.props.commends.map((v, k) => { 
                        const name = Object.keys(v).join();
                        return (
                            <p key={k}>
                                <strong>{name} : </strong>
                                <span>{v[name]}</span>
                            </p>
                        );
                    })
                }
            </div>
        );
    }
}

class ViewImage extends React.Component {
    render () {
        const url = location.origin;
        const id = this.props.params.id;
        return (
            <Link to={'/detail/'+ id}>
                <img src={url +'/src/img/'+ id} title="show detail" />
            </Link>
        );
    }
}

class Home extends React.Component {
    render () {
        return (
            <div>
                <IndexLink to="/">
                    <h1>Albumn</h1>
                </IndexLink>
                {this.props.children}
            </div>
        );
    }
}

//action
//reducer
//store
//connect
//const App = connect(mapStatesToProps, dispatchs)();

render(
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={PhotoList} />
                <Route path="/detail/:id" component={PhotoDetail} />
                <Route path="/image/:id" component={ViewImage} />
            </Route>
        </Router>,
/*
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={PhotoList}>
                <InedxRoute component={PhotoList} />
                <Route path="detail/:id" component={PhotoDetail} />
            </Route>
        </Router>
    </Provider>,
*/
    document.getElementById('root')
);

