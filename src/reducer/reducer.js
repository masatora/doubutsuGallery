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

export default reducer;