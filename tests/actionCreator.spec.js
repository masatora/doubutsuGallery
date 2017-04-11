import {expect} from 'chai';
import {onHeartClick, onAvatarEnter, onAvatarLeave, onOkEnter, onOkLeave, onOkClick, onTextClick, onCommentEnter, onCommentLeave, onArticleSend, onTagAppend, onTagRemove} from '../src/actions/actionCreators';

describe('Action Creators', () => {
    describe('Heart Click', () => {
        it('should change color of heart', () => {
            const actual = onHeartClick(0);
            const expected = {
                type: 'ON_HEART_CLICK',
                i: 0
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Avatar Enter', () => {
        it('should change icon of avatar', () => {
            const actual = onAvatarEnter(1);
            const expected = {
                type: 'ON_AVATAR_ENTER',
                i: 1
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Avatar Leave', () => {
        it('should change icon of avatar', () => {
            const actual = onAvatarLeave(2);
            const expected = {
                type: 'ON_AVATAR_LEAVE',
                i: 2
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('OK Button Enter', () => {
        it('should change icon of OK button', () => {
            const actual = onOkEnter(3);
            const expected = {
                type: 'ON_OK_ENTER',
                i: 3
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('OK Button Leave', () => {
        it('should change icon of OK Button', () => {
            const actual = onOkLeave(4);
            const expected = {
                type: 'ON_OK_LEAVE',
                i: 4
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Article Click', () => {
        it('should change html tag to input', () => {
            const actual = onTextClick(5);
            const expected = {
                type: 'ON_TEXT_CLICK',
                i: 5
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Icon of Comment Enter', () => {
        it('should change icon of comment', () => {
            const actual = onCommentEnter(6);
            const expected = {
                type: 'ON_COMMENT_ENTER',
                i: 6
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Icon of Comment Leave', () => {
        it('should change icon of comment', () => {
            const actual = onCommentLeave(7);
            const expected = {
                type: 'ON_COMMENT_LEAVE',
                i: 7
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('OK Button Click', () => {
        it('should send a comment', () => {
            const actual = onOkClick(8, {});
            const expected = {
                type: 'ON_OK_CLICK',
                i: 8,
                comment: {}
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Sent Article', () => {
        it('should send an article', () => {
            const actual = onArticleSend(9, '');
            const expected = {
                type: 'ON_ARTICLE_SEND',
                i: 9,
                article: ''
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Append Tag', () => {
        it('should append a new tag', () => {
            const actual = onTagAppend(10, 'new_tag');
            const expected = {
                type: 'ON_TAG_APPEND',
                i: 10,
                tag: 'new_tag'
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Remove Tag', () => {
        it('should remove a tag', () => {
            const actual = onTagRemove(11, 0);
            const expected = {
                type: 'ON_TAG_REMOVE',
                i: 11,
                idx: 0
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });
});