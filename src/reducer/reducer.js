const reducer = (state = [], action) => {
    const i = action.i;
    switch (action.type) {
        case 'ON_HEART_CLICK':
            return [
                ...state.slice(0, i),
                {...state[i],  likes: {like: !state[i].likes.like}},
                ...state.slice(i + 1)
            ];
        case 'ON_AVATAR_ENTER':
            return [
                ...state.slice(0, i),
                {...state[i],  avatar: 'icon-emo-laugh'},
                ...state.slice(i + 1)
            ];
        case 'ON_AVATAR_LEAVE':
            return [
                ...state.slice(0, i),
                {...state[i],  avatar: 'icon-emo-happy'},
                ...state.slice(i + 1)
            ];
        case 'ON_OK_ENTER':
            return [
                ...state.slice(0, i),
                {...state[i],  icon_ok: 'icon-ok-circled2'},
                ...state.slice(i + 1)
            ];
        case 'ON_OK_LEAVE':
            return [
                ...state.slice(0, i),
                {...state[i],  icon_ok: 'icon-ok-circled'},
                ...state.slice(i + 1)
            ];
        case 'ON_OK_CLICK':
            return [
                ...state.slice(0, i),
                {...state[i],  comments: [action.comment].concat(state[i].comments)},
                ...state.slice(i + 1)
            ];
        case 'ON_TEXT_CLICK':
            return [
                ...state.slice(0, i),
                {...state[i],  isText: false},
                ...state.slice(i + 1)
            ];
        case 'ON_COMMENT_ENTER':
            return [
                ...state.slice(0, i),
                {...state[i],  icon_comment: 'icon-comment-empty'},
                ...state.slice(i + 1)
            ];
        case 'ON_COMMENT_LEAVE':
            return [
                ...state.slice(0, i),
                {...state[i],  icon_comment: 'icon-comment'},
                ...state.slice(i + 1)
            ];
        case 'ON_ARTICLE_SEND':
            return [
                ...state.slice(0, i),
                {...state[i],  isText: true, article: action.article},
                ...state.slice(i + 1)
            ];
        default:
            return state;
    }
}

export default reducer;