const reducer = (state = [], action) => {
    const i = action.i;
    const buildState = (insertValue) => {
        return [
            ...state.slice(0, i),
            {...state[i], ...insertValue},
            ...state.slice(i + 1)
        ];
    };

    switch (action.type) {
        case 'ON_HEART_CLICK':
            return buildState({likes: {like: !state[i].likes.like}});
        case 'ON_AVATAR_ENTER':
            return buildState({avatar: 'icon-emo-laugh'});
        case 'ON_AVATAR_LEAVE':
            return buildState({avatar: 'icon-emo-happy'});
        case 'ON_OK_ENTER':
            return buildState({icon_ok: 'icon-ok-circled2'});
        case 'ON_OK_LEAVE':
            return buildState({icon_ok: 'icon-ok-circled'});
        case 'ON_OK_CLICK':
            return buildState({comments: [action.comment].concat(state[i].comments)});
        case 'ON_TEXT_CLICK':
            return buildState({isText: false});
        case 'ON_COMMENT_ENTER':
            return buildState({icon_comment: 'icon-comment-empty'});
        case 'ON_COMMENT_LEAVE':
            return buildState({icon_comment: 'icon-comment'});
        case 'ON_ARTICLE_SEND':
            return buildState({isText: true, article: action.article});
        default:
            return state;
    }
}

export default reducer;