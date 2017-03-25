import React from 'react';
import {Link} from 'react-router';
import Heart from './Heart';
import Article from './Article';

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
                            <img src={url+'/static/img/'+item.photo} title={this.props.msg} alt={item.article} />
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

export default Photo;