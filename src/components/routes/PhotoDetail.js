import React from 'react';
import Photo from '../parts/Photo';
import AddComment from '../parts/AddComment';
import Comments from '../parts/Comments';
import Tag from '../parts/Tag';

class PhotoDetail extends React.Component {
    constructor (props) {
        super(props);

        this.idx = this.props.state.findIndex((e) => { 
            return e.photo === this.props.params.id;
        });

        window.scrollTo(0, 0);
    }

    render () {
        const {state, onAvatarEnter, onAvatarLeave} = this.props;
        return (
            <div id="detail-frame" className="row">
                <Tag {...this.props} i={this.idx} />
                <div>
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
            </div>
        );
    }
}

export default PhotoDetail;