import {expect} from 'chai';
import {onHeartClick, onAvatarEnter, onAvatarLeave, onOkEnter, onOkLeave, onOkClick, onTextClick, onCommentEnter, onCommentLeave, onArticleSend} from '../src/actions/actionCreators';

describe('Action Creators', () => {
    describe('Heart Click', () => {
        it('should change color of heart', () => {
            const actual = onHeartClick(1);
            const expected = {
                type: 'ON_HEART_CLICK',
                i: 1
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Avatar Enter', () => {
        it('should change icon of avatar', () => {
            const actual = onAvatarEnter(2);
            const expected = {
                type: 'ON_AVATAR_ENTER',
                i: 2
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Avatar Leave', () => {
        it('should change icon of avatar', () => {
            const actual = onAvatarLeave(3);
            const expected = {
                type: 'ON_AVATAR_LEAVE',
                i: 3
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('OK Button Enter', () => {
        it('should change icon of OK button', () => {
            const actual = onOkEnter(4);
            const expected = {
                type: 'ON_OK_ENTER',
                i: 4
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('OK Button Leave', () => {
        it('should change icon of OK Button', () => {
            const actual = onOkLeave(5);
            const expected = {
                type: 'ON_OK_LEAVE',
                i: 5
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Article Click', () => {
        it('should change html tag to input', () => {
            const actual = onTextClick(6);
            const expected = {
                type: 'ON_TEXT_CLICK',
                i: 6
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Icon of Comment Enter', () => {
        it('should change icon of comment', () => {
            const actual = onCommentEnter(7);
            const expected = {
                type: 'ON_COMMENT_ENTER',
                i: 7
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Icon of Comment Leave', () => {
        it('should change icon of comment', () => {
            const actual = onCommentLeave(8);
            const expected = {
                type: 'ON_COMMENT_LEAVE',
                i: 8
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('OK Button Click', () => {
        it('should send comment', () => {
            const actual = onOkClick(9, {});
            const expected = {
                type: 'ON_OK_CLICK',
                i: 9,
                comment: {}
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });

    describe('Sent Article', () => {
        it('should send article', () => {
            const actual = onArticleSend(10, '');
            const expected = {
                type: 'ON_ARTICLE_SEND',
                i: 10,
                article: ''
            };
            expect(actual).to.be.deep.equal(expected);
        });
    });
});