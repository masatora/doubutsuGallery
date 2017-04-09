export function onHeartClick(i) {
    return {type: 'ON_HEART_CLICK', i};
};

export function onAvatarEnter(i) {
    return {type: 'ON_AVATAR_ENTER', i};
};

export function onAvatarLeave(i) {
    return {type: 'ON_AVATAR_LEAVE', i};
};

export function onOkEnter(i) {
    return {type: 'ON_OK_ENTER', i};
};

export function onOkLeave(i) {
    return {type: 'ON_OK_LEAVE', i};
};

export function onTextClick(i) {
    return {type: 'ON_TEXT_CLICK', i};
};

export function onCommentEnter(i) {
    return {type: 'ON_COMMENT_ENTER', i};
};

export function onCommentLeave(i) {
    return {type: 'ON_COMMENT_LEAVE', i};
};

export function onOkClick(i, comment) {
    return {type: 'ON_OK_CLICK', i, comment};
};

export function onArticleSend(i, article) {
    return {type: 'ON_ARTICLE_SEND', i, article};
};

export function onTagAppend(i, tag) {
    return {type: 'ON_TAG_APPEND', i, tag};
}

export function onTagRemove(i, idx) {
    return {type: 'ON_TAG_REMOVE', i, idx};
}